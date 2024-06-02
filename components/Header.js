import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Face from "./Face3";
import css from "../css/header.module.scss";
import Skull from "./Skull.js";

import ReactTooltip from "react-tooltip";

export default function ThreeHeader(props) {
  const devIcons = [
    "Javascript",
    "Vue.js",
    "Jest",
    "SASS",
    "Bootstrap",
    "Figma",
    "Next.js",
    "Three.js",
    "Blender",
  ];

  const stackElements = devIcons.map((item) => {
    return (
      <img
        src={props.darkMode ? `/icons/${item}_dark.svg` : `/icons/${item}.svg`}
        key={item}
        className={css.stack_item}
        data-tip={`${item}`}
      />
    );
  });

  return (
    <div className={css.home}>
      <ReactTooltip className={css.tooltip} />

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
      {/* about me section mobile */}
      <section
        className={
          props.darkMode ? css.text_dark_mobile : css.text_light_mobile
        }
      >
        <h1>Jacob Dunbar</h1>
        <h2>Web Developer</h2>
        <p className={css.z2}>
          My name is Jacob and I am a front end / web developer. I have a
          background in illustration, UX design and set building and am
          passionate about crafting engaging online experiences. My tools of
          choice include:
        </p>
        <div className={css.devicons}>{stackElements}</div>
      </section>
      {/* about me section desktop */}
      <div className={css.devicons_desktop}>{stackElements}</div>
      <section
        className={
          props.darkMode ? css.text_dark_desktop : css.text_light_desktop
        }
      >
        <h1>Jacob Dunbar</h1>
        <h2>Frontend Developer</h2>
        <p className={css.z1}>
          Frontend Developer with 2 years experience, currently working for
          AnyTask.com as Frontend Devoper and Designer. I am passionate about
          creating engaging online experiences with the following tools:
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
          <a
            href="https://github.com/Jacob-Dunbar"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
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
