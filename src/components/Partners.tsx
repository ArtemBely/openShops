import React from "react";
const partner1 = "../../images/Group 400.svg";
const partner2 = "../../images/Group 401.svg";
const partner3 = "../../images/Group 402.svg";
const partner4 = "../../images/Group 403.svg";

export const Partners = () => {
  return (
    <div className="wrap_partners">
      <div className="partners">
        <p className="big_title_main" id="big_title_mainId">
          Партнеры
        </p>
        <a href="https://gk-osnova.ru/" className="partners_links">
          <img src={partner1} />
        </a>
        <a href="https://www.speech.su/ru" className="partners_links">
          <img src={partner2} />
        </a>
      </div>
    </div>
  );
};
