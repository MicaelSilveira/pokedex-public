import Header from "../src/Components/Header";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component }) {
  const [menuActive, setMenuActive] = React.useState(false);
  const [FeedList, setFeedList] = React.useState({ inicio: 1, final: 100 });
  return (
    <>
      <Header
        setMenuActive={setMenuActive}
        menuActive={menuActive}
        setFeedList={setFeedList}
      />
      <Component FeedList={FeedList} setFeedList={setFeedList} />
    </>
  );
}

export default MyApp;
