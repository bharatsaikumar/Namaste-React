// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export const Body = () => {
  // let [searchText,setSearchText]=useState("");
  let [resList, setResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resListApi = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.0005383&lng=81.8040345&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resObj = await resListApi.json();
    const reList =
      resObj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(reList);
  };
  return (
    <div className="body">
      {/* <input className="text-search" type="text" name="Search By Restaurant" value={searchText}
        onChange={
          (e)=>{
           setSearchText(e.target.value);
          }
        }/> */}
      <button
        className="btn"
        onClick={() => {
          const filteredData = resList.filter((re) => re.info.avgRating > 4);
          setResList(filteredData);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {resList.map((resData) => (
          <RestaurantCard resData={resData.info} key={resData.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
