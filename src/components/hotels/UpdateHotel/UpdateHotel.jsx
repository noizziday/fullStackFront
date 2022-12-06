import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";

const UpdateHotel = () => {
  const { oneHotel, getOneHotel, updateHotel } = useContext(hotelsContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [desc_list, setDescList] = useState("");
  const [image, setImage] = useState(null);
  const [stars, setStars] = useState(0);
  const [region, setRegion] = useState("");

  useEffect(() => {
    getOneHotel(id);
  }, []);

  useEffect(() => {
    if (oneHotel) {
      setTitle(oneHotel.title);
      setDesc(oneHotel.desc);
      setDescList(oneHotel.desc_list);
      setImage(oneHotel.image);
      setStars(oneHotel.stars);
      setRegion(oneHotel.region);
    }
  }, [oneHotel]);

  function saveChanges() {
    let editedHotel = new FormData();

    editedHotel.append("title", title);
    editedHotel.append("desc", desc);
    editedHotel.append("desc_list", desc_list);
    editedHotel.append("stars", stars);
    editedHotel.append("region", region);

    if (image) {
      editedHotel.append("image", image);
    }
    updateHotel(id, editedHotel, navigate);
  }

  return (
    <div>
      <h2>Update Hotel</h2>

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
        type="text"
        placeholder="stars"
        value={stars}
        onChange={e => setStars(e.target.value)}
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

      {oneHotel ? (
        <img src={oneHotel.image} alt="" width="250" height="250" />
      ) : (
        <h4>No file</h4>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={e => setImage(e.target.files[0])}
      />
      <br />

      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

export default UpdateHotel;
