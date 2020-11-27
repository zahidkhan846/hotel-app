import React, { useState } from "react";
import Title from "../../components/Title/Title";
import {
  FaAngellist,
  FaAmbulance,
  FaAsterisk,
  FaChessKnight,
} from "react-icons/fa";
import "./Services.css";

export default function Services() {
  const [services, setServices] = useState([
    {
      icon: <FaAngellist />,
      title: "Free Cocktail",
      info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      icon: <FaAmbulance />,
      title: "Free Medical",
      info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      icon: <FaAsterisk />,
      title: "Latest Movies",
      info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      icon: <FaChessKnight />,
      title: "Games",
      info:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ]);
  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((service, index) => (
          <article key={index} className="service">
            <span>{service.icon}</span>
            <h6>{service.title}</h6>
            <p>{service.info}</p>
          </article>
        ))}
      </div>
      <div />
    </section>
  );
}
