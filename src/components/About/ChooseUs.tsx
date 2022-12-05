import React from "react";
const fone1 = "../../../images/Frame 467-2-2.png";

export const ChooseUs = () => {

    return (
      <div className='wrap_aboutChooseUs'>
          <div className='aboutChooseUs'>
              <div className='wrap_img_aboutChooseUs'>
                <img src={fone1} id='fone1_us'/>
              </div>
              <div className='below_culture'>
                <p className='txt_about1Title first_title' style={{ gridColumn: '1 / 3' }}>Почему нас выбирают?</p>
                <p className='txt_about2 spec_txt_about spec_txt_about3'>At Benoy, we want to be the place where talent succeeds. The place that gives you scope and freedom in your work. That enables you to become the very best version of yourself. </p>
                <p className='txt_about2 spec_txt_about spec_txt_about3'>At Benoy, we want to be the place where talent succeeds. The place that gives you scope and freedom in your work. That enables you to become the very best version of yourself. </p>
                <p className='txt_about2 spec_txt_about spec_txt_about3'>We are always looking for people who want to be part of something different – passionate people who can ignite a spark of change. And as an inclusive employer, we welcome people from all backgrounds and cultures. </p>
                <p className='txt_about2 spec_txt_about spec_txt_about3'>We are always looking for people who want to be part of something different – passionate people who can ignite a spark of change. And as an inclusive employer, we welcome people from all backgrounds and cultures.</p>
              </div>
          </div>
      </div>
    )
}
