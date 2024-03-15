import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

export const Body = ()=>{
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {
            resList.map((resData)=>
               (
                <RestaurantCard resData = {resData}/>
              )
            )
          }
        </div>
      </div>
    )
  }

  export default Body;