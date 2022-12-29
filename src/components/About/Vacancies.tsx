import React, { useEffect, useState } from "react";

import { IVacancy } from "../../server/models/vacancy";

let vacancies: IVacancy[];

declare global {
  interface Window {
    __INITIAL_VACANCIES__: IVacancy[];
  }
}

export const Vacancies = () => {
  if (typeof window != "undefined") {
    vacancies = window.__INITIAL_VACANCIES__;
  }

  const [allVacancies, setAllVacancies] = useState<IVacancy[]>([
    {} as IVacancy,
  ]);

  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.location.pathname.split("/").pop() == "about") {
        setAllVacancies(vacancies);
      }
    }
  });

  return (
    <div className="wrap_vacancies">
      <div className="vacancies">
        <p className="txt_about1Title second_title" id="vac1">
          Вакансии
        </p>
        <div className="wrap_each_vacancy">
          {allVacancies.map((vacancy) => (
            <a
              key={vacancy._id}
              href={`/about/${vacancy._id}`}
              className="each_vacancy"
            >
              <div className="wrap_vacancy_txt">
                <p className="name_of">{vacancy.title}</p>
                <p className="lastname_of">{vacancy.description}</p>
              </div>
              <p className="date_vacancy">{vacancy.tag}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
