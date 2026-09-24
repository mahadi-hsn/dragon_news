"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegistrationPage = () => {
  const [isPassShowing, setIsPassShowing] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = async (data) => {
    const { name, photo, email, password } = data;
    // console.log(name, photo, email, password);
    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo,
      callbackURL: "/login",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    } else {
      alert("Sign up successful!");
    }
  };
  // console.log(watch('name'));
  // console.log(watch('email'));
  // console.log(watch('password'));
  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="flex justify-center items-center min-h-[80vh] "
    >
      <fieldset className="fieldset bg-white border-base-300 rounded-box w-xs border p-4 relative">
        <legend className="fieldset-legend text-lg">
          Register you account
        </legend>

        <label className="label">Your name</label>
        <input
          type="text"
          {...register("name", { required: "Enter a valid email" })}
          className="input"
          placeholder="Enter your name"
        />
        <p className="text-red-300">{errors?.name?.message}</p>

        <label className="label">Photo URL</label>
        <input
          type="text"
          {...register("photo", { required: "Photo URL required" })}
          className="input"
          placeholder="Enter your photo URL"
        />
        <p className="text-red-300">{errors?.photo?.message}</p>

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
          className="absolute top-70 right-6 cursor-pointer text-lg"
          onClick={() => setIsPassShowing(!isPassShowing)}
        >
          {isPassShowing ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
        </span>
        <p className="text-red-300">{errors?.password?.message}</p>
        <button type="submit" className="btn btn-neutral mt-4">
          Sign up
        </button>
      </fieldset>
    </form>
  );
};

export default RegistrationPage;
