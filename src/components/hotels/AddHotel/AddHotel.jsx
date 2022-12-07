import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";
// import { Modal, Box } from "@mui/material";

const AddHotel = () => {
  const navigate = useNavigate();
  const { createHotel } = useContext(hotelsContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [desc_list, setDescList] = useState("");
  const [image, setImage] = useState(null);
  const [stars, setStars] = useState(0);
  const [region, setRegion] = useState("");
  const [food, setFood] = useState(false);
  const [pets, setPets] = useState(false);

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

  return (
    <div
      style={{
        marginTop: "100px",
      }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Удобства"
        value={desc_list}
        onChange={e => setDescList(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="stars"
        value={stars}
        max={5}
        min={1}
        onChange={e => setStars(+e.target.value)}
      />
      <br />

      <select value={region} onChange={e => setRegion(e.target.value)}>
        <option value={"chuy"}>Чуйская область</option>
        <option value={"osh"}>Ошская область</option>
        <option value={"issyk-Kul"}>Иссык-Кульская область</option>
        <option value={"talas"}>Таласская область</option>
        <option value={"naryn"}>Нарынская область</option>
        <option value={"jalal-Abad"}>Жалал-Абадская область</option>
        <option value={"batken"}>Баткенская область</option>
      </select>
      <br />

      <input
        type="file"
        accept="image/*"
        onChange={e => setImage(e.target.files[0])}
      />
      <br />
      <label htmlFor="Food">Food</label>
      <input
        type="checkbox"
        name="Food"
        id="Food"
        value={food}
        onChange={e => {
          setFood(!e.target.checked);
        }}
      />
      <br />
      <label htmlFor="Pets">Pets</label>
      <input
        type="checkbox"
        name="Pets"
        id="Pets"
        value={pets}
        onChange={e => setPets(!e.target.checked)}
      />
      <br />

      <button onClick={saveHotel}>Save</button>
    </div>
  );
};

export default AddHotel;
