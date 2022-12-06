import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";

const AddRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addRoomToHotel } = useContext(hotelsContext);

  const [hotelSlug, setHotelSlug] = useState(id);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");

  const [roomNo, setRoomNo] = useState("");
  const [roomCap, setRoomCap] = useState(0);
  const [roomPrice, setRoomPrice] = useState("");
  const [roomType, setRoomType] = useState("");

  function saveRoom() {
    let newRoom = new FormData();
    newRoom.append("carousel_img", img1);
    newRoom.append("carousel_img", img2);

    newRoom.append("create_room_no", roomNo);
    newRoom.append("room_type", roomType);
    newRoom.append("room_capacity", roomCap);
    newRoom.append("room_price", roomPrice);
    newRoom.append("hotel", hotelSlug);
    addRoomToHotel(newRoom, navigate);
  }
  console.log(typeof roomPrice);
  console.log(roomCap);
  console.log(roomType);
  console.log(img1);
  console.log(typeof roomCap);

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={e => setImg1(e.target.files[0])}
      />
      <input
        type="file"
        accept="image/*"
        onChange={e => setImg2(e.target.files[0])}
      />

      <input
        type="text"
        placeholder="roomNo"
        value={roomNo}
        onChange={e => setRoomNo(e.target.value)}
      />
      <input
        type="text"
        placeholder="roomRoomCAP"
        value={roomCap}
        onChange={e => setRoomCap(+e.target.value)}
      />
      <input
        type="text"
        placeholder="roomType"
        value={roomType}
        onChange={e => setRoomType(e.target.value)}
      />
      <input
        type="text"
        placeholder="roomPrice"
        value={roomPrice}
        onChange={e => setRoomPrice(e.target.value.toString())}
      />
      <button onClick={saveRoom}>Save</button>
    </div>
  );
};

export default AddRoom;
