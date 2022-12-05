import React from "react";
const fone1 = "../../../images/Rectangle 14-6-2.png";

export const AllPhotos = () => {

    return (
      <div className='wrap_allPhotos'>
          <div className='allPhotos'>
            <p className='txt_about1Title' id='txt_about1TitleId'>Архитектурно-градостроительная концепция многофункционального комплекса с подземной автостоянкой на Виноградной улице</p>
            <p className='date_style spec_data_style' id='spec_data_style'>12 июля 2023</p>
            <div className='wrap_allImages'>
                <img src={fone1} className='each_photo_project first_photo_project'/>
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project' />
                <img src={fone1} className='each_photo_project hideMobile' />
                <img src={fone1} className='each_photo_project hideMobile' />
                <img src={fone1} className='each_photo_project hideMobile' />
                <img src={fone1} className='each_photo_project hideMobile' />
                <img src={fone1} className='each_photo_project hideMobile' />
                <img src={fone1} className='each_photo_project hideMobile' />
            </div>
          </div>
      </div>
    )
}
