import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Face from "./Face2.js";
import css from "../css/header.module.scss";
import Skull from "./Skull.js";

export default function ThreeHeader(props) {
  return (
    <div className={css.home}>
      {/* foreground blobs */}

      <div className={css.blob_container}>
        <img
          className={css.blob1_light}
          src={props.darkMode ? "/blobs/blob1_d.svg" : "/blobs/blob1_l.svg"}
          alt="forground blobs"
        />
        <div
          className={props.darkMode ? css.blob2_dark : css.blob2_light}
        ></div>
      </div>

      {/* light mode face model */}

      <Canvas className={!props.darkMode ? css.show : css.hidden}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />

          <spotLight
            intensity={0.7}
            angle={0.9}
            penumbra={1}
            position={[10, 80, 160]}
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus,
          curabitur ornare etiam scelerisque fames mauris donec rhoncus. Erat
          lectus est nisl eget tellus egestas enim massa. Morbi amet sit
          pretium, sit.
        </p>
        <p>
          Tellus, curabitur ornare etiam scelerisque fames mauris donec rhoncus.
          Erat lectus est nisl eget tellus egestas enim
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
            alt=""
          />
        </button>
        <button
          className={
            props.darkMode ? css.linkedinbtn_dark : css.linkedinbtn_light
          }
        >
          <a href="https://uk.linkedin.com/in/jacobdunbar111?trk=people-guest_people_search-card">
            LinkedIn
          </a>
          <img
            className={css.linkedin_icon}
            src={
              props.darkMode
                ? "/icons/linkedin_dark.svg"
                : "/icons/linkedin_light.svg"
            }
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
