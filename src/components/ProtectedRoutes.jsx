// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext.jsx";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ component: Component }) => {
//   const authContext = useContext(AuthContext);

//   if (!authContext) {
//     return <p>Loading...</p>;
//   }

//   const { user } = authContext;

//   return user ? <Component /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
