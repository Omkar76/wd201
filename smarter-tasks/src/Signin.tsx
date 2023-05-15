import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  localStorage.setItem("authenticated", "false");

  function handleSignin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("authenticated", "true");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-sm w-full bg-gray-900 p-6 rounded-md shadow-md shadow-black ">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Sign In
        </h2>
        <form onSubmit={handleSignin}>
          <div>
            <label
              htmlFor="username"
              className="block text-white font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-white font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="bg-black text-white p-2 border rounded-lg font-bold uppercase border-violet-500 w-full"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
