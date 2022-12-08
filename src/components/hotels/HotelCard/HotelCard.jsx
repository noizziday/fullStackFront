import React, { useContext } from "react";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { authContext, useAuth } from "../../../contexts/authContext";
import "../../../styles/HotelCard.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import { useEffect } from "react";

const HotelCard = ({ item }) => {
  const [value, setValue] = React.useState(item.stars);
  const navigate = useNavigate();
  const { user, getOneUser } = useContext(authContext);

  const { deleteHotel } = useContext(hotelsContext);


  function checkRegion(region) {
    if (region === "chuy") {
      return "Чуйская область";
    } else if (region === "osh") {
      return "Ошская область";
    } else if (region === "issyk-Kul") {
      return "Иссык-Кульская область";
    } else if (region === "talas") {
      return "Таласская область";
    } else if (region === "naryn") {
      return "Нарынская область";
    } else if (region === "jalal-Abad") {
      return "Джалал-Абадская область";
    } else if (region === "batken") {
      return "Баткенская область";
    }
  }

  return (
    <div className="hotelCardBlock">
      <div className="hotelCardDiv">
        <div className="hotelCardContent">
          <div className="hotelImgDiv">
            <img
              src={item.image}
              alt=""
              onClick={() => navigate(`/details/${item.slug}`)}
              className="hotelCardImg"
            />
          </div>
          <div className="hotelCardDesc">
            <div className="hotelCardTitleDiv">
              <h3 className="hotelCardTitle">{item.title}</h3>
              <Rating name="read-only" value={value} readOnly />
            </div>
            <h5 className="hotelCardRegion">{checkRegion(item.region)}</h5>
            <div className="hotelCardDescFont">{item.desc_list}</div>
            <div className="hotelCardDescFont">{item.desc}</div>
          </div>
        </div>
        {item.user === user?.email ? (
          <div className="hotelCardBtns">
            <button onClick={() => navigate(`/details/${item.slug}`)}>
              Подробнее
            </button>
            <button onClick={() => navigate(`/edit/${item.slug}`)}>Edit</button>
            <button onClick={() => deleteHotel(item.slug)}>Delete</button>
          </div>
        ) : (
          <div className="hotelCardBtns">
            <button onClick={() => navigate(`/details/${item.slug}`)}>
              Подробнее
            </button>
          </div>
        )}
      </div>
    </div>

  
  );
};

export default HotelCard;
