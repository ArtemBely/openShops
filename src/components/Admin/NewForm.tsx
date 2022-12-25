import React, { useState } from "react";
import  { Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { AddNews } from "./AddNews";
import { AddProject } from "./AddProject";
import { AddTeam } from "./AddTeam";
const close = '../../../images/Vector.svg';
let data:object;

declare global {
    interface Window {
        __INITIAL_INFO__:object;
    }
}

export const NewForm = () => {

    if(typeof window != "undefined") { data = window.__INITIAL_INFO__; }

    const [mainFile, setMainFile] = useState(false);

    const showFile = () => { setMainFile(prevState => !prevState); }

    const defineForm = ():string => {
      if(typeof window != "undefined"){
         return window.location.pathname.split('/')[2] == 'vacancies' ? 'vacancyForm' :
          window.location.pathname.split('/')[2] == 'news' ? 'newsForm' :
          window.location.pathname.split('/')[2] == 'team' ? 'teamForm' : 'projectsForm'
      }
      return 'projectsForm'
    }

    const detectDelete = () => {
      if(typeof window != "undefined" && window.location.pathname.split('/').length == 4) return true;
      else return false;
    }

    const detectPath = ():string | any => {
      let def:string | any = '';
      if(typeof window != "undefined" && window.location.pathname.split('/').length == 4) {
          def = window.location.pathname.split('/')[2].concat('/').concat(window.location.pathname.split('/')[3]);
      }
      return def;
    }

    return(
      <div className='wrap_main_form_admin'>
          <div className='main_form_admin'>
              <p className='txtPublic'>Публикация команды</p>
              <p className='txtBelow' onClick={showFile}><span>+</span> {!mainFile ? 'Добавить основное изображение' : 'Скрыть'}</p>
              <input type='file' className='mainFile' style={{ display: mainFile ? 'block' : 'none'}}/>
              <div className='wrap_post_team'>
                  <div className='wrap_btn_admin'>
                      <Route path={["/publication/news/:id", "/publication/vacancies/:id", "/publication/team/:id", "/publication/projects/:id"]}>
                          <a href={`/publication/${detectPath().split('/')[0]}/delete/${detectPath().split('/')[1]}`} style={{ display: detectDelete() ? 'block' : 'none' }}>
                          <button type='submit' className='delete_admin'>Удалить</button>
                      </a></Route>
                      <button type='submit' style={{ display: detectDelete() ? 'none' : 'block' }} onClick={() => { history.back() }} className='btn_admin'><img src={close} id='close_admin'/> Отменить публикацию</button>
                      <button type='submit' className='btn_admin' form={defineForm()}>Опубликовать</button>
                  </div>
              <Route path={["/publication/team", "/publication/team/:id"]}><AddTeam data={data}/></Route>
              </div>
              <Route path={["/publication/news", "/publication/news/:id", "/publication/vacancies", "/publication/vacancies/:id"]}><AddNews data={data}/></Route>
              <Route path={["/publication/projects", "/publication/projects/:id"]}><AddProject data={data}/></Route>
          </div>
      </div>
    )
}
