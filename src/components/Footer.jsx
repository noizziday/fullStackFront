import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footerBlock">
      <div className="footerBlockContent">
        <div className="footerContentInfo">
          <div className="footerContentInfoLeft">
            <div className="footerLeftElement">Отель</div>
            <div className="footerLeftElement">Номера</div>
            <div className="footerLeftElement">Ресторан</div>
            <div className="footerLeftElement">Мероприятия</div>
            <div className="footerLeftElement">Акции</div>
            <div className="footerLeftElement">Услуги</div>
          </div>
          <div className="footerContentInfoRight">
            <div className="footerRightElement">Luxury Grand Town Hotel</div>
            <div className="footerRightElement">Anna Van Den Vondel</div>
            <div className="footerRightElement">
              Anna Van Den Vondelstroot 6
            </div>
            <div className="footerRightElement">1054 QZ Amsterdam</div>
            <div className="footerRightElement">+996 777 77 77 77</div>
            <div className="footerRightElement">GrandTownHotel@gmail.com</div>
          </div>
        </div>
        <div className="footerEmail">
          <div className="telegram">
            <div>
              <a
                href="ttps://i.pinimg.com/originals/40/44/c4/4044c48d59b58497ef07c31de5cf3d1c.png"
                style={{ textDecoration: "none", color: "#e4cfa9" }}>
                Телеграмм-бот
              </a>
            </div>
            <div>
              <a href="https://t.me/geteguha_bot">
                <img
                  src="https://i.pinimg.com/originals/40/44/c4/4044c48d59b58497ef07c31de5cf3d1c.png"
                  alt=""
                  width="50px"
                  height="50px"
                  className="telegramImg"
                />
              </a>
            </div>
          </div>
          <div className="footerEmailDiv">
            <input
              type="e-mail"
              className="footerEmailInp"
              placeholder="E-MAIL"
            />
            <div className="footerLine"></div>
            <div className="footerEmailBtn">ВОЙТИ</div>
          </div>
          <div>Copyright © 1996–2022 Booking.com™. Все права защищены.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
