import React from "react";
import styles from "./ArticleItem.module.scss";
import { ConvDateMDY } from "../../../Common/Utils/Utils";

const ArticleItem: React.FC<{
  title: string;
  author: string;
  publishDate: string;
  headline: string;
  url: string;
}> = ({ title, author, publishDate, headline, url }) => {
  return (
    <div className={styles["container"]}>
      <a target="_blank" rel="noreferrer" href={url}>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["author"]}>{author}</div>
        <div className={styles["date"]}>{ConvDateMDY(publishDate)}</div>
        <div className={styles["headline"]}>{headline}</div>
      </a>
    </div>
  );
};

export default ArticleItem;
