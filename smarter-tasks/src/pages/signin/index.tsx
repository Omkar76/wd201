import { useContext, useEffect } from "react";
import SigninForm from "./SigninForm";
import { AuthContext } from "../../context/auth";

function Signin() {
  const authContext = useContext(AuthContext);
  // useEffect(() => {
  //   authContext?.signout();
  //   console.log("Signing out");
  // });

  const onSubmit = () => {};
  return (
    <div className="min-h-screen flex gap-8 items-center justify-center ">
      <div className="max-w-sm w-full bg-gray-900 p-6 rounded-md shadow-md shadow-black ">
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          Sign in
        </h2>
        <SigninForm />
      </div>
    </div>
  );
}

export default Signin;
