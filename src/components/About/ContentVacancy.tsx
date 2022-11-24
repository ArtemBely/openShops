import React from "react";
const fone1 = "../../../images/Rectangle 14-4-2.png";

export const ContentVacancy = () => {

    return (
      <div className='wrap_contentVacancy'>
          <div className='contentVacancy'>
              <p className='txt_about1Title'>Название вакансии</p>
              <img src={fone1} />
              <p className='descr_of_vacs'>Описание вакансии</p>
              <p className='txt_vacancy main_txt'>Текст описания вакансии</p>
              <div className='wrap_txtVacs'>
                <p className='bold_vacancy'>Наименование вакансии</p>
                <p className='txt_vacancy'>Главный инженер</p>
              </div>
              <div className='wrap_txtVacs'>
                <p className='bold_vacancy'>Aдрес</p>
                <p className='txt_vacancy'>г. Моска, Мясницкая ул., вл. 41, стр. 6, 7</p>
              </div>
          </div>
      </div>
    )
}
