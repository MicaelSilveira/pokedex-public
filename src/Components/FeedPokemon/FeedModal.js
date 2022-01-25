import React from "react";
import styles from "./FeedModal.module.css";
import FeedModalItem from "./FeedModalItem";
const FeedModal = ({ data, setModalActive }) => {
  function handleClick({ target, currentTarget }) {
    if (currentTarget === target) {
      setModalActive(null);
    }
  }
  console.log(data);
  return (
    <div className={styles.modal} onClick={handleClick}>
      <FeedModalItem data={data} />
    </div>
  );
};

export default FeedModal;
