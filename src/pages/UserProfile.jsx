// import React, { useContext, useState, useEffect } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// function UserProfile() {
//   const { user, setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [editField, setEditField] = useState(null);
//   const [updatedData, setUpdatedData] = useState({
//     name: "",
//     username: "",
//     password: "",
//   });

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//     } else {
//       setUpdatedData({
//         name: user.name || "",
//         username: user.username || "",
//         password: "",
//       });
//     }
//   }, [user, navigate]);

//   if (!user) return null;

//   const handleEdit = (field) => {
//     setEditField(field);
//   };

//   const handleChange = (e) => {
//     setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
//   };

//   const handleSave = (field) => {
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     let updatedUsers = users.map((u) =>
//       u.id === user.id ? { ...u, [field]: updatedData[field] } : u
//     );

//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//     setUser({ ...user, [field]: updatedData[field] });
//     setEditField(null);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center mb-4">
//           User Profile
//         </h2>

//         {/* Name */}
//         <div className="mb-4 flex justify-between items-center">
//           <p className="font-medium">
//             Name:{" "}
//             {editField === "name" ? (
//               <input
//                 type="text"
//                 name="name"
//                 value={updatedData.name}
//                 onChange={handleChange}
//                 className="border px-2 py-1 rounded"
//               />
//             ) : (
//               user.name
//             )}
//           </p>
//           <button
//             onClick={() =>
//               editField === "name" ? handleSave("name") : handleEdit("name")
//             }
//             className="text-blue-500"
//           >
//             {editField === "name" ? "Save" : "Edit"}
//           </button>
//         </div>

//         {/* Username */}
//         <div className="mb-4 flex justify-between items-center">
//           <p className="font-medium">
//             Username:{" "}
//             {editField === "username" ? (
//               <input
//                 type="text"
//                 name="username"
//                 value={updatedData.username}
//                 onChange={handleChange}
//                 className="border px-2 py-1 rounded"
//               />
//             ) : (
//               user.username
//             )}
//           </p>
//           <button
//             onClick={() =>
//               editField === "username"
//                 ? handleSave("username")
//                 : handleEdit("username")
//             }
//             className="text-blue-500"
//           >
//             {editField === "username" ? "Save" : "Edit"}
//           </button>
//         </div>

//         {/* Password */}
//         <div className="mb-4 flex justify-between items-center">
//           <p className="font-medium">
//             Password:{" "}
//             {editField === "password" ? (
//               <input
//                 type="password"
//                 name="password"
//                 value={updatedData.password}
//                 onChange={handleChange}
//                 className="border px-2 py-1 rounded"
//               />
//             ) : (
//               "********"
//             )}
//           </p>
//           <button
//             onClick={() =>
//               editField === "password"
//                 ? handleSave("password")
//                 : handleEdit("password")
//             }
//             className="text-blue-500"
//           >
//             {editField === "password" ? "Save" : "Edit"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
