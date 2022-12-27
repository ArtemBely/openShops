import React, { useState } from "react";
import  { Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { AddNews } from "./AddNews";
import { AddProject } from "./AddProject";
import { AddTeam } from "./AddTeam";
const close = '../../../images/Vector.svg';
const deleteImg = '../../../images/Group 406.png';
let data:object | any;

declare global {
    interface Window {
        __INITIAL_INFO__:object;
    }
}

export const NewForm = () => {

    if(typeof window != "undefined") { data = window.__INITIAL_INFO__; }

    const [image, setImage] = useState([]);
    console.log(image);

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

    const showUploadedImages = () => {
      return (
        <div className='wrap_uploaded_images'>
            {Array.from(image).map(item => {
              return(
                <p className='wrap_each_uploaded_images'>
                   <img src={item ? URL.createObjectURL(item) : "undefined"} />
                </p>
              )
            })}
            {showExistedProjects()}
        </div>
      )
    }

    const showExistedProjects = () => {
      if(typeof data != "undefined" && data.arrayOfFiles != null && data.arrayOfFiles.length > 0)
      return (
        <div className='wrap_uploaded_images existed_images'>
            {data.arrayOfFiles.map((item:any) => {
              return(
                <p className='wrap_each_uploaded_images'>
                    <a href={`/publication/projects/delete/${detectPath().split('/')[1]}/${item}`}><img src={`../../../uploads/${item}`} className='onShowDeleteImg'
                       onMouseEnter={(e:any) => { e.target.src = deleteImg }}
                       onMouseOut={(e:any) => { e.target.src = `../../../uploads/${item}` }} />
                    </a>
                </p>
              )
            })}
        </div>
      )
      else return (
        <div className='no_photos'>
            Нет актуальных фото
        </div>
      )
    }

    return(
      <div className='wrap_main_form_admin'>
          <div className='main_form_admin'>
              <p className='txtPublic'>Публикация команды</p>
              <p className='txtBelow'><span>+</span> Добавить основное изображение</p>
              <input type='file' name='noExchangeFile' form={defineForm()} className='mainFile' />
              <p className={defineForm() != 'teamForm' ? 'wrap_avatar' : 'wrap_avatar team_avatar'}><img src={typeof data != "undefined" && data.noExchangeFile != null && data.noExchangeFile.length > 1 ? `../../../uploads/${data.noExchangeFile}` : '../../../images/question-mark.png'} /></p>
              <div className='wrap_post_team'>
                  <div className='wrap_btn_admin'>
                      <Route path={["/publication/news/:id", "/publication/vacancies/:id", "/publication/team/:id", "/publication/projects/:id"]}>
                          <a href={`/publication/${detectPath().split('/')[0]}/delete/${detectPath().split('/')[1]}`} style={{ display: detectDelete() ? 'block' : 'none' }}>
                          <button type='submit' className='delete_admin'>Удалить</button>
                      </a></Route>
                      <button type='submit' style={{ display: detectDelete() ? 'none' : 'block' }} onClick={() => { history.back() }} className='btn_admin'><img src={close} id='close_admin'/> Отменить публикацию</button>
                      <button type='submit' className='btn_admin' form={defineForm()}>Опубликовать</button>
                  </div>
                  <div className='wrap_additionalImages' style={{ display: defineForm() == 'projectsForm' ? 'grid' : 'none' }}>
                      <p className='txtBelow addTxtBelow'><span>+</span> Добавить дополнительное изображение</p>
                      <input type='file' onChange={(e:any) => { setImage(e.target.files);}} multiple name='arrayFiles' form='projectsForm' className='mainFile2' />
                      {showUploadedImages()}
                  </div>
              <Route path={["/publication/team", "/publication/team/:id"]}><AddTeam data={data}/></Route>
              </div>
              <Route path={["/publication/news", "/publication/news/:id", "/publication/vacancies", "/publication/vacancies/:id"]}><AddNews data={data}/></Route>
              <Route path={["/publication/projects", "/publication/projects/:id"]}><AddProject data={data}/></Route>
          </div>
      </div>
    )
}
