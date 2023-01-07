import Head from "next/head";

import Navbar from "../components/Navbar.js";
import Contact from "../components/Contact";
import Header from "../components/Header.js";
import { useState, useRef } from "react";
import Portfolio from "../components/Portfolio.js";
import ScrollToTop from "../components/ScrollToTop.js";
import ScrollDown from "../components/ScrollDown.js";
import Background from "../components/Background.js";
import Footer from "../components/Footer.js";

// Contentful cms

export const getStaticProps = async () => {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query {
          portfolioPieceCollection {
           items {
              order
             name
             image{
               url
               width
               height
             }
             description
             tech
             github
             liveSite
             figma
           }
         }
         }
        `,
      }),
    }
  );

  if (!result.ok) {
    console.log(result);
    return {};
  }

  const { data } = await result.json();

  const portfolioPieces = data.portfolioPieceCollection.items.sort(
    (a, b) => a.order - b.order
  );

  return {
    props: {
      portfolioPieces,
    },
  };
};

export default function Home({ portfolioPieces }) {
  // dark mode state
  const [darkMode, setDarkMode] = useState(false);
  console.log(portfolioPieces);

  //useRefs for navigation
  const portfolioSection = useRef(null);
  const contactSection = useRef(null);

  function scrollToSection(elementRef) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div className={darkMode ? "background_dark" : "background_light"}>
      <Head>
        <title>Jacob Dunbar</title>
        <meta name="Portfolio Website" content="Web development" />
        <link rel="icon" href="/icons/favicon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <ScrollToTop darkMode={darkMode} />
      <ScrollDown
        darkMode={darkMode}
        scrollToSection={scrollToSection}
        portfolioSection={portfolioSection}
      />

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prevMode) => !prevMode)}
        scrollToSection={scrollToSection}
        portfolioSection={portfolioSection}
        contactSection={contactSection}
      />

      <Header
        darkMode={darkMode}
        scrollToSection={scrollToSection}
        contactSection={contactSection}
      />

      <div ref={portfolioSection}></div>
      <Portfolio darkMode={darkMode} portfolioPieces={portfolioPieces} />

      <div ref={contactSection}></div>
      <Contact darkMode={darkMode} />

      <Background darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
}
