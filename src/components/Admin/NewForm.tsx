import React, { useState } from "react";
import  { Switch, Route } from 'react-router-dom';
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

    return(
      <div className='wrap_main_form_admin'>
          <div className='main_form_admin'>
              <p className='txtPublic'>Публикация команды</p>
              <p className='txtBelow' onClick={showFile}><span>+</span> {!mainFile ? 'Добавить основное изображение' : 'Скрыть'}</p>
              <input type='file' className='mainFile' style={{ display: mainFile ? 'block' : 'none'}}/>
              <div className='wrap_post_team'>
                  <div className='wrap_btn_admin'>
                      <button type='submit' onClick={() => { history.back() }} className='btn_admin'><img src={close} id='close_admin'/> Отменить публикацию</button>
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
