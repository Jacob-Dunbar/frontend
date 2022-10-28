import React from "react";
import css from "../styles/portfolio.module.scss";
import PortfolioPiece from "./PortfolioPiece.js";

function Portfolio(props) {
  const portfolioElements = props.data.portfoliopieces.data.map((piece) => {
    return (
      <PortfolioPiece
        darkMode={props.darkMode}
        key={piece.attributes.title}
        title={piece.attributes.title}
        description={piece.attributes.description}
        techstack={piece.attributes.techstack}
        livesite={piece.attributes.livesite}
        repo={piece.attributes.repo}
        image={piece.attributes.image}
      />
    );
  });

  return (
    <section className={css.portfolio}>
      <div className={css.floater_container}>
        <div
          className={props.darkMode ? css.floater1_dark : css.floater1_light}
        ></div>
        <div
          className={props.darkMode ? css.floater2_dark : css.floater2_light}
        ></div>
      </div>
      <h1 className={props.darkMode ? css.heading_dark : css.heading_light}>
        Portfolio
      </h1>
      {portfolioElements}
    </section>
  );
}

export default Portfolio;
