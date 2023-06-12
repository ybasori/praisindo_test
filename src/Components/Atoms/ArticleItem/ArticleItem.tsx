import React from "react";
import styles from "./ArticleItem.module.scss";
import { ConvDateMDY } from "../../../Common/Utils/Utils";

const ArticleItem: React.FC<{
  title: string;
  author: string;
  publishDate: string;
  headline: string;
}> = ({ title, author, publishDate, headline }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>{title}</div>
      <div className={styles["author"]}>{author}</div>
      <div className={styles["date"]}>{ConvDateMDY(publishDate)}</div>
      <div className={styles["headline"]}>{headline}</div>
    </div>
  );
};

export default ArticleItem;
