import React from "react";
import { NavLink } from "react-router-dom";
const fone1 = "../../../images/Rectangle 14-4.png";
const fone2 = "../../../images/Rectangle 14-2-2.png";
const fone3 = "../../../images/Rectangle 14-3-2.png";

export const News = () => {
  return (
    <div className="wrap_buildings_inside">
      <div className="news_inside">
        <NavLink to="/news/1" className="wrap_each_news">
          <img src={fone1} className="each_news_img" />
          <div className="wrap_description_of_news">
            <p className="title_of_news">Название новости 1</p>
            <p className="description_of_news">
              Здесь представлен текст из начала описания новости 1. Текст
              представлен несколькими предложениями из начала описания новости
            </p>
          </div>
          <p className="date_style">12 июля 2023</p>
        </NavLink>
        <NavLink to="/news/2" className="wrap_each_news">
          <img src={fone2} className="each_news_img" />
          <div className="wrap_description_of_news">
            <p className="title_of_news">Название новости 2</p>
            <p className="description_of_news">
              Здесь представлен текст из начала описания новости 2. Текст
              представлен несколькими предложениями из начала описания новости
            </p>
          </div>
          <p className="date_style">12 июля 2023</p>
        </NavLink>
        <NavLink to="/news/3" className="wrap_each_news">
          <img src={fone3} className="each_news_img" />
          <div className="wrap_description_of_news">
            <p className="title_of_news">Название новости 3</p>
            <p className="description_of_news">
              Здесь представлен текст из начала описания новости 3. Текст
              представлен несколькими предложениями из начала описания новости
            </p>
          </div>
          <p className="date_style">12 июля 2023</p>
        </NavLink>
      </div>
    </div>
  );
};
