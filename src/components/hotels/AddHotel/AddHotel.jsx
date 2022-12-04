import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";
// import { Modal, Box } from "@mui/material";

const AddHotel = () => {
  const navigate = useNavigate();
  const { createHotel } = useContext(hotelsContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descList, setDescList] = useState("");
  const [images, setImages] = useState(null);
  const [stars, setStars] = useState(0);
  const [region, setRegion] = useState("");

  function saveHotel() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("descList", descList);
    newProduct.append("images", images);
    newProduct.append("stars", stars);
    newProduct.append("region", region);
    createHotel(newProduct, navigate);
  }

  return (
    // <>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description">
    //     <Box
    //     // sx={style}
    //     >
    //       <input
    //         type="text"
    //         placeholder="Title"
    //         value={title}
    //         onChange={e => setTitle(e.target.value)}
    //       />
    //       <br />
    //       <input
    //         type="text"
    //         placeholder="Description"
    //         value={description}
    //         onChange={e => setDescription(e.target.value)}
    //       />
    //       <br />
    //       <input
    //         type="text"
    //         placeholder="Удобства"
    //         value={descList}
    //         onChange={e => setDescList(e.target.value)}
    //       />
    //       <br />
    //       <input
    //         type="text"
    //         placeholder="stars"
    //         value={stars}
    //         onChange={e => setStars(e.target.value)}
    //       />
    //       <br />

    //       <select value={region} onChange={e => setRegion(e.target.value)}>
    //         <option>Чуйская область</option>
    //         <option>Ошская область</option>
    //         <option>Иссык-Кульская область</option>
    //         <option>Таласская область</option>
    //         <option>Нарынская область</option>
    //         <option>Жалал-Абадская область</option>
    //         <option>Баткенская область</option>
    //       </select>
    //       <br />

    //       <input
    //         type="file"
    //         accept="images/*"
    //         onChange={e => setImages(e.target.files[0])}
    //       />
    //       <br />

    //       <button onClick={saveHotel}>Save</button>
    //     </Box>
    //   </Modal>
    // </>
    <div>
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
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Удобства"
        value={descList}
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
        <option>Чуйская область</option>
        <option>Ошская область</option>
        <option>Иссык-Кульская область</option>
        <option>Таласская область</option>
        <option>Нарынская область</option>
        <option>Жалал-Абадская область</option>
        <option>Баткенская область</option>
      </select>
      <br />

      <input
        type="file"
        accept="images/*"
        onChange={e => setImages(e.target.files[0])}
      />
      <br />

      <button onClick={saveHotel}>Save</button>
    </div>
  );
};

export default AddHotel;
