import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { useForm } from "react-hook-form";
import z from "zod";
// import { email } from "zod/v4/core/regexes.cjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/Supabase-client/SupabaseClient";

const userSchema = z
  .object({
    username: z
      .string()
      .min(5, "Name is too small please increase the length")
      .max(120, "Name is too big pleace decrease the length"),
    email: z.string().min(1, "Please enter an email"),
    password: z.string().min(8, "Password should be atleast 8 characters long"),
    confirmPassword: z.string(),
  })
  .refine(
    (form) => {
      return form.password === form.confirmPassword;
    },
    {
      message: "Passwords dont match",
      path: ["confirmPassword"],
    },
  );

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (userData) => {
    const userInfo = {
      name: userData.username,
      email: userData.email,
      password: userData.password,
    };
    const { data, error } = await supabase.auth.signUp(userInfo);
    if (error) {
      console.log(error.message);
      return;
    }
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl flex justify-center w-160 items-center min-h-screen mx-auto "
    >
      <div className="rounded-2xl flex-col  border-bg-card border-2 w-[80%] p-6">
        <div className="mb-4">
          <h1 className=" text-center text-3xl text-accent mb-3">Quanton</h1>
          <p className="text-text-secondary text-[15px] text-center">
            Create your account
          </p>
          <p className="text-text-disabled text-center text-sm ">
            Track smarter. Start for free.
          </p>
        </div>
        <div className="flex-col">
          {/* <label className="text-text-secondary text-sm">FullName</label>*/}
          <div className="mb-3">
            <label
              htmlFor="username"
              className="text-text-secondary text-sm ml-0.5"
            >
              Full Name
            </label>
            <input
              {...register("username")}
              className="rounded-2xl text-text-secondary text-sm py-3 px-4  border-border border-2 w-full mt-2"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.username && (
              <span className="text-negative text-sm ml-1">
                {errors?.username?.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-text-secondary text-sm ml-0.5"
            >
              Email
            </label>
            <input
              {...register("email")}
              className="rounded-2xl text-text-secondary text-sm py-3 px-4  border-border border-2 w-full mt-2"
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
              className="rounded-2xl text-text-secondary text-sm py-3 px-4  border-border border-2 w-full mt-2"
              type="password"
              placeholder="Enter a password"
            />
            {errors.password && (
              <span className="text-negative text-sm ml-1">
                {errors?.password?.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="text-text-secondary text-sm ml-0.5"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              className="rounded-2xl text-text-secondary text-sm py-3 px-4  border-border border-2 w-full mt-2"
              type="password"
              placeholder="Confirm the password"
            />
            {errors.confirmPassword && (
              <span className="text-negative text-sm ml-1">
                {errors?.confirmPassword?.message}
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 rounded-2xl bg-accent text-text-primary font-sans font-extrabold mt-2 cursor-pointer mb-2 hover:bg-accent-hover border border-accent hover:border-accent-hover"
            >
              Create Account
            </button>
            <div className="flex items-center gap-4 my-2">
              <div className="flex-1 h-[1px] bg-border" />
              <span className="text-text-disabled text-sm">or</span>
              <div className="flex-1 h-[1px] bg-border" />
            </div>
            <button
              type="button"
              className="w-full px-4 py-3 rounded-2xl bg-bg-card text-text-primary fontfont-extrabold flex items-center text-center mt-4 gap-3 border-2  border-zinc-400 justify-center cursor-pointer hover:bg-[#070B12]"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-6 w-6 "
              />
              <p>Continue with Google</p>
            </button>
            <button
              type="button"
              className="w-full px-4 py-3 rounded-2xl bg-bg-card text-text-primary fontfont-extrabold flex items-center text-center mt-4 gap-3 border-2  border-zinc-400 justify-center cursor-pointer hover:bg-[#070B12]"
            >
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="Github"
                className="h-6 w-6   invert"
              />
              <p>Continue with Github</p>
            </button>
          </div>
          <p className="text-text-secondary text-md text-center mt-4">
            Already have an account?{" "}
            <button
              type="button"
              className="text-accent hover:underline font-medium cursor-pointer"
            >
              Login →
            </button>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
