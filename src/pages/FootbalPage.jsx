import React from "react";

const FootbalPage = () => {
  return (
    <div>
      <div>
        <div className="imgDiv">
          <img
            src="http://alatoo.edu.kg/image?img=image_sportt8_7976676036276770003.jpg"
            alt=""
            className="images"
          />
        </div>
        <div className="welcome">
          <div className="welcomeInner">
            <div style={{ fontSize: "64px" }}>Football Pitch</div>
            <div className="reserveBar">
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
      </div>
    </div>
  );
};

export default FootbalPage;
