import { useEffect, useState } from "react";
import axios from "axios";
const newsApi = process.env.REACT_APP_API_BASE_URL;

export const UseNewsListFetch = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`${newsApi}/news`)
      .then((res) => {
        if (!res.data || !res.data.data) {
          throw new Error("沒有抓到資料");
        }
        setNewsList(res.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { newsList, loading, error };
};

export const UseCategoryNewsListFetch = (id) => {
  const [categoryNewsList, setCategoryNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    axios
      .get(`${newsApi}/news/category/${id}`)
      .then((res) => {
        if (!res.data || !res.data.data) {
          throw new Error("沒有抓到資料");
        }
        setCategoryNewsList(res.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return { categoryNewsList, loading, error };
};

export const UseCategoriesFetch = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`${newsApi}/category`)
      .then((res) => {
        if (!res.data || !res.data.data) {
          throw new Error("沒有抓到資料");
        }
        setCategories(res.data.data);
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { categories, loading, error };
};
