import React from "react";
import { NavLink } from "react-router-dom";

export const Detailed = () => {

    return (
      <div className='wrap_detailed'>
          <div className='detailed'>
              <p className='detailed_txt'>«Открытые мастерские» — проектная организация,
               входящая в группу компаний «Основа», обладающая
               опытом проектирования разнопрофильных объектов:
               жилых домов, офисных комплексов и объектов
               социально-культурного назначения.</p>
               <p className='wrap_detailed_link'><NavLink to='#' id='detailed_link'>Подробнее</NavLink></p>
          </div>
      </div>
    )
}
