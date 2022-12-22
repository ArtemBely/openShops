import React, { useState } from "react";
import { AddNews } from "./AddNews";
import { AddProject } from "./AddProject";
import { AddTeam } from "./AddTeam";
const close = '../../../images/Vector.svg';

export const NewForm = () => {

    const [mainFile, setMainFile] = useState(false);

    const showFile = () => {
      setMainFile(prevState => !prevState);
    }

    const defineForm = ():string => {
      if(typeof window != "undefined"){
         return window.location.pathname.split('/').pop() == 'vacancies' ? 'vacancyForm' :
          window.location.pathname.split('/').pop() == 'news' ? 'newsForm' :
          window.location.pathname.split('/').pop() == 'team' ? 'teamForm' : 'projectForm'
      }
      return 'projectForm'
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
              <AddTeam />
              </div>
              <AddNews />
              <AddProject />
          </div>
      </div>
    )
}
