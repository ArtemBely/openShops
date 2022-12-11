import React from "react";
const telegram = "../../../images/icon-park-outline_telegram.svg";
const whatsapp = "../../../images/Vector-4.svg";
const map = '../../../images/Снимок экрана 2022-10-05 в 18.50 1-2.png';

export const Contact = () => {

    return (
      <div className='wrap_contact'>
          <div className='contact'>
              <div className='wrap_contacts_inside'>
                  <div>
                      <p className='contact_title contsct_planchet'>Контакты</p>

                      <p className='contact_info mobileHidden'>Россия, г. Москва,</p>
                      <p className='contact_info mobileHidden'>107076, ул. Богородский Вал, д. 3, стр. 32,</p>
                      <p className='contact_info mobileHidden'>пом. I, ком. 65, эт. 1</p>

                      <p className='contact_info desktopHidden'>Россия, г. Москва, 107076, ул.</p>
                      <p className='contact_info desktopHidden'>Богородский Вал, д. 3, стр. 32, пом. I,</p>
                      <p className='contact_info desktopHidden'>ком. 65, эт. 1</p>
                  </div>
                  <div className='wrap_low_links_contact'>
                      <a href='tel:+74997536333' className='contact_info'>+7 499 753 63 33 (2046)</a>
                      <a href='mailto:info@o-master.ru' className='contact_info contact_mail'>info@o-master.ru</a>
                  </div>

                  <div className='wrap_social_contacts'>
                      <a href='#' className='wrap_social_contacts_links'><img src={whatsapp} /></a>
                      <a href='#' className='wrap_social_contacts_links'><img src={telegram} id='tele_low'/></a>
                  </div>
              </div>

              <div className='wrap_low_map'>
                  <img src={map} />
              </div>
          </div>
      </div>
    )

}
