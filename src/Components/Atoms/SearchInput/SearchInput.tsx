import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { AppDispatch } from "../../../Redux/store";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../../Redux/NyTimes/NyTimes.reducer";

const SearchInput = () => {
  const dispatch: AppDispatch = useDispatch();
  const [form, setForm] = useState({ keyword: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setKeyword(form.keyword));
  };
  return (
    <form className={styles["container"]} onSubmit={onSubmit}>
      <input
        autoComplete="off"
        className={styles["input"]}
        value={form.keyword}
        name="keyword"
        onChange={(e) =>
          setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
        }
      />
      <button className={styles["btn"]}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchInput;
