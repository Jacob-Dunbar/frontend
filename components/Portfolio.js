import css from "../css/portfolio.module.scss";
import PortfolioPiece from "./PortfolioPiece.js";

function Portfolio(props) {
  // Create array of portfolio peice components by mapping over strapi data and reversing order so that most recent at the top

  const portfolioElements = props.data.portfoliopieces.data
    .sort((a, b) => a.id - b.id)
    .map((piece) => {
      return (
        <PortfolioPiece
          darkMode={props.darkMode}
          key={piece.attributes.title}
          title={piece.attributes.title}
          description={piece.attributes.details}
          techstack={piece.attributes.techstack}
          livesite={piece.attributes.livesite}
          repo={piece.attributes.repo}
          image={piece.attributes.image}
          figma={piece.attributes.figma}
        />
      );
    })
    .reverse();

  console.log(props.data.portfoliopieces.data);

  return (
    <section className={css.portfolio}>
      {/* portfolio section */}
      <h1 className={props.darkMode ? css.heading_dark : css.heading_light}>
        -- Portfolio --
      </h1>
      {portfolioElements}
    </section>
  );
}

export default Portfolio;
