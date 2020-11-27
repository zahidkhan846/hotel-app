import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { RoomContext } from "../../Utility/Context";
import Banner from "../../components/Banner/Banner";
import "./SingleRoom.css";
import StyledHero from "../../UI/StyledComponent/StyledHero";

function SingleRoom() {
  const { selectedRoom } = useParams();
  const { getRoomDetail } = useContext(RoomContext);
  const currentRoom = getRoomDetail(selectedRoom);
  if (!currentRoom) {
    return (
      <div className="error">
        <h3>Sorry! Room isn't availble</h3>
        <Link to="/rooms" className="btn-primary">
          go back to Rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    price,
    size,
    description,
    capacity,
    extras,
    breakfast,
    pets,
    images,
  } = currentRoom;

  const [image1, ...image2toN] = images;

  return (
    <>
      <StyledHero image={image1}>
        <Banner title={`${name}`}>
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {image2toN.map((image, index) => (
            <img key={index} src={image} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size}sqft</h6>
            <h6>
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets are allowed" : "pets not allowed"}</h6>
            <h6>{breakfast && "free breakfast"}</h6>
            {extras.length > 0 && (
              <>
                <h6>extras:</h6>
                <ul className="extras">
                  {extras.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
export default SingleRoom;
