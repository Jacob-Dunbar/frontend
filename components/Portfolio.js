import css from "../css/portfolio.module.scss";
import PortfolioPiece from "./PortfolioPiece.js";

function Portfolio(props) {
  // Create array of portfolio peice components by mapping over strapi data and reversing order so that most recent at the top

  const portfolioElements = props.data.portfoliopieces.data
    .map((piece) => {
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
          figma={piece.attributes.figma}
        />
      );
    })
    .reverse();

  return (
    <section className={css.portfolio}>
      {/* portfolio section */}
      <h1 className={props.darkMode ? css.heading_dark : css.heading_light}>
        Portfolio
      </h1>
      {portfolioElements}

      {/* foreground blobs */}
      {/* <div className={css.blob_container}>
        <img
          className={css.blob2_light}
          src={props.darkMode ? "/blobs/blob2_d.svg" : "/blobs/blob2_l.svg"}
          alt="foreground blob"
        />
        <img
          className={css.blob1_light}
          src={props.darkMode ? "/blobs/blob3_d.svg" : "/blobs/blob3_l.svg"}
          alt="foreground blob"
        />
      </div> */}
    </section>
  );
}

export default Portfolio;
