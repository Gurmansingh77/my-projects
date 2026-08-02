import React, { useEffect } from "react";
import { Zap, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

const Login = ({ setIsloggedIn }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });


  const onSubmit = (data) => {
    let RegisteredUserData = JSON.parse(localStorage.getItem("RegisterUserData"));
    if (
      RegisteredUserData.email === data.email &&
      RegisteredUserData.ConfirmPassword === data.password
    ) {
      console.log("login done");
      localStorage.setItem('loginData' , JSON.stringify(data))
      setIsloggedIn(true)
    }else{
        alert('Login Failed')
        return
    }

    reset();
};

useEffect(() => {
    if(JSON.parse(localStorage.getItem("loginData"))){
    setIsloggedIn(true)
}
} , [])


  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Section */}{" "}
      <div className="w-1/2 border-r border-gray-700 px-12 py-10 flex flex-col justify-between relative overflow-hidden">
        {/* Glow Effect */}{" "}
        <div className="absolute -left-32 top-40 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl"></div>{" "}
        <div className="absolute right-10 bottom-10 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl"></div>
        {/* Logo */}
        <div className="flex items-center gap-3 z-10">
          <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
            <Zap className="text-black w-5 h-5 fill-black" />
          </div>
          <h1 className="text-3xl font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>
        {/* Content */}
        <div className="z-10">
          <p className="text-lime-400 font-semibold tracking-wider text-sm uppercase mb-6">
            Welcome Back
          </p>

          <h2 className="text-7xl font-bold leading-tight">
            Shop the future.
            <br />
            <span className="text-lime-400">Today.</span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 max-w-xl leading-relaxed">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 z-10">
          <div className="border border-gray-500 rounded-2xl py-6 text-center">
            <h3 className="text-lime-400 text-3xl font-bold">20K+</h3>
            <p className="text-gray-400 mt-2">Products</p>
          </div>

          <div className="border border-gray-500 rounded-2xl py-6 text-center">
            <h3 className="text-lime-400 text-3xl font-bold">50K+</h3>
            <p className="text-gray-400 mt-2">Users</p>
          </div>

          <div className="border border-gray-500 rounded-2xl py-6 text-center">
            <h3 className="text-lime-400 text-3xl font-bold">4.9★</h3>
            <p className="text-gray-400 mt-2">Rating</p>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center bg-black">
        <div className="bg-[#0B0B0B] border border-gray-800 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] w-full max-w-md">
          <h2 className="text-5xl font-bold mb-3">Sign in</h2>
          <p className="text-gray-500 text-lg mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email address"
                className="w-full bg-[#161616] border border-gray-800 rounded-2xl py-4 pl-14 pr-4 text-white placeholder-gray-500 outline-none focus:border-lime-400 transition-all"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                className="w-full bg-[#161616] border border-gray-800 rounded-2xl py-4 pl-14 pr-14 text-white placeholder-gray-500 outline-none focus:border-lime-400 transition-all"
              />
              <Eye className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-lime-400 text-black font-bold py-4 rounded-2xl text-lg hover:bg-lime-300 transition-all flex items-center justify-center gap-3"
            >
              Sign in
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* <p className="text-center text-gray-500 mt-8">
            Don't have an account?{" "}
            <span
            onClick={() => setIsloggedIn(false)}
             className="text-lime-400 font-semibold cursor-pointer hover:text-lime-300">
              Create one
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
