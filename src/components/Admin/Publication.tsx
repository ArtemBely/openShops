import React, { useEffect, useState } from "react";
import { Projects } from "./Projects";

export const Publication = () => {

  const [txtPublic, setTxtPublic] = useState('проектов');
  const [txtBelow, setTxtBelow] = useState('Добавить новый проект');
  const [page, setPage] = useState('projects');

  useEffect(() => {
    if(typeof window != "undefined") {
      if(window.location.pathname.split('/').pop() == 'projects') {
          setTxtPublic('проектов');
          setTxtBelow('Добавить новый проект');
          setPage('projects');
        }
      if(window.location.pathname.split('/').pop() == 'news') {
          setTxtPublic('новостей');
          setTxtBelow('Добавить новую новость');
          setPage('news');
        }
      if(window.location.pathname.split('/').pop() == 'vacancies') {
          setTxtPublic('вакансий');
          setTxtBelow('Создать новую вакансию');
          setPage('vacancies');
        }
      if(window.location.pathname.split('/').pop() == 'team') {
          setTxtPublic('команды');
          setTxtBelow('Добавить нового участника команды');
          setPage('team');
        }
    }
  });

    return(
      <div className='wrap_public_txt'>
          <p className='txtPublic'>Публикация {txtPublic}</p>
          <a href={`/publication/` + page} className='txtBelow'><span>+</span> {txtBelow}</a>
          <div className='wrap_each_project'>
              <Projects page={page}/>
              <Projects page={page}/>
              <Projects page={page}/>
              <Projects page={page}/>
              <Projects page={page}/>
          </div>
      </div>
    )
}
