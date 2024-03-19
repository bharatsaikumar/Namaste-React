import { CDN_URL } from "../utils/constants";

export default RestaurantCard = (props)=>{
    
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating} = props.resData;
    return (
      <div className="res-card" style={{
        "backgroundColor": "#f0f0f0"
      }}>
        <img className="res-logo" src= {CDN_URL+cloudinaryImageId} alt="res-logo"></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  }