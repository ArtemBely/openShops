import React, { useEffect, useState } from "react";
const close = '../../../images/Vector.svg';
const fone = '../../../images/Rectangle 205.png';

export const Projects = (props:any) => {

    return(
      <div className='each_project'>
          <p className='date_of_publication' style={{ opacity: props.page == 'team' ? 0 : 1 }}>21 october</p>
          <a href='#' className='each_project_link'><img src={close} /></a>
          <div className='wrap_each_publication'>
              <p className='wrap_inside_each_publication' style={{ display: props.page == 'vacancies' ? 'none' : 'block' }}><img src={fone} /></p>
              <p className='title_of_publication' style={{ display: props.page == 'projects' ? 'block' : 'none' }}>Церковная архитектура Византии</p>

              <div className='wrap_each_admin_post' style={{ display: props.page == 'news' ? 'block' : 'none' }}>
                  <p className='name_vacancy'>Заголовок</p>
                  <p className='position_vacancy'>Проект представляет собой уникальное сочетание функциональности и эстетики. Мы стремимся создать здание, которое будет не только красивым, но и функциональным, удовлетворяя требованиям и ожиданиям заказчика. </p>
              </div>

              <div className='wrap_each_admin_post' style={{ display: props.page == 'vacancies' ? 'block' : 'none' }}>
                  <p className='name_vacancy'>Head of Development Department </p>
                  <p className='position_vacancy'>Церковная архитектура Византии привлекает к себе значительно большее внимание, чем светская. Этому способствовали как лучшая сохранность церковных памятников в силу исторических обстоятельств (многие храмы были преобразованы в мечети), так и их большая «артистичность».</p>
              </div>

              <div className='wrap_each_admin_post' style={{ display: props.page == 'team' ? 'block' : 'none' }}>
                  <p className='name_vacancy'>Inna Ivanova</p>
                  <p className='position_vacancy'>Developerka</p>
              </div>
          </div>
      </div>
    )
}
