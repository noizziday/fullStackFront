import React, { useEffect, useRef, useState } from "react";
import "../styles/HomePage.css";
import "../styles/AuthModal.css";
import Calendar from "react-calendar";
import "../styles/ForCalendar.css";
import useOutsideAlerter from "../custom/useOutside";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const HomePage = () => {
  const [date, setDate] = useState(new Date());
  const { ref, isShow, setIsShow } = useOutsideAlerter(false);

  let yyyyFirst = date[0]?.getFullYear();
  let mmFirst = date[0]?.getMonth() + 1;
  let ddFirst = date[0]?.getDate();

  if (ddFirst < 10) ddFirst = "0" + ddFirst;
  if (mmFirst < 10) mmFirst = "0" + mmFirst;

  let dateFirst = yyyyFirst + "-" + mmFirst + "-" + ddFirst;

  let yyyySecond = date[1]?.getFullYear();
  let mmSecond = date[1]?.getMonth() + 1;
  let ddSecond = date[1]?.getDate();

  if (ddSecond < 10) ddSecond = "0" + ddSecond;
  if (mmSecond < 10) mmSecond = "0" + mmSecond;

  let dateSecond = yyyySecond + "-" + mmSecond + "-" + ddSecond;

  let cardsArr = [
    {
      name: "Джалал-Абад",
      value: "",
    },
  ];

  return (
    <div>
      <Navbar />
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
            <div className="homeTitle">Найдите жилье для новой поездки</div>
            <div className="secondTitle">
              Ищите спецпредложения на отели, дома и другие варианты.
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
                      setIsShow(true);
                    }}
                    value={
                      dateFirst == undefined + "-" + NaN + "-" + undefined
                        ? "Заезд"
                        : dateFirst
                    }
                  />
                  <div className="line">
                    <div className="innerLine"></div>
                  </div>
                  <input
                    type="text"
                    className="reserveInp dates2"
                    placeholder="Отъезд"
                    onClick={() => {
                      setIsShow(true);
                    }}
                    value={
                      dateSecond == undefined + "-" + NaN + "-" + undefined
                        ? "Отъезд"
                        : dateSecond
                    }
                  />
                </div>
                {isShow ? (
                  <div className="app">
                    <div className="calendar-container" ref={ref}>
                      <Calendar
                        onChange={setDate}
                        value={date}
                        selectRange={true}
                      />
                    </div>
                    {/* {date.length > 0 ? (
                      <p>
                        <span>Start:</span> {date[0].toDateString()}&nbsp; to
                        &nbsp <span>End:</span> {date[1].toDateString()}
                      </p>
                    ) : (
                      <p>
                        <span>Default selected date:</span>{" "}
                        {date.toDateString()}
                      </p>
                    )} */}
                  </div>
                ) : null}
              </div>

              <div className="line">
                <div className="innerLine"></div>
              </div>
              <input
                type="text"
                className="reserveInp number"
                placeholder="Количество"
              />
              <div className="privateBtn">Найти</div>
            </div>
          </div>
        </div>
        <div className="mainContent"></div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
