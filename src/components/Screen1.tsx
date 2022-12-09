import React from "react";
const cube = '../../images/Frame 467-2.png';

export const Screen1 = () => {

    return (
      <div className='screen1'>
          <p className='project_title'>Проектируем пространства для жизни, работы и творчества</p>
          <p className='wrap_cube'><img src={cube} /></p>
          <a href="#request_field" className='request_field_link'><div className='discuss_button'>Обсудить проект</div></a>
      </div>
    )
}
