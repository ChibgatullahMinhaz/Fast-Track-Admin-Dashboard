// import React, { useState, useEffect } from "react";
// import { getAuth, updateProfile, updateEmail, sendPasswordResetEmail } from "firebase/auth";

// const Profile: React.FC = () => {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   const [name, setName] = useState(user?.displayName || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // Update name
//   const handleNameUpdate = async () => {
//     if (!user) return;
//     setLoading(true);
//     try {
//       await updateProfile(user, { displayName: name });
//       setMessage("Name updated successfully!");
//     } catch (err) {
//       setMessage("Error updating name");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update email
//   const handleEmailUpdate = async () => {
//     if (!user) return;
//     setLoading(true);
//     try {
//       await updateEmail(user, email);
//       setMessage("Email updated successfully!");
//     } catch (err) {
//       setMessage("Error updating email");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Reset password
//   const handlePasswordReset = async () => {
//     if (!user || !user.email) return;
//     setLoading(true);
//     try {
//       await sendPasswordResetEmail(auth, user.email);
//       setMessage("Password reset email sent!");
//     } catch (err) {
//       setMessage("Error sending reset email");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
//       <h2 className="text-2xl font-bold mb-6">Admin Profile</h2>

//       {message && <p className="mb-4 text-green-600">{message}</p>}

//       {/* Name */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Name</label>
//         <input
//           type="text"
//           className="w-full border px-3 py-2 rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button
//           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
//           onClick={handleNameUpdate}
//           disabled={loading}
//         >
//           Update Name
//         </button>
//       </div>

//       {/* Email */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Email</label>
//         <input
//           type="email"
//           className="w-full border px-3 py-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button
//           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
//           onClick={handleEmailUpdate}
//           disabled={loading}
//         >
//           Update Email
//         </button>
//       </div>

//       {/* Password Reset */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Password</label>
//         <button
//           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
//           onClick={handlePasswordReset}
//           disabled={loading}
//         >
//           Send Password Reset Email
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
