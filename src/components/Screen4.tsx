import React from "react";
const fone1 = '../../images/Rectangle 855-2-2.png';
const fone2 = '../../images/Rectangle 856-2-2.png';
const fone3 = '../../images/Rectangle 865-2.png';
const fone4 = '../../images/Rectangle 858-2.png';
const fone5 = '../../images/Rectangle 862-2.png';
const fone6 = '../../images/Rectangle 860-2.png';
const fone7 = '../../images/Rectangle 864-2.png';

export const Screen4 = () => {

    return (
      <div className='screen2'>
          <div className='wrap_fone4'>
              <img src={fone1} className='screen_imgs1'/>
              <img src={fone2} className='screen_imgs1'/>
              <img src={fone3} className='screen_imgs1'/>
              <img src={fone4} className='screen_imgs1'/>
              <img src={fone5} className='screen_imgs1'/>
              <img src={fone6} className='screen_imgs1'/>
              <img src={fone7} className='screen_imgs1'/>
          </div>
          <p className='project_title2'>Авторские решения</p>
          <div className='discuss_button2'>Обсудить проект</div>
      </div>
    )
}
