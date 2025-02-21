import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function OrderDetails() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [ orderHistory, setOrderHistory ] = useState([])

  
  // useEffect(() => {
    //     if (!user) {
      //       navigate("/login");
      //     }
      //   }, [user, navigate]);
      
      // Fetch cart history for the user
      // const cartHistory =
      //   JSON.parse(localStorage.getItem(`cartHistory_${user?.id}`)) || [];
      // const users = JSON.parse(localStorage.getItem("users") || []);
      // const currentUser = users.find((u) => u.id === user?.id)
      // const orderHistory = currentUser?.orderHistory || []
      
      // const clearOrderHistory = () => {
        //   if (!currentUser) return;
        
        //   const updatedUsers = users.map((u) =>
          //   u.id === user.id ? {...u, orderHistory : []} : u
        //   )
        
        //   localStorage.setItem("users", JSON.stringify(updatedUsers))
        
        //   window.location.reload()
        // }
        
        useEffect(() => {
          if (user) {
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            const currentUser = users.find((u) => u.id === user.id);
            setOrderHistory(currentUser?.orderHistory || [])
          }
        }, [user]);

        const clearOrderHistory = () => {
          if (!user) return;

          const users = JSON.parse(localStorage.getItem("users") || "[]");
          const updatedUsers = users.map((u) =>
            u.id === user.id ? {...u, orderHistory : [] } : u
          );

          localStorage.setItem("users", JSON.stringify(updatedUsers))
          setOrderHistory([])
        }

        return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Your Order Details
        </h2>

        {orderHistory.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              You have not checked out any orders yet.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="px-4 py-2 bg-orange-400 text-white rounded-full hover:bg-orange-500 cursor-pointer transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div>
            {orderHistory.map((order, index) => (
              <div key={index} className="border-b py-4 mb-4">
                <h3 className="text-xl font-medium">Order {index + 1}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Date:</strong> {new Date(order.date).toLocaleString()}
                </p>
                <h4 className="font-semibold">Items:</h4>
                <ul className="list-disc pl-5">
                  {order.cartItems.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">
                      {item.title} (Quantity: {item.quantity}) - 
                      <strong> ${Math.round(item.price * item.quantity)}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button
              onClick={clearOrderHistory}
              className="w-full mt-4 px-4 py-2 bg-orange-400 cursor-pointer text-white rounded-lg hover:bg-orange-500 transition"
            >
              Clear History
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderDetails;
