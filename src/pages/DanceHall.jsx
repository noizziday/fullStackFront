import React from "react";

const DanceHall = () => {
  return (
    <div>
      <div>
        <div className="imgDiv">
          <img
            src="http://alatoo.edu.kg/image?img=image_AD0_9706_4853045418753461924.jpg"
            alt=""
            className="images"
          />
        </div>
        <div className="welcome">
          <div className="welcomeInner">
            <div style={{ fontSize: "64px" }}>Dance Hall</div>
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

export default DanceHall;
