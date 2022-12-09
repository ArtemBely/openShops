import React from "react";
const fone = '../../images/Frame 465-2.png';

export const Screen2 = () => {

    return (
      <div className='screen2'>
          <p className='wrap_fone'><img src={fone} /></p>
          <p className='project_title2 spec_city_title'>Интеграция в городскую среду</p>
          <a href="#request_field" className='request_field_link'><div className='discuss_button2'>Обсудить проект</div></a>
      </div>
    )
}
