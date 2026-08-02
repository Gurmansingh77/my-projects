import { Zap, Mail, Lock, ArrowRight, RedoIcon } from "lucide-react";
import { useForm } from "react-hook-form";

const Register = ({ setIsReggisterd }) => {
  let {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('RegisterUserData' , JSON.stringify(data))
    reset()
    setIsReggisterd(true)
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left section */}
        <div className="relative flex flex-col justify-between p-10 lg:p-14 border-r border-white/10">
          {/* Glow effects */}
          <div className="absolute top-32 -left-20 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl" />

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <h1 className="text-3xl font-bold">
              Sky<span className="text-lime-400">Mart</span>
            </h1>
          </div>

          {/* Hero text */}
          <div className="relative z-10 max-w-xl">
            <p className="text-lime-400 uppercase tracking-[0.25em] text-sm font-semibold mb-6">
              Welcome Back
            </p>

            <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              Shop the future.
              <br />
              <span className="text-lime-400">Today.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-8 max-w-lg">
              Thousands of products, lightning-fast delivery, and prices that
              make your wallet happy.
            </p>
          </div>

          {/* Stats */}
          <div className="relative z-10 grid grid-cols-3 gap-5">
            <div className="border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-lime-400 text-3xl font-bold">20K+</div>
              <div className="text-gray-500 text-sm mt-2">Products</div>
            </div>

            <div className="border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-lime-400 text-3xl font-bold">50K+</div>
              <div className="text-gray-500 text-sm mt-2">Users</div>
            </div>

            <div className="border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-lime-400 text-3xl font-bold">4.9★</div>
              <div className="text-gray-500 text-sm mt-2">Rating</div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-4xl font-bold mb-3">Create account</h3>
            <p className="text-gray-400 mb-8">
              Create your account to continue
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3 bg-[#151515] border border-white/10 rounded-xl px-4 py-4">
                <Mail className="w-5 h-5 text-gray-500" />
                <input
                  {...register("name", {
                    required: "Please enter your name",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^(?!\s*$).+/,
                      message: "Name cannot contain only spaces",
                    },
                  })}
                  type="text"
                  placeholder="Full name"
                  className="bg-transparent w-full outline-none text-white placeholder:text-gray-500"
                />
              </div>

              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <div className="flex items-center gap-3 bg-[#151515] border border-white/10 rounded-xl px-4 py-4">
                <Mail className="w-5 h-5 text-gray-500" />
                <input
                  {...register("email", {
                    required: "Please Enter your Email",
                    minLength: {
                      value: 3,
                      message: "Please enter Valid Email",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email not found",
                    },
                  })}
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent w-full outline-none text-white placeholder:text-gray-500"
                />
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <div className="flex items-center gap-3 bg-[#151515] border border-white/10 rounded-xl px-4 py-4">
                <Lock className="w-5 h-5 text-gray-500" />
                <input
                  {...register("Registerpassword", {
                    required: "Enter you Password",
                    minLength: {
                      value: 6,
                      message: "Password should contain atleast 6 characters",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="bg-transparent w-full outline-none text-white placeholder:text-gray-500"
                />
              </div>

              {errors.Registerpassword && (
                <p className="text-red-500">
                  {errors.Registerpassword.message}
                </p>
              )}

              <div className="flex items-center gap-3 bg-[#151515] border border-white/10 rounded-xl px-4 py-4">
                <Lock className="w-5 h-5 text-gray-500" />
                <input
                  {...register("ConfirmPassword", {
                    required: "please confirm Password",
                    validate: (value) => {
                      if (value === getValues("Registerpassword")) {
                        return true;
                      }
                      return "Passwords do not match";
                    },
                  })}
                  type="password"
                  placeholder="Confirm password"
                  className="bg-transparent w-full outline-none text-white placeholder:text-gray-500"
                />
              </div>

              {errors.ConfirmPassword && (
                <p className="text-red-500">{errors.ConfirmPassword.message}</p>
              )}

              <button
                onClick={handleSubmit(onSubmit)}
                className="w-full bg-lime-400 text-black py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-lime-300 transition"
              >
                Create account
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-center text-gray-400 mt-8">
              Already have an account?{" "}
              <span className="text-lime-400 font-semibold cursor-pointer">
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
