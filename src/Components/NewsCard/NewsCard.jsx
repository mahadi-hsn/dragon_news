import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FcRating } from "react-icons/fc";
import { IoMdEye } from "react-icons/io";
import { MdStarRate } from "react-icons/md";

const NewsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body space-y-2">
        <div className="flex justify-between items-center bg-slate-100 p-3">
          <div className="flex gap-4 items-center">
            <Image
              className="rounded-full"
              src={news.author.img}
              alt="author image"
              width={40}
              height={40}
            ></Image>
            <div>
              <h1 className="font-semibold text-lg">{news.author.name}</h1>
              <p className="text-xs text-gray-400">
                {news.author.published_date}
              </p>
            </div>
          </div>
          <div className="flex gap-3 text-xl">
            <CiBookmark />
            <CiShare2 />
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>
        <figure>
          <Image
            className="w-full"
            src={news.image_url}
            width={400}
            height={400}
            alt={news.title}
          />
        </figure>
        <p className="line-clamp-3 text-gray-500">{news.details}</p>
        <Link href={`/news/${news._id}`} className="text-yellow-500 text-md font-bold">
          Read more
        </Link>
        <hr className="opacity-30" />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span>
              <MdStarRate />
            </span>
            <p>{news.rating.number}</p>
          </div>
          <div className="flex items-center gap-2">
            <IoMdEye/>
            <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
