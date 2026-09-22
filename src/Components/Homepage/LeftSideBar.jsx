import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories , isActive}) => {
  return (
    <div>
      <ul className="space-y-2 mt-2">
        {categories.map((category) => (
          <li
            className={`rounded-md text-center text-lg ${isActive === category.category_id && "bg-slate-200"}`}
            key={category.category_id}
          >
            <Link className="block py-2 " href={`/category/${category.category_id}`}>{category.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
