import css from "../css/portfoliopiece.module.scss";
import ReactTooltip from "react-tooltip";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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
const authIcon = "/icons/auth.svg";

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
const authIcon_dark = "/icons/auth_dark.svg";

function PortfolioPiece({
  darkMode,

  title,
  description,
  techstack,
  livesite,
  repo,
  image,
  figma,
}) {
  // Create array of tech badges for JSON data from strapi

  const stackElements = techstack.map((item) => {
    if (item === "HTML") {
      return (
        <img
          src={darkMode ? htmlIcon_dark : htmlIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "CSS") {
      return (
        <img
          src={darkMode ? cssIcon_dark : cssIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "React") {
      return (
        <img
          src={darkMode ? reactIcon_dark : reactIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "Next.js") {
      return (
        <img
          src={darkMode ? nextjsIcon_dark : nextjsIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "JavaScript") {
      return (
        <img
          src={darkMode ? javascriptIcon_dark : javascriptIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "SASS") {
      return (
        <img
          src={darkMode ? sassIcon_dark : sassIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "Tailwind") {
      return (
        <img
          src={darkMode ? tailwindIcon_dark : tailwindIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "Three.js") {
      return (
        <img
          src={darkMode ? threejsIcon_dark : threejsIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "Blender 3D") {
      return (
        <img
          src={darkMode ? blenderIcon_dark : blenderIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "Figma") {
      return (
        <img
          src={darkMode ? figmaIcon_dark : figmaIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "git") {
      return (
        <img
          src={darkMode ? gitIcon_dark : gitIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "Framer Motion") {
      return (
        <img
          src={darkMode ? framerIcon_dark : framerIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "Sanity CMS") {
      return (
        <img
          src={darkMode ? sanityIcon_dark : sanityIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "Strapi CMS") {
      return (
        <img
          src={darkMode ? strapiIcon_dark : strapiIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "Stripe Payments") {
      return (
        <img
          src={darkMode ? stripeIcon_dark : stripeIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    } else if (item === "Auth0") {
      return (
        <img
          src={darkMode ? authIcon_dark : authIcon}
          key={item}
          className={css.stack_item}
          data-tip={item}
        />
      );
    }
  });

  const stackElements2 = techstack.map((item, i) => {
    return (
      <div
        key={i}
        className={darkMode ? css.techItem_dark : css.techItem_light}
      >
        <h5 className={css.bold}>{item}</h5>
      </div>
    );
  });

  return (
    <div
      className={darkMode ? css.portfolioCard_dark : css.portfolioCard_light}
    >
      <ReactTooltip className={css.tooltip} />
      <img className={css.thumbnail} src={image.url} alt="thumbnail" />
      <div className={css.body}>
        <h1>{title}</h1>
        <ReactMarkdown remarkPlugins={[gfm]}>{description}</ReactMarkdown>
        <div className={css.stack}>{stackElements}</div>
        <div className={css.buttons}>
          {livesite !== "null" && (
            <button
              className={
                darkMode ? css.btn_livesite_dark : css.btn_livesite_light
              }
            >
              <a href={livesite} rel="noopener noreferrer" target="_blank">
                Live Site
              </a>
            </button>
          )}
          <button
            className={darkMode ? css.btn_github_dark : css.btn_github_light}
          >
            <a href={repo} rel="noopener noreferrer" target="_blank">
              Githib Repo
            </a>
          </button>
          <button
            style={figma ? { display: "block" } : { display: "none" }}
            className={darkMode ? css.btn_figma_dark : css.btn_figma_light}
          >
            <a href={figma} rel="noopener noreferrer" target="_blank">
              Figma Design
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPiece;
