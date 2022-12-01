import React from "react";
const building1 = '../../images/Frame 458.png';
const building2 = '../../images/Frame 459.png';
const building3 = '../../images/Frame 460.png';

export const Buildings = () => {

    return (
      <div className='wrap_buildings'>
          <div className='buildings'>
          <p className='fone1'></p>
                <div className='each_building'>
                    <img src={building1} />
                    <p className='top_title'>Недвижимость</p>
                    <p className='low_txt' id='low_txt1'>Улучшаем повседневную жизнь, формируя доступную и комфортную среду для жизни, работы и творчества</p>
                </div>
                <div className='each_building'>
                    <img src={building2} />
                    <p className='top_title middle_top_title'>Технологии</p>
                    <p className='low_txt middle_low_txt' id='low_txt2'>Многогранный опыт высококвалифицированной команды, подкреплён последними разработками и исследованиями в области проектирования</p>
                </div>
                <div className='each_building'>
                    <img src={building3} />
                    <p className='top_title'>Досуг</p>
                    <p className='low_txt' id='low_txt3'>Ориентация на развитие экосистемы, которая формирует опыт жизни в проектируемых пространствах </p>
                </div>
          </div>
      </div>
    )
}
