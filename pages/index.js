import Head from "next/head";

import Navbar from "../components/Navbar.js";
import Contact from "../components/Contact";
import Header from "../components/Header.js";
import { useState, useRef } from "react";
import Portfolio from "../components/Portfolio.js";
import ScrollToTop from "../components/ScrollToTop.js";
import ScrollDown from "../components/ScrollDown.js";

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
  const [darkMode, setDarkMode] = useState(false);

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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
      <Portfolio darkMode={darkMode} data={data} />

      <div ref={contactSection}></div>
      <Contact darkMode={darkMode} />
    </div>
  );
}
