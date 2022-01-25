import React from "react";
import useFetch from "../Hooks/useFetch";
import styles from "./FeedModalItem.module.css";
const FeedModalItem = ({ data }) => {
  const urlDescriçao = data.pokemon.url;
  const urlIMG = data.sprites.front_default;
  const urlIMGshiny = data.sprites.front_shiny;
  const { request, dataFetch, loadingFetch } = useFetch();
  React.useEffect(() => {
    async function requestDescri() {
      const { json } = await request(urlDescriçao);
      console.log(json);
    }
    requestDescri();
  }, []);
  console.log(data);
  return (
    <div className={`${styles.modalItem} animeLeft`}>
      <div className={`${styles.img}`}>
        <div>
          <img src={urlIMG} alt={data.name} className="animeDown" />
        </div>
        <div>
          <img src={urlIMGshiny} alt={data.name} className="animeDown" />
        </div>
      </div>
      <div className={`${styles.descriçao} animeDown`}>
        <div className={styles.title}>
          <h1>
            N: {data.id} - {data.name.toUpperCase()}
          </h1>
        </div>
        <div className={styles.types}>
          <h2>Tipo:</h2>
          <div>
            {data.types.map((props) => {
              let nome = props.type.name;
              return <h2 id={nome}>{nome}</h2>;
            })}
          </div>
        </div>
        {dataFetch && (
          <div className={styles.abilitys}>
            <h2>Abilidades: </h2>
            <div>
              {dataFetch.abilities.map((ab) => {
                return <h3 key={ab.id}>{ab.ability.name}</h3>;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedModalItem;
