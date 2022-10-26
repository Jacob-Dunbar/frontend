import Head from "next/head";
import PortfolioPiece from "../components/PortfolioPiece.js";
import Navbar from "../components/Navbar.js";
import Header from "../components/Header.js";
import Contact from "../components/Contact";
import ThreeHeader from "../components/ThreeHeader.js";
import { useState } from "react";

// strapi CMS

const URL = process.env.STRAPIBASEURL;

export async function getStaticProps(context) {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `{
        portfoliopieces{
          data{
            attributes{
              title
              description
              techstack
              livesite
              repo
              image {
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
        }`,
    }),
  };

  const res = await fetch(`${URL}/graphql`, fetchParams);
  const data = await res.json();

  return {
    props: data,
  };
}

export default function Home({ data }) {
  // dark mode state
  const [darkMode, setDarkMode] = useState(true);

  // generated portfolio pieces

  const portfolioElements = data.portfoliopieces.data.map((piece) => {
    return (
      <PortfolioPiece
        darkMode={darkMode}
        key={piece.attributes.title}
        title={piece.attributes.title}
        description={piece.attributes.description}
        techstack={piece.attributes.techstack}
        livesite={piece.attributes.livesite}
        repo={piece.attributes.repo}
        image={piece.attributes.image}
      />
    );
  });

  //console log darkmode
  console.log(darkMode);

  return (
    <div className={darkMode ? "background_dark" : "background_light"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prevMode) => !prevMode)}
      />
      <ThreeHeader darkMode={darkMode} />
      <Header darkMode={darkMode} />

      <section className="portfolioList">{portfolioElements}</section>
      <Contact darkMode={darkMode} />
    </div>
  );
}
