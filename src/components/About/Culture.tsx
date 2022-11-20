import React from "react";
const fone1 = "../../../images/5 1-2.png";
const fone2 = "../../../images/3 1-2.png";
const fone3 = "../../../images/Image7 1-2.png";
const fone4 = "../../../images/Софья_буклет_20.10 1-2.png";
const fone5 = "../../../images/Korpus 1 vid 2 vdol' 1go Kozevniceskogo per ZAM 1.png";
const fone6 = "../../../images/а_003 1-2.png";
const fone7 = "../../../images/Star_cam005 1-2.png";

export const Culture = () => {

    return (
      <div className='wrap_aboutCulture'>
          <div className='aboutCulture'>
              <div className='wrap_img_aboutCulture'>
                <img src={fone1} />
                <img src={fone2} />
                <img src={fone3} />
                <img src={fone4} />
                <img src={fone5} />
                <img src={fone6} />
                <img src={fone7} />
              </div>
              <div className='below_culture'>
                <p className='txt_about1Title first_title' style={{ gridColumn: '1 / 3' }}>Ценности и культура бюро</p>
                <p className='txt_about2'>As a Benoy employee, you will receive a progressive employment and benefits package, including dedicated mentoring and development. With our diverse and international workforce encompassing 33 nationalities and projects in over 50 countries, we also provide opportunities for global mobility. </p>
                <p className='txt_about2'>Studio social events celebrate Benoy’s inclusive culture and include a number of regular clubs and groups including Sketch Club, Book Group, Softball, Tennis Club and more, alongside our regular ​‘Innovation Talks’ series. You will also be able to take part in our global Giving Back programme where we aim to apply cutting edge design thinking in support of great causes around the world.</p>
              </div>
          </div>
      </div>
    )
}
