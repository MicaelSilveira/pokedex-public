import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../assets/Pokedex.svg";
import HeaderMenu from "./HeaderMenu";
const Header = ({ menuActive, setMenuActive, setFeedList }) => {
  function HandleClick({ target }) {
    target.classList.toggle("buttonActive");
    setMenuActive((state) => !state);
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIMG}>
          <Image src={logo} />
        </div>
        <h1>Pokedex</h1>
      </div>
      <div className={styles.buttonContainer} onClick={HandleClick}>
        <button className={`${styles.buttonMenu}`}></button>
      </div>
      {menuActive && <HeaderMenu setFeedList={setFeedList} />}
    </header>
  );
};

export default Header;
