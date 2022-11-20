import React from "react";
const telegram = "../../../images/icon-park-outline_telegram.svg";
const whatsapp = "../../../images/Vector-4.svg";

export const Contact = () => {

    return (
      <div className='wrap_contact'>
          <div className='contact'>
              <div className='wrap_contacts_inside'>
                  <div>
                      <p className='contact_title'>Контакты</p>
                      <p className='contact_info'>Россия, г. Москва,</p>
                      <p className='contact_info'>107076, ул. Богородский Вал, д. 3, стр. 32,</p>
                      <p className='contact_info'>пом. I, ком. 65, эт. 1</p>
                  </div>
                  <div className='wrap_low_links_contact'>
                      <a href='tel:+74997536333' className='contact_info'>+7 499 753 63 33 (2046)</a>
                      <a href='mailto:info@o-master.ru' className='contact_info'>info@o-master.ru</a>
                  </div>

                  <div className='wrap_social_contacts'>
                      <a href='#' className='wrap_social_contacts_links'><img src={whatsapp} /></a>
                      <a href='#' className='wrap_social_contacts_links'><img src={telegram} id='tele_low'/></a>
                  </div>
              </div>

              <div className='wrap_low_map'>
              </div>
          </div>
      </div>
    )

}
