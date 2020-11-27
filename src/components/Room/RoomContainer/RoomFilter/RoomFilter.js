import React, { useContext } from "react";
import "./RoomFilter.css";
import { RoomContext } from "./../../../../Utility/Context";
import Title from "./../../../Title/Title";

//GETTINGS UNIQUE VALUES IN SELECT

const getUniqueValue = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const {
    sortByType,
    sortByCapacity,
    sortByPrice,
    sortByMinSize,
    sortByMaxSize,
    sortByBreakfast,
    sortByPets,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast,
  } = useContext(RoomContext);

  const types = getUniqueValue(rooms, "type");

  const allTypes = ["all", ...types];
  // console.log(allTypes);

  const people = getUniqueValue(rooms, "capacity");

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={sortByType}
          >
            {allTypes.map((eachType, index) => (
              <option value={eachType} key={index}>
                {eachType}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={sortByCapacity}
          >
            {people.map((eachperson, index) => (
              <option value={eachperson} key={index}>
                {eachperson}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price ${price}</label>
          <input
            name="price"
            type="range"
            id="price"
            value={price}
            className="form-control"
            onChange={sortByPrice}
            min={minPrice}
            max={maxPrice}
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size</label>

          <input
            name="minSize"
            type="number"
            id="size"
            value={minSize}
            className="size-input"
            onChange={sortByMinSize}
          />
          <input
            name="maxSize"
            type="number"
            id="size"
            value={maxSize}
            className="size-input"
            onChange={sortByMaxSize}
          />
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={sortByBreakfast}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={sortByPets}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}
