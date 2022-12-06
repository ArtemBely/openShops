import React from "react";
const fone1 = "../../../images/Rectangle 14-5-2.png";

export const NewsContent = () => {

    return (
      <div className='wrap_contentVacancy'>
          <div className='contentVacancy'>
              <p className='txt_about1Title'>Название новости</p>
              <p className='date_style spec_data_style' id='spec_data_style_news'>12 июля 2023</p>
              <img src={fone1} />
              <p className='descr_of_vacs'>Описание новости</p>
              <p className='txt_vacancy main_txt'>Описание новости</p>
          </div>
      </div>
    )
}
