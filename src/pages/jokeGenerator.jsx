import React from "react";
import chuckNorris from "../images/chuckNorris-removebg-preview.png";
import "../styles/pages/jokeGenerator.scss";
const JokeGenerator = () => {
  return (
    <main className="chuck__container">
      <section className="chuck__joke">
        {" "}
        <img alt="chuck norris" src={chuckNorris} className="chuck__img"></img>
        <p className="chuck__text">"Chuck Norris no duerme, espera"</p>
      </section>

      <button className="chuck__button">generate new joke</button>
    </main>
  );
};

export default JokeGenerator;
