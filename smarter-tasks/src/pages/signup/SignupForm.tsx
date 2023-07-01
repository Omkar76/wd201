import React, { useContext, useState, forwardRef } from "react";
import Button from "../shared/Button";
import { API_ENDPOINT } from "../../config/constants";
import { AuthContext, AuthResponse } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

type FormData = {
  organisationName : string
  userName: string
  userEmail : string
  userPassword : string
}
function SignupForm() {
  const onSubmit :SubmitHandler<FormData> = async (formData : FormData) =>{

    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.organisationName,
          user_name: formData.userName,
          email: formData.userEmail,
          password: formData.userPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Sign-up failed");
      }

      console.log("Sign-up successful");

      const authResponse: AuthResponse = await response.json();
      authContext?.signin(authResponse);
      navigate("/account", { replace: true });
    } catch (error) {
      console.error("Sign-up failed:", error);
    }
  }
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // name: organisationName,
          // user_name: userName,
          // email: userEmail,
          // password: userPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Sign-up failed");
      }

      console.log("Sign-up successful");

      const data: AuthResponse = await response.json();
      authContext?.signin(data);
      navigate("/account", { replace: true });
    } catch (error) {
      console.error("Sign-up failed:", error);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-1 m-1">
        <label htmlFor="organisationName" className="block text-white font-semibold mb-2">
          Organization Name
        </label>

        <input
          {...register('organisationName', {required : true})}
          id="organisationName"
          placeholder="Example Org"
          className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
        />
      </div>

      <div className="p-1 m-1">
        <label htmlFor="userName" className="block text-white font-semibold mb-2">
          Username
        </label>

        <input
          {...register('userName', {required : true})}
          id="userName"
          placeholder="John"
          className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
        />
      </div>

      <div className="p-1 m-1">
        <label htmlFor="userEmail" className="block text-white font-semibold mb-2">
          Email
        </label>

        <input
          id="userEmail"
          {...register('userEmail', {required : true})}
          placeholder="john@example.com"
          type="userEmail"
          className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
        />

      </div>

      <div className="p-1 m-1">
        <label htmlFor="userPassword" className="block text-white font-semibold mb-2">
          Password
        </label>

        <input
          {...register('userPassword', {required : true})}
          id = "userPassword"
          placeholder="********"
          type="password"
          className="p-2 border rounded-lg outline-none bg-gray-800 text-white border-violet-500 w-full"
        />
      </div>
      <Button type="submit" className="mt-3">Sign Up</Button>
    </form>
  );
}

export default SignupForm;
