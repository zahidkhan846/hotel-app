import React, { useCallback, useEffect, useState } from "react";
import { data } from "./data";

export const RoomContext = React.createContext({
  rooms: null,
  sortedRooms: null,
  featuredRooms: null,
  loading: null,
  type: null,
  capacity: null,
  price: null,
  minPrice: null,
  maxPrice: null,
  minSize: null,
  maxSize: null,
  breakfast: null,
  pets: null,
  getRoomDetail: () => {},
  sortByType: () => {},
  sortByCapacity: () => {},
  sortByPrice: () => {},
  sortByMinSize: () => {},
  sortByMaxSize: () => {},
  sortByBreakfast: () => {},
  sortByPets: () => {},
});

const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    let rooms = formatData(data);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));

    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setLoading(false);
    setPrice(maxPrice);
    setMaxPrice(maxPrice);
    setMaxSize(maxSize);
    setMinPrice(0);
  }, []);

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  const getRoomDetail = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  const sortByType = (event) => {
    const value = event.target.value;
    setType(value);
  };
  const sortByCapacity = (event) => {
    const value = event.target.value;
    setCapacity(parseInt(value));
  };
  const sortByPrice = (event) => {
    const value = event.target.value;
    setPrice(parseInt(value));
  };
  const sortByMinSize = (event) => {
    const value = event.target.value;
    setMinSize(value);
  };
  const sortByMaxSize = (event) => {
    const value = event.target.value;
    setMaxSize(value);
  };
  const sortByBreakfast = (event) => {
    const checked = event.target.checked;
    setBreakfast(checked);
  };
  const sortByPets = (event) => {
    const checked = event.target.checked;
    setPets(checked);
  };

  const filterRooms = useCallback(() => {
    let tempRooms = [...rooms];

    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    tempRooms = tempRooms.filter((room) => room.price <= price);
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    setSortedRooms(tempRooms);
  }, [rooms, type, capacity, price, minSize, maxSize, breakfast, pets]);

  useEffect(() => {
    filterRooms();
  }, [filterRooms, type, capacity, price, minSize, maxSize, breakfast, pets]);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        getRoomDetail,
        sortByType,
        sortByCapacity,
        sortByPrice,
        sortByMinSize,
        sortByMaxSize,
        sortByBreakfast,
        sortByPets,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
