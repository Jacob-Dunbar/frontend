import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Face from "./Face3";
import css from "../css/header.module.scss";
import Skull from "./Skull.js";
import Image from "next/image";

export default function ThreeHeader(props) {
  const nextjsIcon = "/icons/nextjs.svg";
  const reactIcon = "/icons/react.svg";
  const sassIcon = "/icons/sass.svg";

  const threejsIcon = "/icons/threejs.svg";
  const blenderIcon = "/icons/blender.svg";
  const figmaIcon = "/icons/figma.svg";
  const gitIcon = "/icons/git.svg";

  const nextjsIcon_dark = "/icons/nextjs_dark.svg";
  const reactIcon_dark = "/icons/react_dark.svg";
  const sassIcon_dark = "/icons/sass_dark.svg";

  const threejsIcon_dark = "/icons/threejs_dark.svg";
  const blenderIcon_dark = "/icons/blender_dark.svg";
  const figmaIcon_dark = "/icons/figma_dark.svg";
  const gitIcon_dark = "/icons/git_dark.svg";

  return (
    <div className={css.home}>
      {/* light mode face model */}

      <Canvas className={!props.darkMode ? css.show : css.hidden}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <spotLight
            intensity={0.7}
            angle={0.7}
            penumbra={1}
            position={[10, 80, 200]}
            castShadow
            color={"#FFFFFF"}
          />

          <Face scale={[0.5, 0.5, 0.5]} />
        </Suspense>
      </Canvas>

      {/* dark mode skull model */}

      <Canvas className={props.darkMode ? css.show : css.hidden}>
        <Suspense fallback={null}>
          <Skull />
        </Suspense>
      </Canvas>

      {/* about me section */}

      <section className={props.darkMode ? css.text_dark : css.text_light}>
        <h1>Jacob Dunbar</h1>
        <h2>Web Developer</h2>
        {/* <p>
          My name is Jacob, and I am a code addict. My weapons of choice
          include:
        </p>
        <div className={css.devicons}>
          <img
            className={css.icon}
            src={props.darkMode ? gitIcon_dark : gitIcon}
            alt="git"
          />
          <img
            className={css.icon}
            src={props.darkMode ? reactIcon_dark : reactIcon}
            alt="react"
          />
          <img
            className={css.icon}
            src={props.darkMode ? nextjsIcon_dark : nextjsIcon}
            alt="nextjs"
          />
          <img
            className={css.icon}
            src={props.darkMode ? sassIcon_dark : sassIcon}
            alt="sass"
          />
          <img
            className={css.icon}
            src={props.darkMode ? threejsIcon_dark : threejsIcon}
            alt="threejs"
          />
          <img
            className={css.icon}
            src={props.darkMode ? blenderIcon_dark : blenderIcon}
            alt="blender"
          />

          <img
            className={css.icon}
            src={props.darkMode ? figmaIcon_dark : figmaIcon}
            alt="figma"
          />
        </div> */}
        <p>
          My name is Jacob and I am a front end / web developer. I have a
          background in illustration, UX design and set building and am
          passionate about crafting engaging online experiences.
        </p>
      </section>
      <div className={css.buttons}>
        <button
          onClick={() => props.scrollToSection(props.contactSection)}
          className={props.darkMode ? css.emailbtn_dark : css.emailbtn_light}
        >
          Email Me
          <img
            className={css.mail_icon}
            src={
              props.darkMode ? "/icons/mail_dark.svg" : "/icons/mail_light.svg"
            }
            alt="mail"
          />
        </button>
        <button
          className={
            props.darkMode ? css.linkedinbtn_dark : css.linkedinbtn_light
          }
        >
          <a href="https://github.com/Jacob-Dunbar">GitHub</a>
          <img
            className={css.github_icon}
            src={
              props.darkMode ? "/icons/github_dark.svg" : "/icons/github.svg"
            }
            alt="mail"
          />
        </button>
      </div>
    </div>
  );
}
