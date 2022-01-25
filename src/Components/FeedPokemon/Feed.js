import React from "react";
import styles from "./Feed.module.css";
import FeedContent from "./FeedContentItem";
import FeedModal from "./FeedModal";
const Feed = ({ state }) => {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
  const urlShiny =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png";
  const listPoke = [];
  const listPokeShiny = [];
  for (let i = state.inicio; i < state.final; i++) {
    listPoke[i] = url.replace("1", i);
    listPokeShiny[i] = urlShiny.replace("1", i);
  }
  const [modalActive, setModalActive] = React.useState(null);
  return (
    <>
      <div className={`${styles.feed}`}>
        {modalActive && (
          <FeedModal data={modalActive} setModalActive={setModalActive} />
        )}
        <div className={styles.descri}>
          <div className={styles.normal}>
            <h1>Normal</h1>
          </div>
          <div className={styles.shiny}>
            <h1>Shiny</h1>
          </div>
        </div>
        <div>
          {listPoke.map((url, index) => {
            let id = url.split("/")[8].replace(".png", "");
            return (
              <FeedContent
                url={url}
                key={id}
                id={id}
                urlShiny={listPokeShiny[index]}
                setModalActive={setModalActive}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Feed;
