import React from "react";
import { NavLink } from "react-router-dom";
const logo = "../../images/Frame 1.svg";
const telegram = "../../images/icon-park-outline_telegram.svg";
const phone = "../../images/ant-design_phone-filled.svg";
const letter = "../../images/Vector-3.svg";
const whatsapp = "../../images/Vector-4.svg";

interface iProps {
  display: boolean;
  changeBurger: any;
}

class MobileMenu extends React.Component<iProps, {}> {
  constructor(iProps: any) {
    super(iProps);
  }

  render() {
    const state = this.props;

    const closeMobile = () => {
      this.props.changeBurger();
    };

    const selectCategory = (category: string) => {
      localStorage.setItem("category", category);
    };

    return (
      <div
        className="wrap_mobileMenu"
        style={{
          display: state.display ? "flex" : "none",
        }}
      >
        <div className="mobile_menu">
          <div className="wrap_mobile_Elements">
            <NavLink to="/" className="mobile_logo_mobile">
              <img src={logo} id="logo" />
            </NavLink>
            <div className="burgerMobile" onClick={closeMobile}>
              <p
                className="each_burger_span leftRotate"
                style={{ backgroundColor: "white" }}
              ></p>
              <p
                className="each_burger_span dispNone"
                style={{ backgroundColor: "white" }}
              ></p>
              <p
                className="each_burger_span rightRotate"
                style={{ backgroundColor: "white" }}
              ></p>
            </div>
          </div>
          <div className="mobile_menu_links">
            <NavLink
              to="/about"
              className="menu_linksBold"
              activeClassName="active_menu_links"
            >
              О нас
            </NavLink>
            <NavLink
              to="/projects"
              className="menu_linksBold"
              activeClassName="active_menu_links"
            >
              Проекты
            </NavLink>
            <NavLink
              to="/news"
              className="menu_linksBold"
              activeClassName="active_menu_links"
            >
              Новости
            </NavLink>
            <NavLink
              to="/contacts"
              className="menu_linksBold"
              activeClassName="active_menu_links"
            >
              Контакты
            </NavLink>
          </div>

          <p className="white_line"></p>

          <div className="wrap_footer_mobile">
            <div className="footer">
              <div className="foot_links_mobile footerCorrect">
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
                  107076, г. Москва,
                </p>
                <p className="each_address showPlanchetAddress">
                  ул. Богородский Вал,
                </p>
                <p className="each_address showPlanchetAddress">
                  д. 3, стр. 32, пом. I, ком. 65, эт. 1
                </p>
              </div>
              <div className="foot_links_mobile middle_foot_mobile">
                <p className="grey_link" id="projects_foot_title">
                  Проекты
                </p>
                <a
                  href="/projects"
                  onClick={() => selectCategory("Все проекты")}
                  className="each_other"
                >
                  Все проекты
                </a>
                <a
                  href="/projects"
                  onClick={() => selectCategory("Жилые комплексы")}
                  className="each_other"
                >
                  Жилые комплексы
                </a>
                <a
                  href="/projects"
                  onClick={() =>
                    selectCategory("Общественно-деловые комплексы")
                  }
                  className="each_other"
                >
                  Общественно-деловые комплексы
                </a>
                <a
                  href="/projects"
                  onClick={() => selectCategory("Гостиничные комплексы")}
                  className="each_other"
                >
                  Гостиничные комплексы
                </a>
                <a
                  href="/projects"
                  onClick={() => selectCategory("Градостроительные концепции")}
                  className="each_other"
                >
                  Градостроительные концепции
                </a>
                <a
                  href="/projects"
                  onClick={() => selectCategory("Развлекательные комплексы")}
                  className="each_other"
                >
                  Развлекательные комплексы
                </a>
                <a
                  href="/projects"
                  onClick={() => selectCategory("Конкурсы")}
                  className="each_other"
                >
                  Конкурсы
                </a>
                <a
                  href="/projects"
                  onClick={() => selectCategory("Интерьеры")}
                  className="each_other"
                >
                  Интерьеры
                </a>
              </div>
              <div className="foot_links_mobile contacts_mobile">
                <p className="grey_link">Контакты</p>
                <a href="mailto:info@o-master.ru" className="links_contact">
                  <p className="each_other">info@o-master.ru</p>
                </a>
                <a href="tel:+74997536333" className="links_contact">
                  <p className="each_other">+7 499 753 63 33 (2046)</p>
                </a>
                <div className="wrap_social_media">
                  <a href="" id="phone_link">
                    <img src={phone} style={{ height: 22 }} />
                  </a>
                  <a href="" id="letter_link">
                    <img src={letter} style={{ height: 22 }} />
                  </a>
                  <a href="" id="whats_link">
                    <img src={whatsapp} style={{ height: 22 }} />
                  </a>
                  <a href="" id="tele_link">
                    <img src={telegram} style={{ height: 22 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MobileMenu;
