import React from "react";
import css from "../css/background.module.scss";

function Background(props) {
  return (
    <div
      className={props.darkMode ? css.background_dark : css.background_light}
    >
      <img
        className={css.blob1}
        src={props.darkMode ? "/blobs/blob1_d.svg" : "/blobs/blob1_l.svg"}
        alt="blob1"
      />
      <img
        className={css.blob2}
        src={props.darkMode ? "/blobs/blob2_d.svg" : "/blobs/blob2_l.svg"}
        alt="blob2"
      />
      <img
        className={css.blob3}
        src={props.darkMode ? "/blobs/blob3_d.svg" : "/blobs/blob3_l.svg"}
        alt="blob3"
      />
      <img
        className={css.blob4}
        src={props.darkMode ? "/blobs/blob1_d.svg" : "/blobs/blob1_l.svg"}
        alt="blob4"
      />
      <img
        className={css.blob5}
        src={props.darkMode ? "/blobs/blob2_d.svg" : "/blobs/blob2_l.svg"}
        alt="blob5"
      />
    </div>
  );
}

export default Background;
