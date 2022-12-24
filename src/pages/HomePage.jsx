import React from "react";
import "../styles/HomePage.css";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate("");
  return (
    <div>
      <div>
        <div className="imgDiv">
          <img
            src="http://alatoo.edu.kg/image?img=image_29_5688196733643861969.jpg"
            alt=""
            className="images"
          />
        </div>
        <div className="welcome">
          <div className="welcomeInner">
            <div style={{ fontSize: "64px" }}>BOOKING.alatoo</div>
            <div className="reserveBar">
              <input
                type="text"
                className="reserveInp search"
                placeholder="section"
              />
              <div className="line">
                <div className="innerLine"></div>
              </div>
              <input
                type="date"
                className="reserveInp dates"
                placeholder="date"
              />
              <div className="line">
                <div className="innerLine"></div>
              </div>
              <input
                type="time"
                className="reserveInp dates"
                placeholder="time"
              />
              <div className="line">
                <div className="innerLine"></div>
              </div>
              <input
                type="text"
                className="reserveInp number"
                placeholder="your group"
              />
              <div className="line">
                <div className="innerLine"></div>
              </div>
              <div className="privateBtn">Booking</div>
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="block-2">
            <h2 className="block-2_number">SECTIONS</h2>
            <div className="standart">
              <div className="block-2_left">
                <h5 className="number_category">Football Pitch</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur <br />
                  adipisicing elit. Necessitatibus, eaque. <br />
                  <br />
                  price: <br />
                </p>
                <img
                  id="standart_img_left"
                  src="http://alatoo.edu.kg/image?img=image_sport-new1_3945603348868698033.jpg"
                  alt=""
                  width="350px"
                  height="350px"
                />
              </div>
              <div className="block-2_right">
                <img
                  id="standart_img_right"
                  src="http://alatoo.edu.kg/image?img=image_sportt8_7976676036276770003.jpg"
                  alt=""
                  width="500px"
                  height="500px"
                />
                <button
                  className="booking-btn"
                  onClick={() => navigate("/football")}>
                  BOOK "FOOTBALL PITCH"
                </button>
              </div>
            </div>

            <div className="lux">
              <div className="block-2_left">
                <img
                  id="lux_img_left"
                  src="http://alatoo.edu.kg/image?img=image_sport6_4345114718293631768.jpg"
                  alt=""
                  width="500px"
                  height="500px"
                />
                <button
                  className="lux-booking-btn"
                  onClick={() => navigate("/basketball")}>
                  BOOK "BASKETBOLL COURT"
                </button>
              </div>
              <div className="block-2_right">
                <h5 className="number_category">Baketball Court</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Sit, quos!
                </p>
                <img
                  id="lux_img_right"
                  src="http://alatoo.edu.kg/image?img=image_sport555_2085811315641016692.jpg"
                  alt=""
                  width="350px"
                  height="350px"
                />
              </div>
            </div>

            <div className="vip">
              <div className="block-2_left">
                <h5 className="number_category">Tennis Court</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur <br /> adipisicing
                  elit. Quis, cum?
                </p>
                <img
                  id="vip_img_left"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzk0ginxakgVQb6c5SRSavINCLMilBNbB1TQ&usqp=CAU"
                  alt=""
                  width="350px"
                  height="350px"
                />
              </div>
              <div className="block-2_right">
                <img
                  id="vip_img_right"
                  src="data:image/jpeg;base64,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"
                  alt=""
                  width="500px"
                  height="500px"
                />
                <button
                  className="booking-btn"
                  onClick={() => navigate("/tennis")}>
                  BOOK "TENNIS COURT"
                </button>
              </div>
            </div>

            <div className="lux">
              <div className="block-2_left">
                <img
                  id="lux_img_left"
                  src="data:image/jpeg;base64,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"
                  alt=""
                  width="500px"
                  height="500px"
                />
                <button
                  className="lux-booking-btn"
                  onClick={() => navigate("/dancehall")}>
                  BOOK "DANCE HALL"
                </button>
              </div>
              <div className="block-2_right">
                <h5 className="number_category">Dance Hall</h5>
                <p>
                  Lorem, ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Sit, quos!
                </p>
                <img
                  id="lux_img_right"
                  src="https://i.ytimg.com/vi/R6pMxEwiB3M/maxresdefault.jpg"
                  alt=""
                  width="350px"
                  height="350px"
                />
              </div>
            </div>
            <div className="vip">
              <div className="block-2_left">
                <h5 className="number_category">Konya Hall</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur <br /> adipisicing
                  elit. Quis, cum?
                </p>
                <img
                  id="vip_img_left"
                  src="http://alatoo.edu.kg/image?img=image_55887770_2070908883202103_6683285724680159232_o_3927720227657643265.jpg"
                  alt=""
                  width="350px"
                  height="350px"
                />
              </div>
              <div className="block-2_right">
                <img
                  id="vip_img_right"
                  src="http://alatoo.edu.kg/image?img=image_54730540_2070902303202761_7529589874802819072_o_5532392380844253894.jpg"
                  alt=""
                  width="500px"
                  height="500px"
                />
                <button
                  className="booking-btn"
                  onClick={() => navigate("/konyahall")}>
                  BOOK "KONYA HALL"
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
