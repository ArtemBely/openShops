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
                <p className='txt_about2 spec_txt_about spec_txt_about3'>Мы предлагаем качественные услуги по дизайну и проектированию зданий и интерьеров. Наши специалисты имеют большой опыт работы и постоянно совершенствуют свои знания и умения. </p>
                <p className='txt_about2 spec_txt_about spec_txt_about3'>Наши клиенты ценят нас за уровень профессионализма, оперативность и ответственность. Мы стремимся создать доверительные и продуктивные отношения с нашими клиентами, чтобы сделать их задумки реальностью. </p>
                <p className='txt_about2 spec_txt_about spec_txt_about3'>Cтремимся предложить нашим клиентам конкурентные цены и гибкие условия сотрудничества. Мы слушаем пожелания наших клиентов и стараемся индивидуально подходить к каждому проекту.</p>
                <p className='txt_about2 spec_txt_about spec_txt_about3'>Если вы ищете надежного партнера для реализации своих проектов, обращайтесь к нам в проектное бюро!</p>
              </div>
          </div>
      </div>
    )
}
