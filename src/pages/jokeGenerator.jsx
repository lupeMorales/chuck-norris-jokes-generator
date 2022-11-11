import React from "react";
import Badge from "@mui/material/Badge";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

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

      <section className="chuck__actions">
        <button className="chuck__button">generate new joke</button>
        <Badge badgeContent={4} showZero max={99} color="primary">
          <SentimentSatisfiedAltIcon sx={{ fontSize: 25 }} />
        </Badge>
        <Badge badgeContent={0} showZero max={99} color="primary">
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: 25 }} />
        </Badge>
      </section>
    </main>
  );
};

export default JokeGenerator;
