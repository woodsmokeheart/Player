import React from "react";
import css from "./FileLoader.module.scss";

const FileLoader = () => {
  return (
    <div className={css.loader}>
      <div className={css.animationWrapper}>
        <div className={css.letter}>P</div>
        <div className={css.letter}>L</div>
        <div className={css.letter}>A</div>
        <div className={css.letter}>Y</div>
        <div className={css.letter}>E</div>
        <div className={css.letter}>R</div>
      </div>
      <span className={css.text}>waiting for download</span>
    </div>
  );
};

export default FileLoader;
