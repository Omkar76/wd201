import { useContext, useState } from "react";
import InputField from "../shared/InputField";
import Button from "../shared/Button";
import { API_ENDPOINT } from "../../config/constants";
import { AuthContext, AuthResponse } from "../shared/AuthProvider";
import { useNavigate } from "react-router-dom";

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Sign-in failed");
      }

      console.log("Sign-in successful");

      const data: AuthResponse = await response.json();
      authContext?.signin(data);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        type="email"
        name="email"
        label="Email" // too many times bruh
        id="email"
        value={email}
        placeholder="john@example.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        type="password"
        name="password"
        label="Password"
        id="password"
        value={password}
        placeholder="********"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button className="mt-3">Sign In</Button>
    </form>
  );
};

export default SigninForm;
