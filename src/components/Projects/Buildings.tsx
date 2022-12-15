import React from "react";
import { NavLink } from "react-router-dom";

const uno = "../../../images/projects/uno_main.jpg";
const fone1 = "../../../images/Rectangle 1-2.png";
const fone2 = "../../../images/Rectangle 2-2.png";
const fone3 = "../../../images/Frame 483-2.png";
const fone4 = "../../../images/Rectangle 4-2.png";
const fone5 = "../../../images/Rectangle 1-2-2.png";

const build2 = "../../../images/projects/buildings/2.jpg";
const build3 = "../../../images/projects/buildings/3.png";
const build4 = "../../../images/projects/buildings/4.png";
const build5 = "../../../images/projects/buildings/5.png";
const build6 = "../../../images/projects/buildings/6.jpg";

export const Buildings = () => {
  return (
    <div className="wrap_buildings_inside">
      <div className="buildings_inside">
        <NavLink to="/projects/1" className="wrap_each_object">
          <img src={uno} className="each_project_img" />
          <div className="wrap_objectInfo ">
            <p className="common_addressObject">г.Москва</p>
            <p className="common_titleObject">ЖК UNO Старокоптевский</p>
          </div>
        </NavLink>
        <NavLink to="/projects/1" className="wrap_each_object">
          <img src={build2} className="each_project_img" />
          <div className="wrap_objectInfo ">
            <p className="common_addressObject">г.о. Люберцы</p>
            <p className="common_titleObject">
              ЖК Гоголь парк Корпуса К-1, К-2
            </p>
          </div>
        </NavLink>
        <NavLink to="/projects/1" className="wrap_each_object">
          <img src={build3} className="each_project_img" />
          <div className="wrap_objectInfo ">
            <p className="common_addressObject">Красногорский район</p>
            <p className="common_titleObject">Школа на 840 учащихся</p>
          </div>
        </NavLink>
        <NavLink to="/projects/1" className="wrap_each_object">
          <img src={build4} className="each_project_img" />
          <div className="wrap_objectInfo ">
            <p className="common_addressObject">г.Москва</p>
            <p className="common_titleObject">Досуговый центр</p>
          </div>
        </NavLink>
        <NavLink to="/projects/1" className="wrap_each_object">
          <img src={build5} className="each_project_img" />
          <div className="wrap_objectInfo ">
            <p className="common_addressObject">г. Москва</p>
            <p className="common_titleObject">ЖК ФизтехСИТИ</p>
          </div>
        </NavLink>
        <NavLink to="/projects/1" className="wrap_each_object">
          <img src={build6} className="each_project_img" />
          <div className="wrap_objectInfo ">
            <p className="common_addressObject">г. Люберцы</p>
            <p className="common_titleObject">ЖК Гоголь парк</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
