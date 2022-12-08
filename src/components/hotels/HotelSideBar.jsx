import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { hotelsContext } from "../../contexts/HotelsContextProvider";
import "../../styles/HotelSideBar.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const HotelSideBar = () => {
  const [value, setValue] = React.useState(null);

  const navigate = useNavigate();
  const { filterHotelsByRegion } = useContext(hotelsContext);

  return (
    <div className="hotelSideBarBlock">
      <div className="hotelSideBarDiv">
        <div className="hotelSideBarFilterDiv">
          <h5>Поиск</h5>
          <input
            type="text"
            onChange={e =>
              filterHotelsByRegion("search", e.target.value, navigate)
            }
            placeholder="Например Plaza Hotel Bishkek"
          />
        </div>
        <div className="hotelSideBarFilterDiv">
          <h5>Укажите регион</h5>
          <select
            onChange={e =>
              filterHotelsByRegion("region", e.target.value, navigate)
            }>
            <option value={""}>Любой</option>
            <option value={"chuy"}>Чуйская область</option>
            <option value={"osh"}>Ошская область</option>
            <option value={"issyk-Kul"}>Иссык-Кульская область</option>
            <option value={"talas"}>Таласская область</option>
            <option value={"naryn"}>Нарынская область</option>
            <option value={"jalal-Abad"}>Жалал-Абадская область</option>
            <option value={"batken"}>Баткенская область</option>
          </select>
        </div>
        <div className="hotelSideBarFilterDiv">
          <h5>Уровент отеля</h5>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              filterHotelsByRegion("stars", newValue, navigate);
              console.log(event.target.value);
              console.log(newValue);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelSideBar;
