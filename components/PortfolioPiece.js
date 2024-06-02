import css from "../css/portfoliopiece.module.scss";
import ReactTooltip from "react-tooltip";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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
  const stackElements = techstack.map((item) => {
    return (
      <img
        src={darkMode ? `/icons/${item}_dark.svg` : `/icons/${item}.svg`}
        key={item}
        className={css.stack_item}
        data-tip={item}
      />
    );
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
            style={repo ? { display: "block" } : { display: "none" }}
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
