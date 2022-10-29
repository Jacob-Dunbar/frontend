import css from "../css/portfoliopiece.module.scss";

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
      return <img src={htmlIcon} key={item} className={css.stack_item} />;
    } else if (item === "css") {
      return <img src={cssIcon} key={item} className={css.stack_item} />;
    } else if (item === "react") {
      return <img src={reactIcon} key={item} className={css.stack_item} />;
    } else if (item === "nextjs") {
      return <img src={nextjsIcon} key={item} className={css.stack_item} />;
    } else if (item === "javascript") {
      return <img src={javascriptIcon} key={item} className={css.stack_item} />;
    } else if (item === "sass") {
      return <img src={sassIcon} key={item} className={css.stack_item} />;
    } else if (item === "tailwind") {
      return <img src={tailwindIcon} key={item} className={css.stack_item} />;
    } else if (item === "three") {
      return <img src={threejsIcon} key={item} className={css.stack_item} />;
    }
  });

  return (
    <div
      className={
        props.darkMode ? css.portfolioCard_dark : css.portfolioCard_light
      }
    >
      <img className={css.thumbnail} src={imageUrl} alt="thumbnail" />
      <div className={css.body}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={css.stack}>{stackElements}</div>
        <div className={css.buttons}>
          <button
            className={
              props.darkMode ? css.btn_livesite_dark : css.btn_livesite_light
            }
          >
            <a href={props.livesite}>Live Site</a>
          </button>
          <button
            className={
              props.darkMode ? css.btn_github_dark : css.btn_github_light
            }
          >
            <a href={props.repo}>Githib Repo</a>
          </button>
          <button
            style={props.figma ? { display: "block" } : { display: "none" }}
            className={
              props.darkMode ? css.btn_figma_dark : css.btn_figma_light
            }
          >
            <a href={props.figma}>Figma Design</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPiece;

// {`../public/${techStack[1]}.svg`}
