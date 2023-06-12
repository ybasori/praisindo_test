import { createSlice } from "@reduxjs/toolkit";
import { getSearchArticles } from "./NyTimes.thunk";
import { INytimes } from "./NyTimes.type";

const initialState: INytimes = {
  keyword: "",
  articles: null,
  loadingArticles: false,
  page: 0,
  prevKeyword: "",
};

export const nytimesSlice = createSlice({
  name: "nytimes",
  initialState,
  reducers: {
    setKeyword: (state: INytimes, { payload }) => {
      state.prevKeyword = state.keyword;
      state.keyword = payload;
    },
    loadMore: (state: INytimes) => {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchArticles.pending, (state) => {
        if (state.keyword !== state.prevKeyword) {
          state.articles = null;
          state.prevKeyword = state.keyword;
        }
        state.loadingArticles = true;
      })
      .addCase(getSearchArticles.fulfilled, (state, { payload }) => {
        if (state.articles) {
          state.articles = [...state.articles, ...payload.data.response.docs];
        } else {
          state.articles = payload.data.response.docs;
        }
        state.loadingArticles = false;
      })
      .addCase(getSearchArticles.rejected, (state, { payload }) => {
        state.articles = null;
        state.loadingArticles = false;
      });
  },
});

export const { setKeyword, loadMore } = nytimesSlice.actions;

export default nytimesSlice.reducer;
