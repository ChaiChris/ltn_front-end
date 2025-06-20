import styles from "./categoryBar.module.scss";
import { UseCategoriesFetch } from "../../hooks/useFetch";

export default function CategoryBar({ selectedCategory, onSelectCategory }) {
  // 使用 hook 抓取 category 資料
  const { categories, loading, error } = UseCategoriesFetch();

  //載入中
  if (loading) {
    return (
      <li>
        <span className={styles["atag"]}>載入中</span>
      </li>
    );
  }

  //若有錯誤則顯示
  if (error) {
    return (
      <div style={{ width: "100%", height: 50, backgroundColor: "#CD3160" }}>
        <li>
          <span className={styles["atag"]}>
            無法抓取Tab資料: {error.message}
          </span>
        </li>
      </div>
    );
  }

  return (
    <>
      <div style={{ width: "100%", height: 50, backgroundColor: "#CD3160" }}>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: 325,
          }}
        >
          <li
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              onSelectCategory(null);
            }}
          >
            {/* 總覽 */}
            <span title="總覽" className={styles["atag"]}>
              總覽
            </span>
          </li>
          {/* 資料庫 category */}
          {(categories || []).map((category) => (
            <li
              key={category.id}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                onSelectCategory(category.id);
              }}
            >
              <span title={category.name} className={styles["atag"]}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
