import React from "react";
const partner1 = '../../images/Group 400.svg';
const partner2 = '../../images/Group 401.svg';
const partner3 = '../../images/Group 402.svg';
const partner4 = '../../images/Group 403.svg';

export const Partners = () => {

    return (
      <div className='wrap_partners'>
          <div className='partners'>
              <p className='big_title_main' id='big_title_mainId'>Партнеры</p>
              <a href="#" className='partners_links'><img src={partner1} /></a>
              <a href="#" className='partners_links'><img src={partner2} /></a>
              <a href="#" className='partners_links third_partner'><img src={partner3} /></a>
              <a href="#" className='partners_links'><img src={partner4} /></a>
          </div>
      </div>
    )
}
