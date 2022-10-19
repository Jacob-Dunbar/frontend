import styles from "../styles/portfoliopiece.module.css";
import Image from "next/image";
import cssIcon from "../public/css.svg";
import htmlIcon from "../public/html.svg";
import javascriptIcon from "../public/javascript.svg";
import nextjsIcon from "../public/next.js.svg";
import reactIcon from "../public/react.svg";

function PortfolioPiece(props) {
  const imageUrl = props.image.data[0].attributes.url;
  const techStack = props.techstack.tech;

  console.log(techStack);

  const stackElements = techStack.map((item) => {
    if (item === "html") {
      return <Image src={htmlIcon} width="25" key={item} />;
    } else if (item === "css") {
      return <Image src={cssIcon} width="25" key={item} />;
    } else if (item === "react") {
      return <Image src={reactIcon} width="25" key={item} />;
    } else if (item === "next.js") {
      return <Image src={nextjsIcon} width="25" key={item} />;
    } else if (item === "javascript") {
      return <Image src={javascriptIcon} width="25" key={item} />;
    }
  });

  return (
    <div className={styles.portfolioCard}>
      <img className={styles.thumbnail} src={imageUrl} alt="thumbnail" />
      <div className={styles.body}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={styles.stack}>{stackElements}</div>
      </div>
    </div>
  );
}

export default PortfolioPiece;

// {`../public/${techStack[1]}.svg`}
