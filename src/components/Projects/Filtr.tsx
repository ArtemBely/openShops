import React from "react";
import { Buildings } from './Buildings';

export const Filtr = () => {

  const changeFiltr = (e:any) => {
    document.querySelectorAll('.each_category').forEach((item) => {
      item.classList.remove('choosenCategory');
    });
    e.target.classList.add('choosenCategory');
  }

    return (
      <div className='wrap_aboutProject'>
          <div className='aboutProject'>
              <div id='project_title'>
                  <p className='about_title spec_about_title' id='project_spec'>Проектируем пространства </p>
                  <p className='about_title spec_about_title' id='project_spec_txt'>для жизни, работы и творчества</p>
              </div>
              <input type='text' id='inputSearch' placeholder='Поиск'/>
              <div className='wrap_allCategory'>
                  <p className='each_category choosenCategory' onClick={changeFiltr}>Все проекты</p>
                  <p className='each_category' onClick={changeFiltr}>Жилые</p>
                  <p className='each_category' onClick={changeFiltr}>Концептуальные</p>
                  <p className='each_category' onClick={changeFiltr}>Культурные</p>
                  <p className='each_category' onClick={changeFiltr}>Общественные</p>
                  <p className='each_category' onClick={changeFiltr}>Конкурсные</p>
                  <p className='each_category' onClick={changeFiltr}>Офисные</p>
                  <p className='each_category' onClick={changeFiltr}>Градо</p>
              </div>
          </div>
          <Buildings />
      </div>
    )
}
