import React from "react";
import { NavLink } from "react-router-dom";

export const Vacancies = () => {
  return (
    <div className="wrap_vacancies">
      <div className="vacancies">
        <p className="txt_about1Title second_title" id='vac1'>Вакансии</p>
        <div className="wrap_each_vacancy">
          <NavLink to="/about/1" className="each_vacancy">
            <div className="wrap_vacancy_txt">
              <p className="name_of">Название вакансии 1</p>
              <p className="lastname_of">
                {" "}
                Здесь представлен текст из начала описания вакансии 1. Текст
                представлен несколькими предложениями из начала описания
                вакансии
              </p>
            </div>
            <p className="date_vacancy">12 июля 2023</p>
          </NavLink>
          <NavLink to="/about/2" className="each_vacancy">
            <div className="wrap_vacancy_txt">
              <p className="name_of">Название вакансии 2</p>
              <p className="lastname_of">
                {" "}
                Здесь представлен текст из начала описания вакансии 2. Текст
                представлен несколькими предложениями из начала описания
                вакансии
              </p>
            </div>
            <p className="date_vacancy">12 июля 2023</p>
          </NavLink>
          <NavLink to="/about/3" className="each_vacancy">
            <div className="wrap_vacancy_txt">
              <p className="name_of">Название вакансии 3</p>
              <p className="lastname_of">
                {" "}
                Здесь представлен текст из начала описания вакансии 3. Текст
                представлен несколькими предложениями из начала описания
                вакансии
              </p>
            </div>
            <p className="date_vacancy">12 июля 2023</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
