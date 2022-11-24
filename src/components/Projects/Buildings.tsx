import React from "react";
const fone1 = '../../../images/Rectangle 1-2.png';
const fone2 = '../../../images/Rectangle 2-2.png';
const fone3 = '../../../images/Frame 483-2.png';
const fone4 = '../../../images/Rectangle 4-2.png';
const fone5 = '../../../images/Rectangle 1-2-2.png';

export const Buildings = () => {

    return (
      <div className='wrap_buildings_inside'>
          <div className='buildings_inside'>
              <div className='wrap_each_object'>
                  <img src={fone1} className='each_project_img'/>
                  <div className='wrap_objectInfo '>
                      <p className='common_addressObject'>Адрес объекта</p>
                      <p className='common_titleObject'>Название объекта</p>
                  </div>
              </div>
              <div className='wrap_each_object'>
                  <img src={fone2} className='each_project_img'/>
                  <div className='wrap_objectInfo '>
                      <p className='common_addressObject'>Адрес объекта</p>
                      <p className='common_titleObject'>Название объекта</p>
                  </div>
              </div>
              <div className='wrap_each_object'>
                  <img src={fone3} className='each_project_img'/>
                  <div className='wrap_objectInfo '>
                      <p className='common_addressObject'>Адрес объекта</p>
                      <p className='common_titleObject'>Название объекта</p>
                  </div>
              </div>
              <div className='wrap_each_object'>
                  <img src={fone4} className='each_project_img'/>
                  <div className='wrap_objectInfo '>
                      <p className='common_addressObject'>Адрес объекта</p>
                      <p className='common_titleObject'>Название объекта</p>
                  </div>
              </div>
              <div className='wrap_each_object'>
                  <img src={fone5} className='each_project_img'/>
                  <div className='wrap_objectInfo '>
                      <p className='common_addressObject'>Адрес объекта</p>
                      <p className='common_titleObject'>Название объекта</p>
                  </div>
              </div>
              <div className='wrap_each_object'>
                  <img src={fone1} className='each_project_img'/>
                  <div className='wrap_objectInfo '>
                      <p className='common_addressObject'>Адрес объекта</p>
                      <p className='common_titleObject'>Название объекта</p>
                  </div>
              </div>
          </div>
      </div>
    )
}
