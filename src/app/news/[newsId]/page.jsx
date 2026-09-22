import RightSideBar from "@/Components/Homepage/RightSideBar";
import { getNewsDetailsById } from "@/lib/fetchingData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const NewsIdPage = async ({ params }) => {
  const { newsId } = await params;
  const newsDetails = await getNewsDetailsById(newsId);
  console.log(newsDetails);
  return (
    <div className="grid grid-cols-4 gap-4 mt-14 ">
      <div className="col-span-3 mb-15">
        <div className="card bg-base-100 shadow-sm p-4">
          <figure>
            <Image
              className="w-full"
              src={newsDetails.image_url}
              width={400}
              height={100}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{newsDetails.title}</h2>
            <p>{newsDetails.details}</p>
            <Link href={`/category/${newsDetails.category_id}`}>
              <div className="card-actions">
                <button className="btn btn-secondary btn-outline">
                  <BsArrowLeft></BsArrowLeft> All news in this category
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-1">
        <div>
          <h1 className="text-xl font-semibold">Login With</h1>
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default NewsIdPage;
