import React from "react";
const fone = "../../../images/Rectangle 856-3-2.png";

export const BelowScreen = () => {

    return (
          <div className='wrap_belowScreen'>
              <div className='belowScreen'>

                  <div>
                    <p className='txt_aboutBold'>
                        «Открытые мастерские» — проектная организация, входящая в группу компаний «Основа», обладающая опытом проектирования разнопрофильных объектов: жилых домов, офисных комплексов и объектов социально-культурного назначения.
                    </p>
                    <p className='txt_about2 project_txt1'>Слаженная команда профессионалов осуществляет весь комплекс проектных работ: </p>
                    <p className='txt_about1'>→ архитектурная концепция</p>
                    <p className='txt_about1 project_txt1'>→ проектная и рабочая документация, включая осуществление авторского надзора при строительстве.</p>
                    <p className='txt_about2 project_txt1'>Разработка документации с применением технологий информационного моделирования (BIM) позволяет эффективно решать сложные и амбициозные задачи.</p>
                  </div>

                  <div className='wrap_years'>
                    <div>
                      <p className='txt_about1Title'>20 лет</p>
                      <p className='txt_about2 txt_about2_special'>создаём проекты,</p>
                      <p className='txt_about2 txt_about2_special'>определяющие стиль жизни</p>
                    </div>
                    <div>
                      <p className='txt_about1Title' id='spec_four'>{`> 400 проектов`}</p>
                      <p className='txt_about2 txt_about2_special'>созданы нами за всё время</p>
                    </div>
                  </div>

              </div>
          </div>
    )

}
