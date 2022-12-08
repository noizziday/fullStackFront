import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";
import "../../../styles/AddRoom.css";

const AddRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addRoomToHotel } = useContext(hotelsContext);

  const [hotelSlug, setHotelSlug] = useState(id);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");

  const [roomNo, setRoomNo] = useState("");
  const [roomCap, setRoomCap] = useState(1);
  const [roomPrice, setRoomPrice] = useState("");
  const [roomType, setRoomType] = useState("standart");

  const [roomNumber, setRoomNumber] = useState(1);

  const [img11, setImg11] = useState("");
  const [img21, setImg21] = useState("");

  const [roomNo1, setRoomNo1] = useState("");
  const [roomCap1, setRoomCap1] = useState(1);
  const [roomPrice1, setRoomPrice1] = useState("");
  const [roomType1, setRoomType1] = useState("standart");

  const [img12, setImg12] = useState("");
  const [img22, setImg22] = useState("");

  const [roomNo2, setRoomNo2] = useState("");
  const [roomCap2, setRoomCap2] = useState(1);
  const [roomPrice2, setRoomPrice2] = useState("");
  const [roomType2, setRoomType2] = useState("standart");

  function saveRoom() {
    let newRoom = new FormData();
    newRoom.append("carousel_img", img1);
    newRoom.append("carousel_img", img2);

    newRoom.append("create_room_no", roomNo);
    newRoom.append("room_type", roomType);
    newRoom.append("room_capacity", roomCap);
    newRoom.append("room_price", roomPrice);
    newRoom.append("hotel", hotelSlug);

    if (!img1 || !img2 || !roomNo || !roomType || !roomCap || !roomPrice) {
      alert("Заполните всеполя");
      return;
    }

    addRoomToHotel(newRoom, navigate);

    if (roomNumber < 2) {
      navigate("/hotels");
      return;
    }

    let newRoom1 = new FormData();
    newRoom1.append("carousel_img", img11);
    newRoom1.append("carousel_img", img21);

    newRoom1.append("create_room_no", roomNo1);
    newRoom1.append("room_type", roomType1);
    newRoom1.append("room_capacity", roomCap1);
    newRoom1.append("room_price", roomPrice1);
    newRoom1.append("hotel", hotelSlug);

    if (
      !img11 ||
      !img21 ||
      !roomNo1 ||
      !roomType1 ||
      !roomCap1 ||
      !roomPrice1
    ) {
      alert("Заполните всеполя");
      return;
    }

    addRoomToHotel(newRoom1, navigate);
    if (roomNumber < 3) {
      navigate("/hotels");
      return;
    }
    let newRoom2 = new FormData();
    newRoom2.append("carousel_img", img12);
    newRoom2.append("carousel_img", img22);

    newRoom2.append("create_room_no", roomNo2);
    newRoom2.append("room_type", roomType2);
    newRoom2.append("room_capacity", roomCap2);
    newRoom2.append("room_price", roomPrice2);
    newRoom2.append("hotel", hotelSlug);

    if (
      !img12 ||
      !img22 ||
      !roomNo2 ||
      !roomType2 ||
      !roomCap2 ||
      !roomPrice2
    ) {
      alert("Заполните всеполя");
      return;
    }

    addRoomToHotel(newRoom2, navigate);
  }

  console.log(roomNumber);
  console.log(roomType);

  return (
    <div className="addRoomBlock">
      <div className="addRoomDiv">
        <div className="addRoomInnerDiv">
          <div className="addRoomDivTitle">
            <h2>Добавьте комнату :)</h2>
            <div className="numberOfRoomsDiv">
              <h4>Количество добавляемых комнат</h4>
              <select
                value={roomNumber}
                onChange={e => setRoomNumber(e.target.value)}
                className="selectNumberOfRoomTypes">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
          <div className="addRoomCart">
            <div className="addRoomTitles">
              <div>Первое изображение</div>
              <div>Второе изображение</div>
              <div>Номер комнаты</div>
              <div>Вместимость (1-4)</div>
              <div>Тип комнаты</div>
              <div>Стоимость (сутки)</div>
            </div>
            {roomNumber > 1 ? (
              <div className="addRoomInputsDiv">
                <div className="addRoomDivSection">
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
                    placeholder="Укажите номер комнаты"
                    value={roomNo}
                    onChange={e => setRoomNo(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Укажите вместимость комнаты"
                    value={roomCap}
                    onChange={e => setRoomCap(+e.target.value)}
                  />
                  <select
                    value={roomType}
                    onChange={e => setRoomType(e.target.value)}
                    className="selectNumberOfRoomTypes">
                    <option value={"standart"}>Стандартный</option>
                    <option value={"lux"}>Люкс</option>
                    <option value={"vip"}>ВИП</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Укажите стоимость комнаты"
                    value={roomPrice}
                    onChange={e => setRoomPrice(e.target.value.toString())}
                  />
                </div>
                <div className="addRoomDivSection">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={e => setImg11(e.target.files[0])}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={e => setImg21(e.target.files[0])}
                  />

                  <input
                    type="text"
                    placeholder="Укажите номер комнаты"
                    value={roomNo1}
                    onChange={e => setRoomNo1(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Укажите вместимость комнаты"
                    value={roomCap1}
                    onChange={e => setRoomCap1(+e.target.value)}
                  />
                  <select
                    value={roomType1}
                    onChange={e => setRoomType1(e.target.value)}
                    className="selectNumberOfRoomTypes">
                    <option value={"standart"}>Стандартный</option>
                    <option value={"lux"}>Люкс</option>
                    <option value={"vip"}>ВИП</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Укажите стоимость комнаты"
                    value={roomPrice1}
                    onChange={e => setRoomPrice1(e.target.value.toString())}
                  />
                </div>
                {roomNumber > 2 ? (
                  <div className="addRoomDivSection">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={e => setImg12(e.target.files[0])}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={e => setImg22(e.target.files[0])}
                    />

                    <input
                      type="text"
                      placeholder="Укажите номер комнаты"
                      value={roomNo2}
                      onChange={e => setRoomNo2(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Укажите вместимость комнаты"
                      value={roomCap2}
                      onChange={e => setRoomCap2(+e.target.value)}
                    />
                    <select
                      value={roomType2}
                      onChange={e => setRoomType2(e.target.value)}
                      className="selectNumberOfRoomTypes">
                      <option value={"standart"}>Стандартный</option>
                      <option value={"lux"}>Люкс</option>
                      <option value={"vip"}>ВИП</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Укажите стоимость комнаты"
                      value={roomPrice2}
                      onChange={e => setRoomPrice2(e.target.value.toString())}
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="addRoomInputsDiv">
                <div className="addRoomDivSection">
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
                    placeholder="Укажите номер комнаты"
                    value={roomNo}
                    onChange={e => setRoomNo(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Укажите вместимость комнаты"
                    value={roomCap}
                    onChange={e => setRoomCap(+e.target.value)}
                  />
                  <select
                    value={roomType}
                    onChange={e => setRoomType(e.target.value)}
                    className="selectNumberOfRoomTypes">
                    <option value={"standart"}>Стандартный</option>
                    <option value={"lux"}>Люкс</option>
                    <option value={"vip"}>ВИП</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Укажите стоимость комнаты"
                    value={roomPrice}
                    onChange={e => setRoomPrice(e.target.value.toString())}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="addRoomBtnDiv">
          <button onClick={saveRoom} className="addRoomBtn">
            Добавить комнаты
          </button>
          <button onClick={() => navigate("/  ")} className="addRoomBtn">
            Пока не добавлять
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
