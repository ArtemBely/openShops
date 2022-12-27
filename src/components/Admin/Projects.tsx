import React, { useEffect, useState } from "react";
const close = '../../../images/Vector.svg';
const fone = '../../../images/Rectangle 205.png';

export const Projects = (props:any) => {

    return(
      <div className='each_project'>
          <p className='date_of_publication' style={{ opacity: props.page == 'team' ? 0 : 1 }}>{props.page == 'team' ? 'tag' : props.item.tag}</p>
          <a href={`/publication/${props.page}/delete/${props.item._id}`} className='each_project_link'><img src={close} /></a>
          <a href={`/publication/${props.page}/${props.item._id}`} className='wrap_each_change'>
              <div className='wrap_each_publication'>
                  <p className='wrap_inside_each_publication' style={{ display: props.page == 'vacancies' ? 'none' : 'block' }}>
                      <img src={props.item.noExchangeFile ? `../../../uploads/${props.item.noExchangeFile}` : fone} /></p>
                  <p className='title_of_publication' style={{ display: props.page == 'projects' ? 'block' : 'none' }}>{props.item.title}</p>

                  <div className='wrap_each_admin_post' style={{ display: props.page == 'news' ? 'block' : 'none' }}>
                      <p className='name_vacancy'>{props.item.title}</p>
                      <p className='position_vacancy'>{props.item.description}</p>
                  </div>

                  <div className='wrap_each_admin_post' style={{ display: props.page == 'vacancies' ? 'block' : 'none' }}>
                      <p className='name_vacancy'>{props.item.title}</p>
                      <p className='position_vacancy'>{props.item.description}</p>
                  </div>

                  <div className='wrap_each_admin_post' style={{ display: props.page == 'team' ? 'block' : 'none' }}>
                      <p className='name_vacancy'>{props.item.name}</p>
                      <p className='position_vacancy'>{props.item.title}</p>
                  </div>
              </div>
          </a>
      </div>
    )
}
