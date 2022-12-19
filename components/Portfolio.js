import css from "../css/portfolio.module.scss";
import PortfolioPiece from "./PortfolioPiece.js";

function Portfolio({ darkMode, portfolioPieces }) {
  // Create array of portfolio peice components by mapping over strapi data and reversing order so that most recent at the top

  const portfolioElements = portfolioPieces

    .map((piece, i) => {
      return (
        <PortfolioPiece
          darkMode={darkMode}
          key={piece.order + piece.name}
          title={piece.name}
          description={piece.description}
          techstack={piece.tech}
          livesite={piece.livesite}
          repo={piece.github}
          image={piece.image}
          figma={piece.figma}
        />
      );
    })
    .reverse();

  return (
    <section className={css.portfolio}>
      {/* portfolio section */}
      <h1 className={darkMode ? css.heading_dark : css.heading_light}>
        -- Portfolio --
      </h1>
      {portfolioElements}
    </section>
  );
}

export default Portfolio;
