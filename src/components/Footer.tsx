import React from "react";
const white_logo = "../../images/logo_footer.svg";
const telegram = "../../images/icon-park-outline_telegram.svg";
const whatsapp = "../../images/Vector-4.svg";

export const Footer = () => {
  const selectCategory = (category: string) => {
    localStorage.setItem("category", category);
  };

  return (
    <div className="wrap_footer">
      <div className="footer">
        <img src={white_logo} />
        <div className="footer-top">
          <div className="foot_links middle_foot">
            <p className="grey_link" id="projects_foot_title">
              Проекты
            </p>
            <a href="/projects" className="each_other">
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
              onClick={() => selectCategory("Общественно-деловые комплексы")}
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
              107076, г. Москва,
            </p>
            <p className="each_address showPlanchetAddress">
              ул. Богородский Вал,
            </p>
            <p className="each_address showPlanchetAddress">
              д. 3, стр. 32, пом. I, ком. 65, эт. 1
            </p>
          </div>
          <div className="foot_links">
            <p className="grey_link grey_link-contacts">Контакты</p>
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
