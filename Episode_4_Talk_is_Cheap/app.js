import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className= "logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
const styleCard = {
  "backgroundColor": "#f0f0f0"
}
const RestaurantCard = (props)=>{
  const {name, cloudinaryImageId, costForTwo, cuisines, avgRating} = props.resData.card.card.info;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="res-logo"></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
}

const resList = [
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "765820",
                  "name": "Sasha'S Kitchen",
                  "cloudinaryImageId": "8a0248d5a78a9d4ee446fd9ef5747421",
                  "locality": "Nava Bharat Nagar",
                  "areaName": "Tilak Road",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                      "Biryani",
                      "Chinese",
                      "North Indian"
                  ],
                  "avgRating": 3.9,
                  "parentId": "452788",
                  "avgRatingString": "3.9",
                  "totalRatingsString": "100+",
                  "promoted": true,
                  "adTrackingId": "cid=11606297~p=1~eid=0000018e-095b-e32f-5053-bdeb00980153~srvts=1709554000687~83649",
                  "sla": {
                      "deliveryTime": 30,
                      "lastMileTravel": 3.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "3.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2024-03-04 22:31:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textBased": {},
                          "imageBased": {},
                          "textExtendedBadges": {}
                      }
                  },
                  "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹120"
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "isNewlyOnboarded": true,
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=765820&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "638982",
                  "name": "Food Mama",
                  "cloudinaryImageId": "f02b2ef11275c38d2950c26294f5ee6d",
                  "locality": "Alcot Gardens",
                  "areaName": "Railway Station",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                      "Biryani",
                      "Chinese"
                  ],
                  "avgRating": 3.5,
                  "parentId": "81612",
                  "avgRatingString": "3.5",
                  "totalRatingsString": "500+",
                  "promoted": true,
                  "adTrackingId": "cid=11617749~p=3~eid=0000018e-095b-e32f-5053-bded0098037c~srvts=1709554000687~83649",
                  "sla": {
                      "deliveryTime": 37,
                      "lastMileTravel": 4.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "4.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2024-03-04 23:55:00",
                      "opened": true
                  },
                  "badges": {
                      "imageBadges": [
                          {
                              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                              "description": "OnlyOnSwiggy"
                          }
                      ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textBased": {},
                          "imageBased": {
                              "badgeObject": [
                                  {
                                      "attributes": {
                                          "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                          "description": "OnlyOnSwiggy"
                                      }
                                  }
                              ]
                          },
                          "textExtendedBadges": {}
                      }
                  },
                  "aggregatedDiscountInfoV3": {
                      "header": "₹175 OFF",
                      "subHeader": "ABOVE ₹399",
                      "discountTag": "FLAT DEAL"
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=638982&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "532249",
                  "name": "Rajahmundry Rose Milk Centre",
                  "cloudinaryImageId": "imch1x4z1uetf9b1u4x3",
                  "locality": "Devi Chowk",
                  "areaName": "Devi chowk",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                      "Beverages",
                      "Sweets"
                  ],
                  "avgRating": 4.4,
                  "veg": true,
                  "parentId": "455261",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "500+",
                  "promoted": true,
                  "adTrackingId": "cid=11588668~p=4~eid=0000018e-095b-e32f-5053-bdee0098043f~srvts=1709554000687~83649",
                  "sla": {
                      "deliveryTime": 22,
                      "lastMileTravel": 3.9,
                      "serviceability": "SERVICEABLE",
                      "slaString": "20-25 mins",
                      "lastMileTravelString": "3.9 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2024-03-04 22:30:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textBased": {},
                          "imageBased": {},
                          "textExtendedBadges": {}
                      }
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=532249&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "110383",
                  "name": "RK Restaurant",
                  "cloudinaryImageId": "755a44cd6f5223af65a57dc4716383d5",
                  "locality": "Danavai Peta",
                  "areaName": "Danvaipeta",
                  "costForTwo": "₹350 for two",
                  "cuisines": [
                      "Biryani",
                      "Chinese"
                  ],
                  "avgRating": 4.1,
                  "parentId": "391024",
                  "avgRatingString": "4.1",
                  "totalRatingsString": "10K+",
                  "sla": {
                      "deliveryTime": 26,
                      "lastMileTravel": 3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "3.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2024-03-04 22:45:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textBased": {},
                          "imageBased": {},
                          "textExtendedBadges": {}
                      }
                  },
                  "aggregatedDiscountInfoV3": {
                      "header": "₹175 OFF",
                      "subHeader": "ABOVE ₹399",
                      "discountTag": "FLAT DEAL"
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=110383&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "509896",
                  "name": "Naidu Gari kunda Biryani",
                  "cloudinaryImageId": "96e13e68a606980c7bfb26a2314b9cbd",
                  "locality": "Rajahmundry Main Road",
                  "areaName": "AVA Road",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                      "Biryani",
                      "Andhra",
                      "Chinese"
                  ],
                  "avgRating": 3.8,
                  "parentId": "13107",
                  "avgRatingString": "3.8",
                  "totalRatingsString": "1K+",
                  "sla": {
                      "deliveryTime": 28,
                      "lastMileTravel": 1.9,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "1.9 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2024-03-05 00:00:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "imageBased": {},
                          "textExtendedBadges": {},
                          "textBased": {}
                      }
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=509896&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "301384",
                  "name": "Al-Khalifa Take Away",
                  "cloudinaryImageId": "bf5no0sym37k9svniipo",
                  "locality": "Syamala Nagar",
                  "areaName": "Rajahmundry",
                  "costForTwo": "₹240 for two",
                  "cuisines": [
                      "Biryani"
                  ],
                  "avgRating": 4.1,
                  "parentId": "30244",
                  "avgRatingString": "4.1",
                  "totalRatingsString": "500+",
                  "sla": {
                      "deliveryTime": 19,
                      "lastMileTravel": 1.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "15-20 mins",
                      "lastMileTravelString": "1.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2024-03-04 23:00:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textBased": {},
                          "imageBased": {},
                          "textExtendedBadges": {}
                      }
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=301384&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  },
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                  "id": "289991",
                  "name": "The Alfa Biryani Hub",
                  "cloudinaryImageId": "ge7r9f3xa90uxyodzl0h",
                  "locality": "Qureeshi Road",
                  "areaName": "Devi chowk",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                      "Biryani"
                  ],
                  "avgRating": 4.1,
                  "parentId": "204633",
                  "avgRatingString": "4.1",
                  "totalRatingsString": "1K+",
                  "sla": {
                      "deliveryTime": 25,
                      "lastMileTravel": 3.7,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "3.7 km",
                      "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                      "nextCloseTime": "2024-03-05 00:00:00",
                      "opened": true
                  },
                  "badges": {},
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {},
                  "type": "F",
                  "badgesV2": {
                      "entityBadges": {
                          "textBased": {},
                          "imageBased": {},
                          "textExtendedBadges": {}
                      }
                  },
                  "orderabilityCommunication": {
                      "title": {},
                      "subTitle": {},
                      "message": {},
                      "customIcon": {}
                  },
                  "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                      }
                  },
                  "reviewsSummary": {},
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {},
                  "externalRatings": {
                      "aggregatedRating": {
                          "rating": "--"
                      }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {},
              "cta": {
                  "link": "swiggy://menu?restaurant_id=289991&source=collection&query=Biryani",
                  "text": "RESTAURANT_MENU",
                  "type": "DEEPLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
              "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
              "sectionId": "MENU_RETURN_FOOD"
          }
      }
  }
];
const Body = ()=>{
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
const AppLayout = ()=>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
