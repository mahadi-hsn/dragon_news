"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  const [isPassShowing, setIsPassShowing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="flex justify-center items-center min-h-[80vh] "
    >
      <fieldset className="fieldset bg-white border-base-300 rounded-box w-xs border p-4 relative">
        <legend className="fieldset-legend text-lg">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          {...register("email", { required: "Enter a valid email" })}
          className="input"
          placeholder="Email"
        />
        <p className="text-red-300">{errors?.email?.message}</p>

        <label className="label">Password</label>
        <input
          type={isPassShowing ? "text" : "password"}
          {...register("password", { required: "Password required" })}
          className="input"
          placeholder="Password"
        />
        <span
          className="absolute right-6.5 top-31.75 cursor-pointer text-lg"
          onClick={() => setIsPassShowing(!isPassShowing)}
        >
          {isPassShowing ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
        </span>
        <p className="text-red-300">{errors?.password?.message}</p>
        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
        <p>
          Do not have an account?{" "}
          <Link className="text-blue-300" href={"/registration"}>
            Sign up
          </Link>{" "}
        </p>
      </fieldset>
    </form>
  );
};

export default LoginPage;
