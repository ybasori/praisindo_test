interface IArticle {
  abstract: string;
  byline: { original: string };
  pub_date: string;
  lead_paragraph: string;
  web_url: string;
}

export interface INytimes {
  keyword: string;
  prevKeyword: string;
  articles: null | IArticle[];
  loadingArticles: boolean;
  page: number;
}
