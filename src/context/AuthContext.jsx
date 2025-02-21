import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  function signup(newUser) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === newUser.email)) {
      toast.info("Email already exists!")
      // alert("Email already exists!");
      return;
    }

    newUser.id = Date.now();
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setUser(newUser);
    toast.success("Account Successfully Registered!")
    // alert("Account Successfully Registered!");
  }

  function login(email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );
    
    // if(users.length === 0) {
    //   toast.error("User not found! Please Signup first")
    //   return;
    // }

    if (!existingUser) {
      toast.info("User not found! Please Signup first")
      return;
    }
    
    if (existingUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
      setUser(existingUser);
      toast.success(`Login Successfully! Welcome, ${existingUser.name}`)
      // alert(`Login Successfully! Welcome, ${existingUser.name}`);
    } else {
      toast.alert("Invalid Email or Password!")
      // alert("Invalid Email or Password!");
    }
  }

  function logout() {
    if (user) {
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem(`cartItems_${user.id}`);
      setUser(null);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
