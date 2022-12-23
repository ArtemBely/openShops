import React, { useEffect, useState } from "react";

export const AddNews = () => {

  const [defineNews, setDefineNews] = useState('');

  useEffect(() => {
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
              <input type='text' name='title' form={defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm'} required className='news_post_input'/>
          <p className='post_name'>Дата публикации / Тэг</p>
              <input type='text' name='tag' form={defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm'} required className='news_post_input'/>
          <p className='post_name'>Описание {defineNews == 'vacancies' ? 'вакансии' : 'новости'}</p>
              <textarea className='post_area' form={defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm'} required name='description'></textarea>
      </div>
    )
}
