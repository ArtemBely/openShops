import React from "react";
import { NavLink } from 'react-router-dom';

export const Vacancies = () => {

    return (
      <div className='wrap_vacancies'>
          <div className='vacancies'>
                <p className='txt_about1Title second_title'>Вакансии</p>
                <div className='wrap_each_vacancy'>
                    <NavLink to='/about/1' className='each_vacancy'>
                        <div className='wrap_vacancy_txt'>
                            <p className='name_of'>Название вакансии</p>
                            <p className='lastname_of'>Церковная архитектура Византии привлекает к себе значительно большее внимание,
                             чем светская. Этому способствовали как лучшая сохранность церковных памятников в силу </p>
                        </div>
                        <p className='date_vacancy'>12 июля 2023</p>
                    </NavLink>
                    <NavLink to='/about/2' className='each_vacancy'>
                        <div className='wrap_vacancy_txt'>
                            <p className='name_of'>Название вакансии</p>
                            <p className='lastname_of'>Церковная архитектура Византии привлекает к себе значительно большее внимание,
                             чем светская. Этому способствовали как лучшая сохранность церковных памятников в силу </p>
                        </div>
                        <p className='date_vacancy'>12 июля 2023</p>
                    </NavLink>
                    <NavLink to='/about/3' className='each_vacancy'>
                        <div className='wrap_vacancy_txt'>
                            <p className='name_of'>Название вакансии</p>
                            <p className='lastname_of'>Церковная архитектура Византии привлекает к себе значительно большее внимание,
                             чем светская. Этому способствовали как лучшая сохранность церковных памятников в силу </p>
                        </div>
                        <p className='date_vacancy'>12 июля 2023</p>
                    </NavLink>
                </div>
          </div>
      </div>
    )
}
