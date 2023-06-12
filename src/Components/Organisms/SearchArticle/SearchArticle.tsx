import React from "react";
import styles from "./SearchArticle.module.scss";
import SearchInput from "../../Atoms/SearchInput/SearchInput";
import ArticleList from "../../Molecules/ArticleList/ArticleList";

const SearchArticle = () => {
  return (
    <>
      <div className={styles["container"]}>
        <SearchInput />
        <div className={styles["artilce-list"]}>
          <ArticleList />
        </div>
      </div>
    </>
  );
};

export default SearchArticle;
