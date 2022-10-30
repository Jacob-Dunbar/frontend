import css from "../css/portfoliopiece.module.scss";

// Techstack badge svg paths

const cssIcon = "/icons/css.svg";
const htmlIcon = "/icons/html.svg";
const javascriptIcon = "/icons/javascript.svg";
const nextjsIcon = "/icons/nextjs.svg";
const reactIcon = "/icons/react.svg";
const sassIcon = "/icons/sass.svg";
const tailwindIcon = "/icons/tailwind.svg";
const threejsIcon = "/icons/threejs.svg";
const blenderIcon = "/icons/blender.svg";
const figmaIcon = "/icons/figma.svg";
const gitIcon = "/icons/git.svg";

const cssIcon_dark = "/icons/css_dark.svg";
const htmlIcon_dark = "/icons/html_dark.svg";
const javascriptIcon_dark = "/icons/javascript_dark.svg";
const nextjsIcon_dark = "/icons/nextjs_dark.svg";
const reactIcon_dark = "/icons/react_dark.svg";
const sassIcon_dark = "/icons/sass_dark.svg";
const tailwindIcon_dark = "/icons/tailwind_dark.svg";
const threejsIcon_dark = "/icons/threejs_dark.svg";
const blenderIcon_dark = "/icons/blender_dark.svg";
const figmaIcon_dark = "/icons/figma_dark.svg";
const gitIcon_dark = "/icons/git_dark.svg";

function PortfolioPiece(props) {
  const imageUrl = props.image.data[0].attributes.url;
  const techStack = props.techstack.tech;

  // Create array of tech badges for JSON data from strapi

  const stackElements = techStack.map((item) => {
    if (item === "html") {
      return (
        <img
          src={props.darkMode ? htmlIcon_dark : htmlIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "css") {
      return (
        <img
          src={props.darkMode ? cssIcon_dark : cssIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "react") {
      return (
        <img
          src={props.darkMode ? reactIcon_dark : reactIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "nextjs") {
      return (
        <img
          src={props.darkMode ? nextjsIcon_dark : nextjsIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "javascript") {
      return (
        <img
          src={props.darkMode ? javascriptIcon_dark : javascriptIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "sass") {
      return (
        <img
          src={props.darkMode ? sassIcon_dark : sassIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "tailwind") {
      return (
        <img
          src={props.darkMode ? tailwindIcon_dark : tailwindIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "three") {
      return (
        <img
          src={props.darkMode ? threejsIcon_dark : threejsIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "blender") {
      return (
        <img
          src={props.darkMode ? blenderIcon_dark : blenderIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "figma") {
      return (
        <img
          src={props.darkMode ? thfigmaIcon_dark : thfigmaIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "git") {
      return (
        <img
          src={props.darkMode ? gitIcon_dark : gitIcon}
          key={item}
          className={css.stack_item}
        />
      );
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
