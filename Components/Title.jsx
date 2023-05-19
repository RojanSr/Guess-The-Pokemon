import React from "react";
import beginningImg from "../images/cover-pokemon.png";

export default function Title() {
  return (
    <>
      <div className="bgImg"></div>
      <h1 className="main--title">Who's That Pokémon?</h1>
      <img src={beginningImg} className="beginningImg"></img>
    </>
  );
}
