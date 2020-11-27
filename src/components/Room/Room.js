import React from "react";
import loadingImg from "../../Assests/Images/pacman.svg";
import { Link } from "react-router-dom";
import "./Room.css";

export default function Room(props) {
  const { fRoom } = props;
  const { name, images, slug, price } = fRoom;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || loadingImg} alt="room image" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
