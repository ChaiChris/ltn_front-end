import styles from "./newsCard.module.scss";
export default function NewsCard({ title, imageUrl, url }) {
  // 資料不齊全則不顯示
  if (!title || !imageUrl || !url) {
    return null;
  }
  const handleClick = () => {
    if (url) {
      // 外部連結跳轉
      window.location.href = url;
    }
  };
  return (
    <div className={styles["news-card"]}>
      {/* 卡片圖片 */}
      <img
        src={imageUrl}
        alt={`${title}.image`}
        className={styles["news-card-img"]}
        onClick={handleClick}
      />
      <div className={styles["news-card-body"]}>
        {/* 卡片標題 */}
        <p className={styles["news-card-title"]} onClick={handleClick}>
          {title}
        </p>
      </div>
    </div>
  );
}
