import React, { useState, useEffect } from "react";
import { categories } from './categories';
import { Characteristics } from "./Characteristics";
import { Description } from "./Description";
import { Technical } from "./Technical";
import { defineUpdate } from './defineUpdate';

export const AddProject = (props:any) => {

  const [name, setData] = useState({
    title: '',
    category: '',
    secondString: '',
    tag: ''
  });

  useEffect(() => {
    if(props.data) setData({title: props.data.title, category: props.data.category,
             secondString: props.data.secondString, tag: props.data.tag});
  },[]);

  const handleChange = (e:any) => {
    setData({
       ...name,
       [e.target.name]: e.target.value
     });
  }


    return(
      <div className='wrap_post_project' style={{ display: typeof window != "undefined" && window.location.pathname.split('/')[2] == 'projects' ? 'grid' : 'none' }}>
      <form action={`/publication/${defineUpdate()}`} method='POST' id='projectsForm'></form>
          <div>
              <p className='post_name'>Название проекта</p>
              <input type='text' name='title' form='projectsForm' value={props.data ? name.title : undefined} required onChange={handleChange} className='news_post_input'/>
          </div>
          <div>
              <p className='post_name'>Категория</p>
              <select className='news_post_input' name='category' required form='projectsForm' onChange={handleChange} id='select_category'>
                  {categories.map((item:any, key:any) => (
                      <option key={key}
                              value={key==0 ? '' : item.name}
                              disabled={key==0 ? true : false}
                              selected={props.data && props.data.category == item.name ? true : false}>
                      {item.name}</option>
                  ))}
              </select>
          </div>
          <div>
              <p className='post_name'>Вторая строка превью</p>
              <input type='text' name='secondString' form='projectsForm' value={props.data ? name.secondString : undefined} required onChange={handleChange} className='news_post_input'/>
          </div>
          <div>
              <p className='post_name'>Дата публикации / Тэг</p>
              <input type='text' name='tag' form='projectsForm' required value={props.data ? name.tag : undefined} onChange={handleChange} className='news_post_input'/>
          </div>

          <div className='wrap_main_project_issues'>
              <Characteristics />
              <Technical />
              <Description />
          </div>

      </div>
    )
}
