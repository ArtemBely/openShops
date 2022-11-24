import React from "react";
import { NavLink } from 'react-router-dom';
const fone1 = '../../../images/Rectangle 14-4.png';
const fone2 = '../../../images/Rectangle 14-2-2.png';
const fone3 = '../../../images/Rectangle 14-3-2.png';

export const News = () => {

    return (
      <div className='wrap_buildings_inside'>
          <div className='news_inside'>
              <NavLink to='/news/1' className='wrap_each_news'>
                  <img src={fone1} className='each_news_img'/>
                  <div className='wrap_description_of_news'>
                    <p className='title_of_news'>Название новости</p>
                    <p className='description_of_news'>Церковная архитектура Византии привлекает к себе значительно большее внимание, чем светская.
                     Этому способствовали как лучшая сохранность церковных памятников в силу </p>
                  </div>
                  <p className='date_style'>12 июля 2023</p>
              </NavLink>
              <NavLink to='/news/2' className='wrap_each_news'>
                  <img src={fone2} className='each_news_img'/>
                  <div className='wrap_description_of_news'>
                    <p className='title_of_news'>Название новости</p>
                    <p className='description_of_news'>Церковная архитектура Византии привлекает к себе значительно большее внимание, чем светская.
                     Этому способствовали как лучшая сохранность церковных памятников в силу </p>
                  </div>
                  <p className='date_style'>12 июля 2023</p>
              </NavLink>
              <NavLink to='/news/3' className='wrap_each_news'>
                  <img src={fone3} className='each_news_img'/>
                  <div className='wrap_description_of_news'>
                    <p className='title_of_news'>Название новости</p>
                    <p className='description_of_news'>Церковная архитектура Византии привлекает к себе значительно большее внимание, чем светская.
                     Этому способствовали как лучшая сохранность церковных памятников в силу </p>
                  </div>
                  <p className='date_style'>12 июля 2023</p>
              </NavLink>
          </div>
      </div>
    )
}
