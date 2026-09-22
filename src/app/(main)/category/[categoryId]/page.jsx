import LeftSideBar from '@/Components/Homepage/LeftSideBar';
import RightSideBar from '@/Components/Homepage/RightSideBar';
import { getCategories, getNewsCategoryById } from '@/lib/fetchingData';
import React from 'react';

const CategoryIdPage = async ({params}) => {
    const {categoryId} = await params;
    console.log(categoryId);
    const categories = await getCategories();
    const newses = await getNewsCategoryById(categoryId)
    return (
        <div className="grid grid-cols-4 gap-4 mt-14">
      <div className="col-span-1">
        <h1 className="text-xl font-semibold">Categories</h1>
        <LeftSideBar categories={categories} isActive={categoryId}></LeftSideBar>
      </div>
      <div className="bg-amber-200 col-span-2">
        <h1 className="text-xl font-semibold mb-4">Dragon News Home</h1>
        <div className="space-y-3">
          {
            newses.map(news => <h1 className="border rounded-md py-3" key={news._id}>{news.title}</h1>)
          }
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

export default CategoryIdPage;