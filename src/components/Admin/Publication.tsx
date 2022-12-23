import React, { useEffect, useState } from "react";
import { Projects } from "./Projects";
let projects:Array<object>, news:Array<object>, vacancies:Array<object>, team:Array<object>;

declare global {
    interface Window {
        __INITIAL_PROJECTS__:Array<object>;
        __INITIAL_NEWS__:Array<object>;
        __INITIAL_VACANCIES__:Array<object>;
        __INITIAL_TEAM__:Array<object>;
    }
}

export const Publication = () => {
  if(typeof window != "undefined") {
      projects = window.__INITIAL_PROJECTS__;
      news = window.__INITIAL_NEWS__;
      vacancies = window.__INITIAL_VACANCIES__;
      team = window.__INITIAL_TEAM__;
  }

  const [txtPublic, setTxtPublic] = useState('проектов');
  const [txtBelow, setTxtBelow] = useState('Добавить новый проект');
  const [page, setPage] = useState('projects');
  const [scope, setScope] = useState([{}]);

  useEffect(() => {
    if(typeof window != "undefined") {
      if(window.location.pathname.split('/').pop() == 'projects') {
          setTxtPublic('проектов');
          setTxtBelow('Добавить новый проект');
          setPage('projects');
          setScope(projects);
        }
      if(window.location.pathname.split('/').pop() == 'news') {
          setTxtPublic('новостей');
          setTxtBelow('Добавить новую новость');
          setPage('news');
          setScope(news);
        }
      if(window.location.pathname.split('/').pop() == 'vacancies') {
          setTxtPublic('вакансий');
          setTxtBelow('Создать новую вакансию');
          setPage('vacancies');
          setScope(vacancies);
        }
      if(window.location.pathname.split('/').pop() == 'team') {
          setTxtPublic('команды');
          setTxtBelow('Добавить нового участника команды');
          setPage('team');
          setScope(team);
        }
    }
  });

    return(
      <div className='wrap_public_txt'>
          <p className='txtPublic'>Публикация {txtPublic}</p>
          <a href={`/publication/` + page} className='txtBelow'><span>+</span> {txtBelow}</a>
          <div className='wrap_each_project'>
              {scope.map((item:object) => (
                <Projects page={page} item={item}/>
              ))}
          </div>
      </div>
    )
}
