// import React, { useState, useEffect, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { hotelsContext } from "../../../contexts/HotelsContextProvider";

// const UpdateHotel = () => {
//   const { oneHotel, getOneHotel, updateHotel } = useContext(hotelsContext);

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [descList, setDescList] = useState("");
//   const [images, setImages] = useState(null);
//   const [stars, setStars] = useState(0);
//   const [region, setRegion] = useState("");

//   useEffect(() => {
//     getOneHotel(id);
//   }, []);

//   useEffect(() => {
//     if (oneHotel) {
//       setTitle(oneHotel.title);
//       setDescription(oneHotel.description);
//       setDescList(oneHotel.descList);
//       setImages(oneHotel.images);
//       setStars(oneHotel.stars);
//       setRegion(oneHotel.region);
//     }
//   }, [oneHotel]);

//   function saveChanges() {
//     let editedHotel = new FormData();

//     newProduct.append("title", title);
//     newProduct.append("description", description);
//     newProduct.append("descList", descList);
//     newProduct.append("stars", stars);
//     newProduct.append("region", region);
//     createHotel(newProduct, navigate);

//     if (images) {
//       editedHotel.append("images", images);
//     }
//     updateHotel(id, editedHotel, navigate);
//   }

//   return (
//     <div>
//       <h2>Update Hotel</h2>

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

//       {oneHotel ? (
//         <img src={oneHotel.images} alt="" width="250" height="250" />
//       ) : (
//         <h4>No file</h4>
//       )}
//       <input
//         type="file"
//         accept="images/*"
//         onChange={e => setImages(e.target.files[0])}
//       />
//       <br />

//       <button onClick={saveChanges}>Save Changes</button>
//     </div>
//   );
// };

// export default UpdateHotel;
