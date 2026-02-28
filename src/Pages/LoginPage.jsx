import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/Supabase-client/SupabaseClient";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    const userInfo = {
      email: userData.email,
      password: userData.password,
    };
    console.log(userInfo);
    const { error } = await supabase.auth.signInWithPassword(userInfo);
    if (error) {
      console.log(error.message);
      return;
    }
    console.log("Users can navigate now");
    navigate("/dashboard");
  };

  const handleGoogleOAuth = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/dashboard",
      },
    });

    if (error) {
      console.error("An error occured");
      return;
    }
  };

  const handleGitHubOAuth = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:5173/dashboard",
      },
    });

    if (error) {
      console.error("An error occured");
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl flex justify-center w-160 items-center min-h-screen mx-auto"
    >
      <div className="rounded-2xl flex-col border-bg-card border-2 w-[80%] p-6">
        <div className="mb-4">
          <h1 className="text-center text-3xl text-accent mb-3">Quanton</h1>
          <p className="text-text-secondary text-[15px] text-center">
            Welcome Back
          </p>
          <p className="text-text-disabled text-center text-sm">
            Lets review your portfolio
          </p>
        </div>
        <div className="flex-col">
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-text-secondary text-sm ml-0.5"
            >
              Email
            </label>
            <input
              {...register("email")}
              className="rounded-2xl text-text-secondary text-sm py-3 px-4 border-border border-2 w-full mt-2"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-negative text-sm ml-1">
                {errors?.email?.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="text-text-secondary text-sm ml-0.5"
            >
              Password
            </label>
            <input
              {...register("password")}
              className="rounded-2xl text-text-secondary text-sm py-3 px-4 border-border border-2 w-full mt-2"
              type="password"
              placeholder="Enter a password"
            />
            {errors.password && (
              <span className="text-negative text-sm ml-1">
                {errors?.password?.message}
              </span>
            )}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between mb-3 px-0.5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border accent-accent cursor-pointer"
              />
              <span className="text-text-secondary text-sm">Remember Me</span>
            </label>
            <button
              type="button"
              className="text-accent text-sm hover:underline cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-2xl bg-accent text-text-primary font-sans font-extrabold mt-2 cursor-pointer mb-2 hover:bg-accent-hover border border-accent hover:border-accent-hover"
            >
              Login
            </button>
            <div className="flex items-center gap-4 my-2">
              <div className="flex-1 h-[1px] bg-border" />
              <span className="text-text-disabled text-sm">or</span>
              <div className="flex-1 h-[1px] bg-border" />
            </div>
            <button
              onClick={() => handleGoogleOAuth()}
              type="button"
              className="w-full px-4 py-3 rounded-2xl bg-bg-card text-text-primary flex items-center text-center mt-4 gap-3 border border-zinc-400 justify-center cursor-pointer hover:opacity-80"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-6 w-6"
              />
              <p>Continue with Google</p>
            </button>
            <button
              onClick={() => handleGitHubOAuth()}
              type="button"
              className="w-full px-4 py-3 rounded-2xl bg-bg-card text-text-primary flex items-center text-center mt-4 gap-3 border border-zinc-400 justify-center cursor-pointer hover:opacity-85"
            >
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="Github"
                className="h-6 w-6 invert"
              />
              <p>Continue with Github</p>
            </button>
          </div>
          <p className="text-text-secondary text-sm text-center mt-4 mr-3">
            Dont have an account?{" "}
            <button
              type="button"
              className="text-accent hover:underline font-medium cursor-pointer"
            >
              SignUp →
            </button>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
