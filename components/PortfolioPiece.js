import styles from "../styles/portfoliopiece.module.scss";

// Techstack badge svg paths

const cssIcon = "/icons/css.svg";
const htmlIcon = "/icons/html.svg";
const javascriptIcon = "/icons/javascript.svg";
const nextjsIcon = "/icons/next.js.svg";
const reactIcon = "/icons/react.png";
const sassIcon = "/icons/sass.png";
const tailwindIcon = "/icons/tailwind.png";
const threejsIcon = "/icons/threejs.svg";

function PortfolioPiece(props) {
  const imageUrl = props.image.data[0].attributes.url;
  const techStack = props.techstack.tech;

  // Create array of tech badges for JSON data from strapi

  const stackElements = techStack.map((item) => {
    if (item === "html") {
      return <img src={htmlIcon} key={item} className={styles.stack_item} />;
    } else if (item === "css") {
      return <img src={cssIcon} key={item} className={styles.stack_item} />;
    } else if (item === "react") {
      return <img src={reactIcon} key={item} className={styles.stack_item} />;
    } else if (item === "next.js") {
      return <img src={nextjsIcon} key={item} className={styles.stack_item} />;
    } else if (item === "javascript") {
      return (
        <img src={javascriptIcon} key={item} className={styles.stack_item} />
      );
    } else if (item === "sass") {
      return <img src={sassIcon} key={item} className={styles.stack_item} />;
    } else if (item === "tailwind") {
      return (
        <img src={tailwindIcon} key={item} className={styles.stack_item} />
      );
    } else if (item === "threejs") {
      return <img src={threejsIcon} key={item} className={styles.stack_item} />;
    }
  });

  return (
    <div
      className={
        props.darkMode ? styles.portfolioCard_dark : styles.portfolioCard_light
      }
    >
      <img className={styles.thumbnail} src={imageUrl} alt="thumbnail" />
      <div className={styles.body}>
        <h1>_{props.title}</h1>
        <p>{props.description}</p>
        <div className={styles.stack}>{stackElements}</div>
        <div className={styles.buttons}>
          <button
            className={
              props.darkMode
                ? styles.btn_livesite_dark
                : styles.btn_livesite_light
            }
          >
            Live Site
          </button>
          <button
            className={
              props.darkMode ? styles.btn_github_dark : styles.btn_github_light
            }
          >
            Githib Repo
          </button>
          <button
            className={
              props.darkMode ? styles.btn_figma_dark : styles.btn_figma_light
            }
          >
            Figma Design
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPiece;

// {`../public/${techStack[1]}.svg`}
