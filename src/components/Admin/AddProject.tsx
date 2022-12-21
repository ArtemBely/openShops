import React from "react";
import { categories } from './categories';

export const AddProject = () => {
    return(
      <div className='wrap_post_project' style={{ display: typeof window != "undefined" && window.location.pathname.split('/').pop() == 'projects' ? 'grid' : 'none' }}>
          <div>
              <p className='post_name'>Название проекта</p>
              <input type='text' className='news_post_input'/>
          </div>
          <div>
              <p className='post_name'>Категория</p>
              <select className='news_post_input' id='select_category'>
                  {categories.map((item:any, key:any) => (
                      <option value={key==0 ? '' : item.name}
                              disabled={key==0 ? true : false}>
                      {item.name}</option>
                  ))}
              </select>
          </div>
          <div>
              <p className='post_name'>Вторая строка превью</p>
              <input type='text' className='news_post_input'/>
          </div>
          <div>
              <p className='post_name'>Дата публикации / Тэг</p>
              <input type='text' className='news_post_input'/>
          </div>
      </div>
    )
}
