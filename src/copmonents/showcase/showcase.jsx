import { useEffect, useState } from "react";
import axios from "axios";
import "./showcase.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import showcase from "../assets/shocase.png";

function Showcase() {
  const [data, setdata] = useState([]);
  const [new__data, setNewDAta] = useState("Barcha mahsulotlar");

  useEffect(() => {
    axios
      .get("https://6718988a7fc4c5ff8f4a1f17.mockapi.io/person")
      .then((data) => setdata(data.data))
      .catch((error) => console.log(error.message));
  }, []);

  const ul = (event) => {
    const catagory = event.target.textContent;

    setNewDAta(catagory);
  };

  const filterData =
    new__data === "Barcha mahsulotlar"
      ? data
      : data.filter((item) => item.category === new__data);

  return (
    <div className="main">
      <div className="container">
        <div className="catagory">
          <ul onClick={ul} className="ul">
            <li className="li">
              <a href="#">Barcha mahsulotlar</a>
            </li>
            <li className="li">
              <a href="#">Elektronika</a>
            </li>
            <li className="li">
              <a href="#">Maishiy texnika</a>
            </li>
            <li className="li">
              <a href="#">Kiyim</a>
            </li>
            <li className="li">
              <a href="#">Poyabzallar</a>
            </li>
            <li className="li">
              <a href="#">Aksessuarlar</a>
            </li>
            <li className="li">
              <a href="#">Goʻzallik va parvarish</a>
            </li>
            <li className="li">
              <a href="#">Salomatlik</a>
            </li>
            <li className="li">
              <a href="#">Uy-roʻzgʻor buyumlari</a>
            </li>
            <li className="li">
              <a href="#">Qurilish va taʼmirlash</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="img">
        <div className="container">
          <div className="img">
            <img src={showcase} alt="" />
          </div>
        </div>
      </div>

      <div className="cardlar">
        <div className="container">
          <div className="all__card">
            {filterData.map((element) => (
              <div className="card" key={element.id}>
                <div className="card__img">
                  <img src={element.img} alt={element.title} />
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                  <button className="btn__">Aksiya</button>
                </div>
                <div className="card__text">
                  <p>{element.title}</p>

                  <div className="start">
                    <FontAwesomeIcon icon={faStar} className="golden" />
                    <p>
                      {element.rate} <span>(4092 sharsh)</span>
                    </p>
                  </div>

                  <div className="price__all">
                    <div className="price">
                      <p>
                        <s>{Number(element.price) * 2}</s>
                      </p>
                      <p>{element.price}</p>
                    </div>
                    <button className="shop__card">
                      <FontAwesomeIcon icon={faBagShopping} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
