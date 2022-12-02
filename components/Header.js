import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Face from "./Face3";
import css from "../css/header.module.scss";
import Skull from "./Skull.js";

import ReactTooltip from "react-tooltip";

export default function ThreeHeader(props) {
  const javascriptIcon = "/icons/javascript.svg";
  const nextjsIcon = "/icons/nextjs.svg";
  const reactIcon = "/icons/react.svg";
  const sassIcon = "/icons/sass.svg";
  const tailwindIcon = "/icons/tailwind.svg";
  const threejsIcon = "/icons/threejs.svg";
  const blenderIcon = "/icons/blender.svg";
  const figmaIcon = "/icons/figma.svg";
  const gitIcon = "/icons/git.svg";

  const javascriptIcon_dark = "/icons/javascript_dark.svg";
  const nextjsIcon_dark = "/icons/nextjs_dark.svg";
  const reactIcon_dark = "/icons/react_dark.svg";
  const sassIcon_dark = "/icons/sass_dark.svg";
  const tailwindIcon_dark = "/icons/tailwind_dark.svg";
  const threejsIcon_dark = "/icons/threejs_dark.svg";
  const blenderIcon_dark = "/icons/blender_dark.svg";
  const figmaIcon_dark = "/icons/figma_dark.svg";
  const gitIcon_dark = "/icons/git_dark.svg";

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
        <div className={css.devicons}>
          <img
            src={props.darkMode ? gitIcon_dark : gitIcon}
            className={css.stack_item}
            data-tip="git"
          />
          <img
            src={props.darkMode ? reactIcon_dark : reactIcon}
            className={css.stack_item}
            data-tip="React"
          />
          <img
            src={props.darkMode ? nextjsIcon_dark : nextjsIcon}
            className={css.stack_item}
            data-tip="Next.js"
          />
          <img
            src={props.darkMode ? sassIcon_dark : sassIcon}
            className={css.stack_item}
            data-tip="Sass"
          />
          <img
            src={props.darkMode ? tailwindIcon_dark : tailwindIcon}
            className={css.stack_item}
            data-tip="Tailwind"
          />
          <img
            src={props.darkMode ? threejsIcon_dark : threejsIcon}
            className={css.stack_item}
            data-tip="Three.js"
          />
          <img
            src={props.darkMode ? blenderIcon_dark : blenderIcon}
            className={css.stack_item}
            data-tip="Blender 3D"
          />
          <img
            src={props.darkMode ? javascriptIcon_dark : javascriptIcon}
            className={css.stack_item}
            data-tip="Javascript"
          />

          <img
            src={props.darkMode ? figmaIcon_dark : figmaIcon}
            className={css.stack_item}
            data-tip="Figma"
          />
        </div>
      </section>
      {/* about me section desktop */}
      <div className={css.devicons_desktop}>
        <img
          src={props.darkMode ? gitIcon_dark : gitIcon}
          className={css.stack_item}
          data-tip="git"
        />
        <img
          src={props.darkMode ? reactIcon_dark : reactIcon}
          className={css.stack_item}
          data-tip="React"
        />
        <img
          src={props.darkMode ? nextjsIcon_dark : nextjsIcon}
          className={css.stack_item}
          data-tip="Next.js"
        />
        <img
          src={props.darkMode ? sassIcon_dark : sassIcon}
          className={css.stack_item}
          data-tip="Sass"
        />
        <img
          src={props.darkMode ? tailwindIcon_dark : tailwindIcon}
          className={css.stack_item}
          data-tip="Tailwind"
        />
        <img
          src={props.darkMode ? threejsIcon_dark : threejsIcon}
          className={css.stack_item}
          data-tip="Three.js"
        />
        <img
          src={props.darkMode ? blenderIcon_dark : blenderIcon}
          className={css.stack_item}
          data-tip="Blender 3D"
        />
        <img
          src={props.darkMode ? javascriptIcon_dark : javascriptIcon}
          className={css.stack_item}
          data-tip="Javascript"
        />

        <img
          src={props.darkMode ? figmaIcon_dark : figmaIcon}
          className={css.stack_item}
          data-tip="Figma"
        />
      </div>
      <section
        className={
          props.darkMode ? css.text_dark_desktop : css.text_light_desktop
        }
      >
        <h1>Jacob Dunbar</h1>
        <h2>Web Developer</h2>
        <p className={css.z1}>
          My name is Jacob and I am a front end / web developer. I have a
          background in illustration, UX design and set building and am
          passionate about crafting engaging online experiences. My tools of
          choice include:
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
