import React, { useState } from "react";
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
              className="each_category choosenCategory"
              onClick={(e) => changeFiltr(e, "Все проекты")}
            >
              Все проекты
            </p>
            <p
              className="each_category"
              onClick={(e) => changeFiltr(e, "Жилые комплексы")}
            >
              Жилые комплексы
            </p>
            <p
              className="each_category"
              onClick={(e) => changeFiltr(e, "Общественно-деловые комплексы")}
            >
              Общественно-деловые комплексы
            </p>
            <p
              className="each_category"
              onClick={(e) => changeFiltr(e, "Гостиничные комплексы")}
            >
              Гостиничные комплексы
            </p>
            <p
              className="each_category"
              onClick={(e) => changeFiltr(e, "Градостроительные концепции")}
            >
              Градостроительные концепции
            </p>
            <p
              className="each_category"
              onClick={(e) => changeFiltr(e, "Развлекательные комплексы")}
            >
              Развлекательные комплексы
            </p>
            <p
              className="each_category"
              onClick={(e) => changeFiltr(e, "Конкурсы")}
            >
              Конкурсы
            </p>
            <p
              className="each_category"
              onClick={(e) => changeFiltr(e, "Интерьеры")}
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
