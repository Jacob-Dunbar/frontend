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
const framerIcon = "/icons/framer.svg";
const stripeIcon = "/icons/stripe.svg";
const strapiIcon = "/icons/strapi.svg";
const sanityIcon = "/icons/sanity.svg";

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
const framerIcon_dark = "/icons/framer_dark.svg";
const stripeIcon_dark = "/icons/stripe_dark.svg";
const strapiIcon_dark = "/icons/strapi_dark.svg";
const sanityIcon_dark = "/icons/sanity_dark.svg";

function PortfolioPiece(props) {
  const imageUrl = props.image.data[0].attributes.url;
  const techStack = props.techstack.tech;

  // Create array of tech badges for JSON data from strapi

  const stackElements = techStack.map((item) => {
    if (item === "HTML") {
      return (
        <img
          src={props.darkMode ? htmlIcon_dark : htmlIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "CSS") {
      return (
        <img
          src={props.darkMode ? cssIcon_dark : cssIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "React") {
      return (
        <img
          src={props.darkMode ? reactIcon_dark : reactIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "Next.js") {
      return (
        <img
          src={props.darkMode ? nextjsIcon_dark : nextjsIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "JavaScript") {
      return (
        <img
          src={props.darkMode ? javascriptIcon_dark : javascriptIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "SASS") {
      return (
        <img
          src={props.darkMode ? sassIcon_dark : sassIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "Tailwind") {
      return (
        <img
          src={props.darkMode ? tailwindIcon_dark : tailwindIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "Three") {
      return (
        <img
          src={props.darkMode ? threejsIcon_dark : threejsIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "Blender") {
      return (
        <img
          src={props.darkMode ? blenderIcon_dark : blenderIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "Figma") {
      return (
        <img
          src={props.darkMode ? figmaIcon_dark : figmaIcon}
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
    } else if (item === "Framer Motion") {
      return (
        <img
          src={props.darkMode ? framerIcon_dark : framerIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "Sanity.io") {
      return (
        <img
          src={props.darkMode ? sanityIcon_dark : sanityIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "Strapi") {
      return (
        <img
          src={props.darkMode ? strapiIcon_dark : strapiIcon}
          key={item}
          className={css.stack_item}
        />
      );
    } else if (item === "Stripe") {
      return (
        <img
          src={props.darkMode ? stripeIcon_dark : stripeIcon}
          key={item}
          className={css.stack_item}
        />
      );
    }
  });

  const stackElements2 = techStack.map((item) => {
    return (
      <div className={props.darkMode ? css.techItem_dark : css.techItem_light}>
        <h5 className={css.bold}>{item}</h5>
      </div>
    );
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
