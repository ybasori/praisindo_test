import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const getSearchArticles = createAsyncThunk(
  "nytimes/getSearchArticles",
  async (params: { keyword: string; page: number }, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.keyword}&page=${params.page}&api-key=ZGqCpxsW3GdyZLrbab2ptTuK14xhb9cX`,
        method: "GET",
      });
      return result;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response);
      }
      return rejectWithValue(err);
    }
  }
);
