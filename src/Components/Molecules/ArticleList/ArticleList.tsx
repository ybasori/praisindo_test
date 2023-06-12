import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getSearchArticles } from "../../../Redux/NyTimes/NyTimes.thunk";
import styles from "./ArticleList.module.scss";
import ArticleItem from "../../Atoms/ArticleItem/ArticleItem";
import { loadMore } from "../../../Redux/NyTimes/NyTimes.reducer";

const ArticleList = () => {
  const dispatch: AppDispatch = useDispatch();
  const nyTimesState = useSelector((state: RootState) => state.nyTimes);

  useEffect(() => {
    dispatch(
      getSearchArticles({
        keyword: nyTimesState.keyword,
        page: nyTimesState.page,
      })
    );
  }, [dispatch, nyTimesState.keyword, nyTimesState.page]);

  const onLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <div className={styles["container"]}>
      {nyTimesState.loadingArticles && nyTimesState.articles === null ? (
        <div className={styles["loading"]}>
          <i className="fas fa-circle-notch fa-spin"></i>
        </div>
      ) : (
        <>
          {nyTimesState.articles && nyTimesState.articles.length > 0 ? (
            <>
              {nyTimesState.articles.map((item, index) => (
                <div key={index} className={styles["article"]}>
                  <ArticleItem
                    title={item.abstract}
                    author={item.byline.original}
                    publishDate={item.pub_date}
                    headline={item.lead_paragraph}
                  />
                </div>
              ))}
              <div
                className={`${styles["load-more"]} ${styles["is-loading"]}`}
                onClick={() =>
                  nyTimesState.loadingArticles ? null : onLoadMore()
                }
              >
                {nyTimesState.loadingArticles ? (
                  <i className="fas fa-circle-notch fa-spin"></i>
                ) : (
                  "Load More"
                )}
              </div>
            </>
          ) : (
            <>No Data</>
          )}
        </>
      )}
    </div>
  );
};

export default ArticleList;
