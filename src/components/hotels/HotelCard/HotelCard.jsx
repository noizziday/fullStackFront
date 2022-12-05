// import React, { useContext } from "react";
// import { hotelsContext } from "../../../contexts/HotelsContextProvider";
// import { useNavigate } from "react-router-dom";

// const HotelCard = ({ item }) => {
//   const navigate = useNavigate();

//   const { deleteHotel, toggleLike } = useContext(hotelsContext);

//   return (
//     <>
//       <div>
//         <img
//           src={item.images}
//           alt=""
//           onClick={() => navigate(`/details/${item.id}`)}
//         />
//       </div>
//       <h3>{item.title}</h3>
//       <h6>{item.region}</h6>
//       <p>{item.description}</p>
//       <p>Удобства{item.descList}</p>
//       <p>{item.stars}</p>
//       Likes: {item.likes}
//       <button onClick={() => toggleLike(item.id)}>Like</button>
//       {item.is_author ? (
//         <>
//           <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
//           <button onClick={() => deleteProduct(item.id)}>Delete</button>
//         </>
//       ) : null}
//     </>
//   );
// };

// export default HotelCard;
