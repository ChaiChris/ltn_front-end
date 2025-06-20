import styles from "./newsContent.module.scss";
import {
  UseNewsListFetch,
  UseCategoryNewsListFetch,
} from "../../hooks/useFetch";
import NewsCard from "./newsCard";

export default function NewsContent({ selectedCategory }) {
  //取所有新聞hook
  const {
    newsList,
    loading: newsLoading,
    error: newsError,
  } = UseNewsListFetch();

  //取特定類別新聞hook
  const {
    categoryNewsList,
    loading: categoryLoading,
    error: categoryError,
  } = UseCategoryNewsListFetch(selectedCategory);

  // 判斷 selectedCategory 並使用目前的 state
  const isLoading = selectedCategory ? categoryLoading : newsLoading;
  const currentError = selectedCategory ? categoryError : newsError;
  const newsToDisplay = selectedCategory ? categoryNewsList : newsList;

  //載入中
  if (isLoading) {
    return <div className={styles["news-card-container"]}></div>;
  }

  //若有錯誤則顯示
  if (currentError) {
    return (
      <div className={styles["news-card-container"]}>
        <p> 無法抓取新聞資料: {currentError.message}</p>
      </div>
    );
  }

  return (
    <div className={styles["news-card-container"]}>
      {/* 依筆數生成卡片 */}
      {(newsToDisplay || []).map((news) => (
        <NewsCard
          key={news.id}
          title={news.title}
          imageUrl={news.image_url}
          url={news.article_url}
        />
      ))}
    </div>
  );
}
