import React from "react";

function PortfolioPiece(props) {
  const imageUrl = props.image.data[0].attributes.url;
  const techStack = props.techstack.tech;

  console.log(techStack);
  return (
    <div className="portfolioCard">
      {/* <img src={imageUrl} alt="thumbnail" /> */}
      <div className="body">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        {techStack.map((item) => (
          <h2>helo</h2>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPiece;
