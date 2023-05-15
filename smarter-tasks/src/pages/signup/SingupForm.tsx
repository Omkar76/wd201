import React, { useContext, useState } from "react";
import InputField from "../shared/InputField";
import Button from "../shared/Button";
import { API_ENDPOINT } from "../../config/constants";
import { AuthContext, AuthResponse } from "../shared/AuthProvider";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [organisationName, setOrganisationName] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: organisationName,
          user_name: userName,
          email: userEmail,
          password: userPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Sign-up failed");
      }

      console.log("Sign-up successful");

      const data: AuthResponse = await response.json();
      authContext?.signin(data);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Sign-up failed:", error);
    }
  }

  return (
    <form onSubmit={handleSignup}>
      <InputField
        label="Orgainization Name"
        name="organisationName"
        id="organisationName"
        value={organisationName}
        onChange={(e) => setOrganisationName(e.target.value)}
        placeholder="Example Org"
      />
      <InputField
        label="Username"
        name="userName"
        id="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="John"
      />
      <InputField
        label="Email"
        name="userEmail"
        id="userEmail"
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="john@example.com"
      />
      <InputField
        label="Password"
        name="userPassword"
        id="userPassword"
        type="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        placeholder="********"
      />

      <Button className="mt-3">Sign Up</Button>
    </form>
  );
}

export default SignupForm;
