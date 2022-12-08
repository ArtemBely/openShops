import React from "react";
import { NavLink } from "react-router-dom";
const telegram = "../../images/icon-park-outline_telegram.svg";
const phone = "../../images/ant-design_phone-filled.svg";
const letter = "../../images/Vector-3.svg";
const whatsapp = "../../images/Vector-4.svg";

interface iProps {
  display: boolean
}

class MobileMenu extends React.Component<iProps, {}> {

constructor(iProps: any) {
  super(iProps);

}

render() {

  const state = this.props;

  return (
    <div className='wrap_mobileMenu' style={{
        display: state.display ? 'flex' : 'none'
     }}>
        <div className='mobile_menu'>
            <div className='mobile_menu_links'>
                <NavLink to='/about' className='menu_linksBold' activeClassName='active_menu_links' >О нас</NavLink>
                <NavLink to='/projects' className='menu_linksBold' activeClassName='active_menu_links' >Проекты</NavLink>
                <NavLink to='/news' className='menu_linksBold' activeClassName='active_menu_links' >Новости</NavLink>
                <NavLink to='/contacts' className='menu_linksBold' activeClassName='active_menu_links' >Контакты</NavLink>
            </div>
            <p className='white_line'></p>

            <div className='wrap_footer_mobile'>
                <div className='footer'>
                      <div className='foot_links_mobile footerCorrect'>
                          <p className='grey_link'>Офис</p>
                          <p className='each_address showDesctopAddress'>107076, г. Москва, ул.</p>
                          <p className='each_address showDesctopAddress'>Богородский Вал, д. 3, стр. 32,</p>
                          <p className='each_address showDesctopAddress'>пом. I, ком. 65, эт. 1</p>
                          <p className='each_address showPlanchetAddress'>107076, г. Москва, ул. Богородский Вал,</p>
                          <p className='each_address showPlanchetAddress'>д. 3, стр. 32, пом. I, ком. 65, эт. 1</p>
                      </div>
                      <div className='foot_links_mobile middle_foot_mobile'>
                          <p className='grey_link' id='projects_foot_title'>Проекты</p>
                          <NavLink to="" className='each_other'>Все проекты</NavLink>
                          <NavLink to="" className='each_other'>Категория 1</NavLink>
                          <NavLink to="" className='each_other'>Категория 2</NavLink>
                          <NavLink to="" className='each_other'>Категория 3</NavLink>
                          <NavLink to="" className='each_other'>Категория 4</NavLink>
                      </div>
                      <div className='foot_links_mobile contacts_mobile'>
                          <p className='grey_link'>Контакты</p>
                          <a href="mailto:info@o-master.ru" className='links_contact'><p className='each_other'>info@o-master.ru</p></a>
                          <a href="tel:+74997536333" className='links_contact'><p className='each_other'>+7 499 753 63 33 (2046)</p></a>
                          <div className='wrap_social_media'>
                              <a href="" id="phone_link"><img src={phone} /></a>
                              <a href="" id="letter_link"><img src={letter} /></a>
                              <a href="" id="whats_link"><img src={whatsapp} /></a>
                              <a href="" id="tele_link"><img src={telegram} /></a>
                          </div>
                      </div>
                </div>
            </div>

        </div>
    </div>
  )
}
}
export default MobileMenu;
