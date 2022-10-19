import styles from "../styles/portfoliopiece.module.css";

function PortfolioPiece(props) {
  const imageUrl = props.image.data[0].attributes.url;
  const techStack = props.techstack.tech;

  console.log(techStack);
  return (
    <div className={styles.portfolioCard}>
      <img src={imageUrl} alt="thumbnail" />
      <div className="body">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={styles.stack}>
          {techStack.map((item) => (
            <h2>helo</h2>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioPiece;
