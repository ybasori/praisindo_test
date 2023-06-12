interface IArticle {
  abstract: string;
  byline: { original: string };
  pub_date: string;
  lead_paragraph: string;
}

export interface INytimes {
  keyword: "";
  prevKeyword: "";
  articles: null | IArticle[];
  loadingArticles: boolean;
  page: number;
}
