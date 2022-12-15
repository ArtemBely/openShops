import React from "react";
const fone = "../../../images/Rectangle 856-3-2.png";

export const AboutScreen = () => {
  return (
    <div className="wrap_aboutScreen">
      <div className="aboutScreen">
        <p className="about_title">
          Новые подходы к развитию технологий, которые создают комфортные
          условия для жизни
        </p>
        <img src={fone} />
      </div>
    </div>
  );
};
