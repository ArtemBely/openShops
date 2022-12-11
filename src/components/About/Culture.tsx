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
                <img src={fone5} className='hiddenImgs'/>
                <img src={fone6} className='hiddenImgs'/>
                <img src={fone7} className='hiddenImgs'/>
              </div>
              <div className='below_culture'>
                <p className='txt_about1Title first_title' style={{ gridColumn: '1 / 3' }}>Ценности и культура бюро</p>
                <div className='txt_about2 spec_txt_about3'>
                    <p className='txt_about2'>В бюро мы опираемся на следующие ценности:</p>
                    <p className='txt_about2'>1. Инновации: мы постоянно стремимся улучшать и инновационировать наши процессы и методы работы, чтобы предлагать нашим клиентам самые современные и эффективные решения.</p>
                    <p className='txt_about2'>2. Сотрудничество: мы ценим партнёрские отношения с нашими клиентами и поставщиками, и стремимся быть открытыми и честными в нашей работе.</p>
                    <p className='txt_about2'>3. Качество: мы гордимся тем, что наши проекты всегда выполняются на высоком уровне качества, что позволяет нам доверять нашим клиентам.</p>
                    <p className='txt_about2'>4. Ответственность: мы понимаем, что наши проекты имеют большое значение для наших клиентов и общества, и поэтому мы всегда берём на себя полную ответственность за результаты нашей работы.</p>
                </div>
                <div className='txt_about2 spec_txt_about3'>
                    <p className='txt_about2'>Мы объединили специалистов с разным опытом работы, чтобы создать команду с богатым креативным потенциалом. Мы верим в силу творчества и коллективного мышления, и поэтому обеспечиваем нашим сотрудникам оптимальные условия для развития их талантов.</p>
                    <p className='txt_about2'>Наша культура — это социальная ответственность, доверие, уважение и честность. Мы придерживаемся чётко определённых этических принципов, которые помогают нам взаимодействовать с нашими клиентами, партнёрами и сотрудниками.</p>
                </div>
              </div>
          </div>
      </div>
    )
}
