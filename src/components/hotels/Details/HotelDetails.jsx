import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";
import Reviews from "../../Reviews";

const HotelDetails = () => {

  const { id } = useParams();

  const { getOneHotel, oneHotel, comments, getComments, deleteComment } =
    useContext(hotelsContext);
  const { id } = useParams();
  console.log(comments);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <div className="block-1" style={{ color: "#002939" }}>
        {/* тут должен быть навбар */}
        <div className="block-1_opacity"></div>
        {/* формачка для брони */}
        <h2 className="block-1_h2">Title of hotel</h2>
      </div>
      <div className="block-2">
        <h2 className="block-2_number">НОМЕРА</h2>
        <div className="standart">
          <div className="block-2_left">
            <h5 className="number_category">Стандарт</h5>
            <p>
              цена: ... <br /> вместимость: ... <br /> удобства: ... <br />
            </p>
            <img
              id="standart_img_left"
              src="https://q-xx.bstatic.com/images/hotel/max1024x768/119/119174090.jpg"
              alt=""
              width="350px"
              height="350px"
            />
          </div>
          <div className="block-2_right">
            <img
              id="standart_img_right"
              src="https://q-xx.bstatic.com/images/hotel/max1024x768/119/119174090.jpg"
              alt=""
              width="500px"
              height="500px"
            />
            <button className="booking-btn">ВЫБРАТЬ "СТАНДАРТ"</button>
          </div>
        </div>

        <div className="lux">
          <div className="block-2_left">
            <img
              id="lux_img_left"
              src="https://q-xx.bstatic.com/images/hotel/max1024x768/119/119174090.jpg"
              alt=""
              width="500px"
              height="500px"
            />
            <button className="lux-booking-btn">ВЫБРАТЬ "ЛЮКС"</button>
          </div>
          <div className="block-2_right">
            <h5 className="number_category">Люкс</h5>
            <p>
              цена: ... <br /> вместимость: ... <br /> удобства: ... <br />
            </p>
            <img
              id="lux_img_right"
              src="https://q-xx.bstatic.com/images/hotel/max1024x768/119/119174090.jpg"
              alt=""
              width="350px"
              height="350px"
            />
          </div>
        </div>

        <div className="vip">
          <div className="block-2_left">
            <h5 className="number_category">VIP</h5>
            <p>
              цена: ... <br /> вместимость: ... <br /> удобства: ... <br />
            </p>
            <img
              id="vip_img_left"
              src="https://q-xx.bstatic.com/images/hotel/max1024x768/119/119174090.jpg"
              alt=""
              width="350px"
              height="350px"
            />
          </div>
          <div className="block-2_right">
            <img
              id="vip_img_right"
              src="https://q-xx.bstatic.com/images/hotel/max1024x768/119/119174090.jpg"
              alt=""
              width="500px"
              height="500px"
            />
            <button className="booking-btn">ВЫБРАТЬ "VIP"</button>
          </div>
        </div>
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
    </>
  );
};

export default HotelDetails;
