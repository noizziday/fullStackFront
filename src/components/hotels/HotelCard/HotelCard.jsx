import React, { useContext } from "react";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const HotelCard = ({ item }) => {
  const navigate = useNavigate();

  const { deleteHotel } = useContext(hotelsContext);

  return (
    <>
      <div>
        <img
          src={item.images}
          alt=""
          onClick={() => navigate(`/details/${item.slug}`)}
        />
      </div>
      <h3>{item.title}</h3>
      <h6>{item.region}</h6>
      <p>{item.desc}</p>
      <p>{item.desc_list}</p>
      <p>{item.stars}</p>
      {item.user ? (
        <>
          <button onClick={() => navigate(`/edit/${item.slug}`)}>Edit</button>
          <button onClick={() => deleteHotel(item.slug)}>Delete</button>
        </>
      ) : null}
    </>
  );
};

export default HotelCard;
