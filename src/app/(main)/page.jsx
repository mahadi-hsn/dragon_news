import LeftSideBar from "@/Components/Homepage/LeftSideBar";
import RightSideBar from "@/Components/Homepage/RightSideBar";
import NewsCard from "@/Components/NewsCard/NewsCard";
import { getCategories, getNewsCategoryById } from "@/lib/fetchingData";


export default async function Home() {
  const categories = await getCategories();
  const newses = await getNewsCategoryById('01')
  console.log(newses);
  return (
    <div className="grid grid-cols-4 gap-4 mt-14">
      <div className="col-span-1">
        <h1 className="text-xl font-semibold">Categories</h1>
        <LeftSideBar categories={categories} isActive={'01'}></LeftSideBar>
      </div>
      <div className="col-span-2">
        <h1 className="text-xl font-semibold mb-4">Dragon News Home</h1>
        <div className="space-y-3">
          {
            newses.map(news => <NewsCard news={news} key={news._id}></NewsCard>)
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
}
