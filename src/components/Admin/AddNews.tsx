import React, { useEffect, useState } from "react";

export const AddNews = () => {

  const [defineNews, setDefineNews] = useState('');

  useEffect(() => {
    if(typeof window != "undefined" && window.location.pathname.split('/').pop() == 'news') {
       setDefineNews('news');
    }
    else if(typeof window != "undefined" && window.location.pathname.split('/').pop() == 'vacancies') {
       setDefineNews('vacancies');
    }
  });

    return(
      <div style={{ display: defineNews == 'vacancies' || defineNews == 'news' ? 'block' : 'none' }}>
          <p className='post_name'>Название {defineNews == 'vacancies' ? 'вакансии' : 'новости'}</p>
          <input type='text' className='news_post_input'/>
          <p className='post_name'>Дата публикации / Тэг</p>
          <input type='text' className='news_post_input'/>
          <p className='post_name'>Описание {defineNews == 'vacancies' ? 'вакансии' : 'новости'}</p>
          <textarea className='post_area'></textarea>
      </div>
    )
}
