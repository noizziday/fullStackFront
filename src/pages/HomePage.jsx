import React, { useState } from "react";
import "../styles/HomePage.css";
import "../styles/AuthModal.css";
import Calendar from "react-calendar";
import "../styles/ForCalendar.css";
const HomePage = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div>
      <div>
        {/* <div className="imgDiv">
            <img
              src="https://s01.cdn-pegast.net/get/f8/d9/a7/f011c31de122ffc06d653b57bc8e52fbba7a6a9a9da99c96f18d337db0/5c3dec186770c.jpg"
              alt=""
              className="images"
            />
          </div> */}
        <div className="welcome">
          <div className="welcomeInner">
            <div className="homeTitle">LUXURY GRAND TOWN HOTEL</div>
            <div className="secondTitle">
              Bоплощение тишины и покоя в оживленном городе
            </div>
            <div className="reserveBar">
              <input
                type="text"
                className="reserveInp search"
                placeholder="Куда вы хотите ехать?"
              />
              <div className="line">
                <div className="innerLine"></div>
              </div>
              <div className="dateDiv">
                <div className="dateInputs">
                  <input
                    type="text"
                    className="reserveInp dates1"
                    placeholder="Заезд"
                    onClick={() => {
                      setShowCalendar(!showCalendar);
                    }}
                    value={date[0]}
                  />
                  <div className="line">
                    <div className="innerLine"></div>
                  </div>
                  <input
                    type="text"
                    className="reserveInp dates2"
                    placeholder="Отъезд"
                    onClick={() => {
                      setShowCalendar(!showCalendar);
                    }}
                    onChange={e => setDate(new Date(e.target.value))}
                    value={date[1]}
                  />
                </div>
              </div>

              <div className="line">
                <div className="innerLine"></div>
              </div>
              <input
                type="text"
                className="reserveInp number"
                placeholder="Количество"
              />
              <div className="privateBtn">Забронировать</div>
            </div>
          </div>
        </div>
        <div className="mainContent">Здесь будет основная информация</div>
      </div>
    </div>
  );
};

export default HomePage;
