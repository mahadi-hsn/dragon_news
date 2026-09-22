import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 mt-3">
        <button className="btn btn-primary btn-outline">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-neutral btn-outline">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
