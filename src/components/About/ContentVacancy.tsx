import React, { useEffect, useState } from "react";

import { IVacancy } from "../../server/models/vacancy";

let vacancy: IVacancy;

declare global {
  interface Window {
    __INITIAL_VACANCY__: IVacancy;
  }
}

export const ContentVacancy = () => {
  if (typeof window != "undefined") {
    vacancy = window.__INITIAL_VACANCY__;
  }

  const [currentVacancy, setCurrentVacancy] = useState<IVacancy>(
    {} as IVacancy
  );

  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.location.pathname.split("/").pop() == vacancy._id) {
        setCurrentVacancy(vacancy);
      }
    }
  });

  useEffect(() => {
    if (typeof window != "undefined") {
      window.scrollTo(0, 0);
    }
  });

  return (
    <div className="wrap_contentVacancy">
      <div className="contentVacancy">
        <p className="txt_about1Title spec_txt_about1Title">
          {currentVacancy.title}
        </p>
        <img src={`../../../uploads/${currentVacancy.noExchangeFile}`} />
        <p className="descr_of_vacs">Описание вакансии</p>
        <div className="txt_vacancy main_txt">
          <p className="txt_vacancy spec_descr">{currentVacancy.description}</p>
        </div>
        <div className="wrap_txtVacs">
          <p className="bold_vacancy">Наименование вакансии</p>
          <p className="txt_vacancy">{currentVacancy.title}</p>
          <p className="bold_vacancy">Aдрес</p>
          <p className="txt_vacancy">{currentVacancy.tag}</p>
        </div>
      </div>
    </div>
  );
};
