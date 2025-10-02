import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Firebase config
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore();

const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState(""); // email or phone
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (identifier.includes("@")) {
        // Email login
        await signInWithEmailAndPassword(auth, identifier, password);
        navigate("/"); // Dashboard
      } else {
        // Phone login (Firestore)
        const q = query(
          collection(db, "users"),
          where("phoneNumber", "==", identifier),
          where("password", "==", password) // For demo; in prod use hashed password
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Fake login: store uid in local storage
          const userDoc = querySnapshot.docs[0].data();
          localStorage.setItem("user", JSON.stringify(userDoc));
          navigate("/");
        } else {
          setError("Invalid phone number or password");
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1">Email or Phone Number</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="you@example.com or 01712345678"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
