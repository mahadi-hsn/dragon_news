import Navbar from "@/Components/Shared/Navbar";
import React from "react";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div
      className={`bg-gray-50`}
    >
      <div className="w-10/12 h-screen mx-auto ">
        <Navbar></Navbar>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
