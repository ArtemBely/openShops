import React from "react";
import { NavLink } from "react-router-dom";
const white_logo = "../../images/logo_footer.svg";
const telegram = "../../images/icon-park-outline_telegram.svg";
const phone = "../../images/ant-design_phone-filled.svg";
const letter = "../../images/Vector-3.svg";
const whatsapp = "../../images/Vector-4.svg";

export const Footer = () => {
  return (
    <div className="wrap_footer">
      <div className="footer">
        <img src={white_logo} />
        <div className="footer-top">
          <div className="foot_links middle_foot">
            <p className="grey_link" id="projects_foot_title">
              Проекты
            </p>
            <NavLink to="/projects" className="each_other">
              Все проекты
            </NavLink>
            <NavLink to="/projects" className="each_other">
              Категория 1
            </NavLink>
            <NavLink to="/projects" className="each_other">
              Категория 2
            </NavLink>
            <NavLink to="/projects" className="each_other">
              Категория 3
            </NavLink>
            <NavLink to="/projects" className="each_other">
              Категория 4
            </NavLink>
          </div>
          <div className="foot_links footerCorrect">
            <p className="grey_link">Офис</p>
            <p className="each_address showDesctopAddress">
              107076, г. Москва, ул.
            </p>
            <p className="each_address showDesctopAddress">
              Богородский Вал, д. 3, стр. 32,
            </p>
            <p className="each_address showDesctopAddress">
              пом. I, ком. 65, эт. 1
            </p>
            <p className="each_address showPlanchetAddress">
              107076, г. Москва, ул. Богородский Вал,
            </p>
            <p className="each_address showPlanchetAddress">
              д. 3, стр. 32, пом. I, ком. 65, эт. 1
            </p>
          </div>
          <div className="foot_links">
            <p className="grey_link">Контакты</p>
            <a href="mailto:info@o-master.ru" className="links_contact">
              <p className="each_other">info@o-master.ru</p>
            </a>
            <a href="tel:+74997536333" className="links_contact">
              <p className="each_other">+7 499 753 63 33 (2046)</p>
            </a>
            <div className="wrap_social_media">
              <a href="" id="whats_link">
                <img src={whatsapp} style={{ height: 23 }} />
              </a>
              <a href="" id="tele_link">
                <img src={telegram} style={{ height: 23 }} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2022 «Открытые мастерские»</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  );
};
