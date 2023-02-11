import React, { useEffect, useState } from "react";
import { Buildings } from "./Buildings";

export const Filtr = () => {
  const [searchInput, setSearchInput] = useState(" ");
  const [category, setCategory] = useState("Все проекты");

  const changeFiltr = (e: any, category: string) => {
    setCategory(category);
    document.querySelectorAll(".each_category").forEach((item) => {
      item.classList.remove("choosenCategory");
    });
    e.target.classList.add("choosenCategory");
  };

  useEffect(() => {
    if (localStorage.getItem("category") !== null) {
      setCategory(String(localStorage.getItem("category")));
    }
  }, []);

  return (
    <div className="wrap_aboutProject">
      <div className="nested_wrap_aboutProject">
        <div id="project_title">
          <p className="about_title spec_about_title" id="project_spec">
            Проектируем пространства 
          </p>
          <p className="about_title spec_about_title" id="project_spec_txt">
            для жизни, работы и творчества
          </p>
        </div>
        <input
          type="text"
          id="inputSearch"
          placeholder="Поиск"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="aboutProject">
          <div className="wrap_allCategory">
            <p
              className={`each_category ${
                category === "Все проекты" ? "choosenCategory" : ""
              }`}
              onClick={() => setCategory("Все проекты")}
            >
              Все проекты
            </p>
            <p
              className={`each_category ${
                category === "Жилые комплексы" ? "choosenCategory" : ""
              }`}
              onClick={() => setCategory("Жилые комплексы")}
            >
              Жилые комплексы
            </p>
            <p
              className={`each_category ${
                category === "Общественно-деловые комплексы"
                  ? "choosenCategory"
                  : ""
              }`}
              onClick={() => setCategory("Общественно-деловые комплексы")}
            >
              Общественно-деловые комплексы
            </p>
            <p
              className={`each_category ${
                category === "Гостиничные комплексы" ? "choosenCategory" : ""
              }`}
              onClick={() => setCategory("Гостиничные комплексы")}
            >
              Гостиничные комплексы
            </p>
            <p
              className={`each_category ${
                category === "Градостроительные концепции"
                  ? "choosenCategory"
                  : ""
              }`}
              onClick={() => setCategory("Градостроительные концепции")}
            >
              Градостроительные концепции
            </p>
            <p
              className={`each_category ${
                category === "Развлекательные комплексы"
                  ? "choosenCategory"
                  : ""
              }`}
              onClick={() => setCategory("Развлекательные комплексы")}
            >
              Развлекательные комплексы
            </p>
            <p
              className={`each_category ${
                category === "Конкурсы" ? "choosenCategory" : ""
              }`}
              onClick={() => setCategory("Конкурсы")}
            >
              Конкурсы
            </p>
            <p
              className={`each_category ${
                category === "Интерьеры" ? "choosenCategory" : ""
              }`}
              onClick={() => setCategory("Интерьеры")}
            >
              Интерьеры
            </p>
          </div>
        </div>
      </div>
      <Buildings searchInput={searchInput} selectedCategory={category} />
    </div>
  );
};
