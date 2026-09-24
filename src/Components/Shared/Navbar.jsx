"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useState } from "react";
import userAvatar from "@/assets/demo-user.png";
import userAvatar2 from "@/assets/avatar2.png";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";
const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, isPending);
  return (
    <div className="flex justify-between items-center mt-5">
      <div></div>
      <ul className="flex gap-4 items-center ml-30">
        <li>
          <Navlink href={"/"}>Home</Navlink>
        </li>
        <li>
          <Navlink href={"/about"}>About</Navlink>
        </li>
        <li>
          <Navlink href={"/career"}>Career</Navlink>
        </li>
      </ul>
      {isPending ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : user ? (
        <div className="flex justify-center items-center gap-2">
          <p>Hello, {user?.name}</p>
          <Image
            className="rounded-full"
            src={userAvatar2}
            alt="userAvatar"
            width={30}
            height={30}
          ></Image>
          <button
            className="btn btn-secondary btn-outline"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link href={"/login"}>
          <button className="btn btn-primary btn-outline">Login</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
