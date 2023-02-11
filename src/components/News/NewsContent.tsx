import React, { FC } from "react";

import { INews } from "../../server/models/news";
const fone1 = "../../../images/Rectangle 14-5-2.png";

interface INewsContentProps {
  currentNews: INews;
}

export const NewsContent: FC<INewsContentProps> = ({ currentNews }) => {
  return (
    <div className="wrap_contentVacancy">
      <div className="contentVacancy">
        <p className="txt_about1Title">{currentNews.title}</p>
        <p className="date_style spec_data_style" id="spec_data_style_news">
          {currentNews.tag}
        </p>
        <img
          src={
            currentNews.noExchangeFile
              ? `../../../uploads/${currentNews.noExchangeFile}`
              : fone1
          }
        />
        <p className="descr_of_vacs">Описание новости</p>
        <div className="txt_vacancy main_txt">
          <p className="txt_vacancy">{currentNews.description}</p>
        </div>
      </div>
    </div>
  );
};
