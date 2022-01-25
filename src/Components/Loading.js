import React from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={`${styles.loading} animeDown`}>
      <h1>Aguarde...</h1>
    </div>
  );
};

export default Loading;
