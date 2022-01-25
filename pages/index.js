import Feed from "../src/Components/FeedPokemon/Feed";
import styles from "../styles/Home.module.css";
import React from "react";
export default function Home({ FeedList }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Seja Bem vindo</h1>
      </div>
      <div className={styles.listPokes}>
        <Feed state={FeedList} />
      </div>
    </div>
  );
}
