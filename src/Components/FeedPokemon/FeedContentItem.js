import React from "react";
import useFetch from "../Hooks/useFetch";
import Loading from "../Loading";
import styles from "./FeedContentItem.module.css";
const FeedContent = ({ url, id, urlShiny, setModalActive }) => {
  const { request, dataFetch, loadingFetch } = useFetch();
  async function handleClick({ currentTarget }) {
    const fetchID = currentTarget.dataset.fetch;
    const { json } = await request(
      `https://pokeapi.co/api/v2/pokemon-form/${fetchID}`
    );
    setModalActive(json);
  }
  return (
    <div className={`${styles.container}`}>
      {loadingFetch && <Loading />}
      <div
        className={`${styles.contentItem}`}
        data-fetch={id}
        onClick={handleClick}
      >
        <img src={url} alt={id} />
      </div>
      <div className={styles.contentItemShiny}>
        <img src={urlShiny} alt={id} />
      </div>
    </div>
  );
};

export default FeedContent;
