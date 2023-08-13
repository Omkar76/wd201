import React, { useContext, useEffect, useState } from "react";
import InputField from "../shared/InputField";
import Button from "../shared/Button";
import { API_ENDPOINT } from "../../config/constants";
import { AuthContext, AuthResponse } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};
const SigninForm: React.FC = () => {
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    authContext?.signout();
  }, [authContext]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Sign-in failed");
      }

      console.log("Sign-in successful");

      const data: AuthResponse = await response.json();
      authContext?.signin(data);
      navigate("/account", { replace: true });
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-1 m-1">
        <label
          htmlFor="userEmail"
          className="block text-white font-semibold mb-2"
        >
          Email
        </label>

        <input
          {...register("email", { required: true })}
          id="email"
          placeholder="john@example.com"
          type="email"
          className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
        />
      </div>

      <div className="p-1 m-1">
        <label
          htmlFor="userPassword"
          className="block text-white font-semibold mb-2"
        >
          Password
        </label>

        <input
          {...register("password", { required: true })}
          id="password"
          placeholder="********"
          type="password"
          className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
        />
      </div>

      <Button type="submit" className="mt-3">
        Sign In
      </Button>
    </form>
  );
};

export default SigninForm;
