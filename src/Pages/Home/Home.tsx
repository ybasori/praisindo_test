import React from "react";
import styles from "./Home.module.scss";
import SearchArticle from "../../Components/Organisms/SearchArticle/SearchArticle";

const Home = () => {
  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className={styles["container"]}>
      <SearchArticle />
      <div className={styles["to-top-btn"]} onClick={toTop}>
        <i className="fas fa-chevron-up"></i>
      </div>
    </div>
  );
};

export default Home;
