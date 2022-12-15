import React from "react";
import { Buildings } from "./Buildings";

export const Filtr = () => {
  const changeFiltr = (e: any) => {
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
        <input type="text" id="inputSearch" placeholder="Поиск" />
        <div className="aboutProject">
          <div className="wrap_allCategory">
            <p className="each_category choosenCategory" onClick={changeFiltr}>
              Все проекты
            </p>
            <p className="each_category" onClick={changeFiltr}>
              Жилые комплексы
            </p>
            <p className="each_category" onClick={changeFiltr}>
              Общественно-деловые комплексы
            </p>
            <p className="each_category" onClick={changeFiltr}>
              Гостиничные комплексы
            </p>
            <p className="each_category" onClick={changeFiltr}>
              Градостроительные концепции
            </p>
            <p className="each_category" onClick={changeFiltr}>
              Развлекательные комплексы
            </p>
            <p className="each_category" onClick={changeFiltr}>
              Конкурсы
            </p>
            <p className="each_category" onClick={changeFiltr}>
              Интерьеры
            </p>
          </div>
        </div>
      </div>
      <Buildings />
    </div>
  );
};
