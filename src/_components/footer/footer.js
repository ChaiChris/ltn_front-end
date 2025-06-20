import styles from "./footer.module.scss";
export default function Footer() {
  return (
    <>
      <footer className={styles["art_footer"]} data-desc="底部選單">
        <a href="https://www.ltn.com.tw/" data-desc="logo" title="logo">
          <img
            src="https://cache.ltn.com.tw/images/logo_foot.png"
            title="logo"
            alt="logo"
          />
        </a>
        <p>
          自由時報版權所有不得轉載{" "}
          <span>
            © 2024 The Liberty Times. All Rights Reserved.
            <span />
          </span>
        </p>
      </footer>
    </>
  );
}
