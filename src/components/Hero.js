import React from "react";
import PhotoCollase from "../img/PhotoCollase.png";

export default function Hero() {
  return (
    <main>
      <img src={PhotoCollase} alt="collase" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
}
