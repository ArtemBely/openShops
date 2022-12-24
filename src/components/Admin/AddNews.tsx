import React, { useEffect, useState } from "react";

export const AddNews = (props:any) => {

  const [defineNews, setDefineNews] = useState('');

  const [name, setData] = useState({
    title: '',
    description: '',
    tag: ''
  });

  const handleChange = (e:any) => {
    setData({
       ...name,
       [e.target.name]: e.target.value
     });
     console.log('tftr')
  }


  useEffect(() => {
    if(props.data) { setData({title: props.data.title, tag: props.data.tag, description: props.data.description}); }
    if(typeof window != "undefined" && window.location.pathname.split('/')[2] == 'news') {
       setDefineNews('news');
    }
    else if(typeof window != "undefined" && window.location.pathname.split('/')[2] == 'vacancies') {
       setDefineNews('vacancies');
    }
  });

    return(
      <div style={{ display: defineNews == 'vacancies' || defineNews == 'news' ? 'block' : 'none' }}>
          <form action={`/publication/${defineNews == 'vacancies' ? 'vacancies' : 'news'}`}
              method='POST' id={defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm'}>
          </form>
          <p className='post_name'>Название {defineNews == 'vacancies' ? 'вакансии' : 'новости'}</p>
              <input type='text' name='title' form={defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm'} value={props.data ? name.title : undefined} onChange={(e:any) => { e.target.name = e.target.value }} required className='news_post_input'/>
          <p className='post_name'>Дата публикации / Тэг</p>
              <input type='text' name='tag' form={defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm'} value={props.data ? name.tag : undefined} onChange={handleChange} required className='news_post_input'/>
          <p className='post_name'>Описание {defineNews == 'vacancies' ? 'вакансии' : 'новости'}</p>
              <textarea className='post_area' form={defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm'} value={props.data ? name.description : undefined} onChange={handleChange} required name='description'></textarea>
      </div>
    )
}
