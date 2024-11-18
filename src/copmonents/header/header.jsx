import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import uzb from "../assets/uzb.svg";
import uzum__m from "../assets/uzum_market.svg";
import katalog from "../assets/katalog.svg";
function Header() {
  return (
    <div className="all__header">
      <div className="header1">
        <div className="container">
          <div className="header1__left">
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} className="location__" />
              <p>
                Shahar: <span>Toshkent</span>
              </p>
            </div>
            <p>Topshirish punktlari</p>
          </div>
          <div className="header1__middle">
            <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
          </div>
          <div className="header1__right">
            <p>Savol-javoblar</p>
            <p>Buyurtmalarim</p>
            <div className="uzb">
              <img src={uzb} alt="" />
              <p>Оʻzbekcha</p>
            </div>
          </div>
        </div>
      </div>

      <div className="header2">
        <div className="container">
          <div className="all_headr2">
            <img src={uzum__m} alt="" />
            <button className="katalog">
              <img src={katalog} alt="" />
              <p>Katalog</p>
            </button>

            <form className="form">
              <input
                type="search"
                placeholder="Mahsulotlar va turkumlar izlash"
              />
              <button className="glass">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>

            <div className="user">
              <FontAwesomeIcon icon={faUser} />
              <p>Kirish</p>
            </div>
            <div className="user">
              <FontAwesomeIcon icon={faHeart} />
              <p>Saralangan</p>
            </div>
            <div className="user">
              <FontAwesomeIcon icon={faBagShopping} />
              <p>Savat</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="header3">
        <div className="container">
          <div className="img">
            <img src={showcase} alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
