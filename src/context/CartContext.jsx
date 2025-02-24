import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   if (user) {
  //     const savedCart = localStorage.getItem(`cartItems_${user.id}`);
  //     setCartItems(savedCart ? JSON.parse(savedCart) : []);
  //   } else {
  //     setCartItems([]);
  //   }
  // }, [user]);

  useEffect(() => {
    if (user) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let existingUser = users.find((u) => u.id === user.id);
      let savedCart = existingUser?.cartItems || [] 
      // setCartItems(existingUser?.cartItems || []);

      let guestCart = JSON.parse(localStorage.getItem("guestCart")) || []
      guestCart.forEach((guestItem) => {
        let existingItem = savedCart.find((item) => item.id === guestItem.id)
        if(existingItem) {
          existingItem.quantity += guestItem.quantity
        } else {
          savedCart.push(guestItem)
        }
      })

      existingUser.cartItems = savedCart
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.removeItem("guestCart")
      setCartItems(savedCart)
    } else {
      let guestCart = JSON.parse(localStorage.getItem("guestCart")) || []
      setCartItems(guestCart);
    }
  }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem(`cartItems_${user.id}`, JSON.stringify(cartItems));
  //   }
  // }, [cartItems, user]);

  useEffect(() => {
    if (user) {
      let users = JSON.parse(localStorage.getItem("users")) || []
      let existingUser = users.find((u) => u.id === user.id)
      if (existingUser) {
        existingUser.cartItems = cartItems;
        localStorage.setItem("users", JSON.stringify(users))
        }
      } else {
        localStorage.setItem("guestCart", JSON.stringify(cartItems))
    }
  }, [cartItems, user])

  function addItemToCart(item) {
    setCartItems((prevCart) => {
      const itemIndex = prevCart.findIndex((data) => data.id === item.id);
      // let newCart;
      if (itemIndex === -1) {
        // newCart = [...prevCart, { ...item, quantity: 1 }];
        return [...prevCart, { ...item, quantity: 1 }];
      } else {
        // newCart = prevCart.map((data, index) =>
        //   index === itemIndex ? { ...data, quantity: data.quantity + 1 } : data
        // );
        return prevCart.map((data, index) =>
            index === itemIndex ? { ...data, quantity: data.quantity + 1 } : data
          );
      }
      // return newCart;
    });
  }

  function removeQuantityFromCart(id) {
    setCartItems((prevCart) =>
      prevCart
        .map((data) =>
          data.id === id ? { ...data, quantity: data.quantity - 1 } : data
        )
        .filter((data) => data.quantity > 0)
    );
  }

  function removeItemFromCart(id) {
    setCartItems((prevCart) => prevCart.filter((data) => data.id !== id));
  }

  function isItemAdded(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    if (itemIndex == -1) {
      return null;
    } else {
      return arr[itemIndex];
    }
  }

  // function checkout() {
  //   if (user && cartItems.length > 0) {
  //     const checkoutData = {
  //       user: { id: user.id, name: user.name },
  //       cartItems,
  //       date: new Date(),
  //     };
  //     const cartHistory =
  //       JSON.parse(localStorage.getItem(`cartHistory_${user.id}`)) || [];
  //     localStorage.setItem(
  //       `cartHistory_${user.id}`,
  //       JSON.stringify([...cartHistory, checkoutData])
  //     );
  //     setCartItems([]);
  //     toast.success("Checkout Successful! Your cart has been saved.");
  //     // alert("Checkout Successful! Your cart has been saved.");
  //   } else {
  //     toast.error("Your cart is empty!")
  //     // alert("Your cart is empty!");
  //   }
  // }

  function checkout() {
    if (user && cartItems.length > 0) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let existingUser = users.find((u) => u.id === user.id)
      if (existingUser) {
        existingUser.orderHistory = existingUser.orderHistory || []

        const checkoutData = {
          cartItems,
          date: new Date(),
        }

        existingUser.orderHistory.push(checkoutData)

        localStorage.setItem("users", JSON.stringify(users))

        // setCartItems([])
        existingUser.cartItems = []
        localStorage.setItem("users", JSON.stringify(users))
        setCartItems([])

        toast.success("Checkout Successful! Your cart has been saved.");
      }
    } else {
        toast.error("Your cart is empty!")
    }
  }

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     if (!user) {
  //       localStorage.removeItem("guestCart");
  //     }
  //   };
  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  // }, [user]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        isItemAdded,
        removeQuantityFromCart,
        removeItemFromCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
