import SignupForm from "./SignupForm";

function Signup() {
  return (
    <div className="min-h-screen flex gap-8 items-center justify-center ">
      <div className="max-w-sm w-full bg-gray-900 p-6 rounded-md shadow-md shadow-black ">
        <h2 className="text-3xl font-bold text-center text-white mb-3">
          Sign Up
        </h2>
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
