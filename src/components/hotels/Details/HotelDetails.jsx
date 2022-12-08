import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";
import Reviews from "../../Reviews";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const HotelDetails = () => {
  const { id } = useParams();

  const { getOneHotel, oneHotel, comments, getComments, deleteComment } =
    useContext(hotelsContext);

  console.log(comments);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    getOneHotel(id);
    getComments();
  }, []);
  console.log(oneHotel?.room[0].room_images[0]);

  return (
    <>
      <Navbar />
      <div
        className="block-1"
        style={{
          color: "#002939",
          backgroundImage: `url(${oneHotel?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}>
        {/* тут должен быть навбар */}
        <div className="block-1_opacity"></div>
        {/* формачка для брони */}
        <h2 className="block-1_h2">{oneHotel?.title}</h2>
      </div>
      <div className="block-2">
        <h2 className="block-2_number">НОМЕРА</h2>
        {oneHotel?.room?.map(item => (
          <div key={item.slug}>
            <div className="standart">
              <div className="block-2_left">
                <h5 className="number_category">
                  {item.room_type.toUpperCase()}
                </h5>
                <p>{item.room_price}$</p>
                <div className="roomFetures">
                  {item.air_conditioner ? (
                    <h6>Кондиционер ✔️</h6>
                  ) : (
                    <h6>Кондиционер ❌</h6>
                  )}
                  {item.air_conditioner ? (
                    <h6>Телевизор ✔️</h6>
                  ) : (
                    <h6>Телевизор ❌</h6>
                  )}
                  {item.air_conditioner ? <h6>WiFi ✔️</h6> : <h6>WiFi ❌</h6>}
                </div>
                <img
                  id="standart_img_left"
                  src={`http://${item.room_images[0]}`}
                  alt=""
                  width="350px"
                  height="350px"
                />
              </div>
              <div className="block-2_right">
                <img
                  id="standart_img_right"
                  src={`http://${item.room_images[1]}`}
                  alt=""
                  width="500px"
                  height="500px"
                />
                <button className="booking-btn">
                  ВЫБРАТЬ {item.room_type.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="comments-block"
        style={{ display: "flex", justifyContent: "center" }}>
        <button className="comment-btn" onClick={() => setOpen(!open)}>
          оставить комментарий
        </button>
        {comments?.map(item => {
          if (item.hotel == id) {
            return (
              <div key={item.id}>
                <span>
                  <b>{item.user}</b>
                </span>
                <br />
                <span>{item.good_review}</span>
                {item.user ? (
                  <button onClick={() => deleteComment(id, item.id)}>
                    Delete
                  </button>
                ) : null}
                <br />
                <br />
              </div>
            );
          }
        })}
      </div>
      {open ? <Reviews id={id} setOpen={setOpen} open={open} /> : <></>}
      <Footer />
    </>
  );
};

export default HotelDetails;
