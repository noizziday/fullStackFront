import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";
// import { Modal, Box } from "@mui/material";
import "../../../styles/AddHotel.css";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

const AddHotel = () => {
  //mui

  const GreenSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  ///mui end

  const navigate = useNavigate();
  const { createHotel } = useContext(hotelsContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [desc_list, setDescList] = useState("");
  const [image, setImage] = useState(null);

  const [stars, setStars] = useState(1);
  const [region, setRegion] = useState("chuy");
  const [imgOnPage, setImgOnPage] = useState("");
  const [pets, setPets] = useState(true);
  const [food, setFood] = useState(true);


  function saveHotel() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("desc", desc);
    newProduct.append("desc_list", desc_list);
    newProduct.append("image", image);
    newProduct.append("stars", stars);
    newProduct.append("region", region);
    newProduct.append("food", food);
    newProduct.append("pets", pets);

    createHotel(newProduct, navigate);
  }
  console.log(desc);
  console.log(image);

  return (
    <div className="addHotelBlock">
      <div className="addHotelContainer">
        <div className="addHotelInputs">
          <h2>Добавление отеля ; )</h2>
          <div className="addHotelInnerDiv">
            <div className="addHotelInnerDivLeft">
              <input
                type="text"
                placeholder="Название отеля"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <textarea
                type=""
                placeholder="Описание "
                value={desc}
                onChange={e => setDesc(e.target.value)}
              />
              <textarea
                type="text"
                placeholder="Удобства"
                value={desc_list}
                onChange={e => setDescList(e.target.value)}
              />
            </div>
            <div className="addHotelInnerDivRight">
              <div className="inpStars">
                <h4 className="inpStarsLbl">Уровень отеля (звезды) </h4>
                <input
                  type="number"
                  placeholder="stars"
                  value={stars}
                  max={5}
                  min={1}
                  onChange={e => setStars(+e.target.value)}
                />
              </div>
              <div className="regionSelectDiv">
                <h4>Укажите регион</h4>
                <select
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                  className="regionSelectInp">
                  <option value={"chuy"}>Чуйская область</option>
                  <option value={"osh"}>Ошская область</option>
                  <option value={"issyk-Kul"}>Иссык-Кульская область</option>
                  <option value={"talas"}>Таласская область</option>
                  <option value={"naryn"}>Нарынская область</option>
                  <option value={"jalal-Abad"}>Жалал-Абадская область</option>
                  <option value={"batken"}>Баткенская область</option>
                </select>
              </div>
              <div className="imgDiv">
                <img
                  src={imgOnPage}
                  alt="Выбранное изображение"
                  className="addHotelImg"
                />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={e => {
                  setImage(e.target.files[0]);
                  if (!FileReader) {
                    alert("FileReader не поддерживается — облом");
                    return;
                  }


                  if (!e.target.files.length) {
                    alert("Ничего не загружено");
                    return;
                  }


                  let fileLoader = new FileReader();
                  fileLoader.onload = () => {
                    setImgOnPage(fileLoader.result);
                  };
                  fileLoader.readAsDataURL(e.target.files[0]);
                }}
              />
              <div className="foodDiv">
                <label htmlFor="Food">
                  <b>Питание</b>
                </label>
                <Switch
                  {...label}
                  defaultChecked
                  color="secondary"
                  onChange={() => {
                    setFood(!food);
                    console.log(food);
                  }}
                />
              </div>
              <div className="petsDiv">
                <label htmlFor="Pets">
                  <b>Питомцы разрешены</b>
                </label>
                <Switch
                  {...label}
                  defaultChecked
                  color="secondary"
                  onChange={() => {
                    setPets(!pets);
                    console.log(pets);
                  }}
                />
              </div>
              <div className="addHotelBtnDiv">
                <button onClick={saveHotel} className="addHotelBtn">
                  Добавить отель
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
