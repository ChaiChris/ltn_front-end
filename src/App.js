import "./App.css";
import { useState } from "react";
import Header from "./_components/header/header";
import CategoryBar from "./_components/categoryBar/categoryBar";
import NewsContent from "./_components/newsContent/newsContent";
import Footer from "./_components/footer/footer";

function App() {
  // Tab狀態
  const [selectedCategory, setSelectedCategory] = useState(null);
  // console.log("Selected Category:", selectedCategory);
  return (
    <>
      <Header />
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="main-content">
        <NewsContent selectedCategory={selectedCategory} />
      </div>
      <Footer />
    </>
  );
}

export default App;
