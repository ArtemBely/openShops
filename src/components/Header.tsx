import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
const logo = "../../images/Frame 1.svg";
const spec_screen_logo = "../../images/Frame 1 — копия 3.svg";
const white_logo = "../../images/Frame 1 — копия.svg";
const contact_header = "../../images/Frame 1 — копия 4.svg";

declare global {
  interface Window {}
}

export const Header = () => {
  const [imgIndicate, setImg] = useState({});
  const [headerIndicate, setHeader] = useState({});
  const [contactIndicate, setContact] = useState({});
  const [whiteHeader, setWhiteHeader] = useState({});
  const [display, showDisplay] = useState(false);

  const middleArrow: any = useRef();
  const leftArrow: any = useRef();
  const rightArrow: any = useRef();
  const stableHeader: any = useRef();

  useEffect(() => {
    if (typeof window != "undefined" && window.location.pathname == "/") {
      document.body.style.backgroundColor = "#010101";
      setImg(true);
      if (window.localStorage.getItem("count") == "6") {
        setHeader(false);
      } else {
        setHeader(true);
      }
    } else {
      setImg(false);
    }

    if (
      typeof window != "undefined" &&
      window.location.pathname == "/contacts"
    ) {
      document.body.style.backgroundColor = "#010101";
      setContact(true);
    } else {
      setContact(false);
    }

    if (
      (typeof window != "undefined" &&
        (window.location.pathname == "/about" ||
          window.location.pathname ==
            "/about/" + window.location.pathname.split("/").pop() ||
          window.location.pathname == "/projects")) ||
      window.location.pathname ==
        "/projects/" + window.location.pathname.split("/").pop() ||
      window.location.pathname == "/news" ||
      window.location.pathname ==
        "/news/" + window.location.pathname.split("/").pop()
    ) {
      document.body.style.backgroundColor = "white";
      setWhiteHeader(true);
    } else {
      setWhiteHeader(false);
    }
  }, []);

  const changeBurger = (): any => {
    leftArrow.current.classList.toggle("leftRotate");
    middleArrow.current.classList.toggle("dispNone");
    rightArrow.current.classList.toggle("rightRotate");
    stableHeader.current.classList.toggle("fixedHeader");
    showDisplay((prevState) => !prevState);
  };

  return (
    <div
      className="wrap_header"
      style={{ backgroundColor: whiteHeader ? "white" : "transparent" }}
    >
      <div className="header" ref={stableHeader}>
        <NavLink to="/">
          <img
            src={
              !headerIndicate
                ? spec_screen_logo
                : imgIndicate
                ? logo
                : contactIndicate
                ? contact_header
                : white_logo
            }
            id="logo"
          />
        </NavLink>
        <div className="wrap_menu">
          <NavLink
            to="/about"
            className="menu_links"
            activeClassName="active_menu_links"
            style={{
              color: whiteHeader
                ? "#010101"
                : headerIndicate
                ? "white"
                : "#2f4666",
            }}
          >
            О нас
          </NavLink>
          <NavLink
            to="/projects"
            className="menu_links"
            activeClassName="active_menu_links"
            style={{
              color: whiteHeader
                ? "#010101"
                : headerIndicate
                ? "white"
                : "#2f4666",
            }}
          >
            Проекты
          </NavLink>
          <NavLink
            to="/news"
            className="menu_links"
            activeClassName="active_menu_links"
            style={{
              color: whiteHeader
                ? "#010101"
                : headerIndicate
                ? "white"
                : "#2f4666",
            }}
          >
            Новости
          </NavLink>
          <NavLink
            to="/contacts"
            className="menu_links"
            activeClassName="active_menu_links"
            style={{
              color: whiteHeader
                ? "#010101"
                : headerIndicate
                ? "white"
                : "#2f4666",
            }}
          >
            Контакты
          </NavLink>
        </div>
        <div className="burger" onClick={changeBurger}>
          <p
            className="each_burger_span"
            style={{
              backgroundColor: display
                ? "white"
                : whiteHeader
                ? "#010101"
                : headerIndicate
                ? "white"
                : "#2f4666",
            }}
            ref={leftArrow}
          ></p>
          <p
            className="each_burger_span"
            style={{
              backgroundColor: display
                ? "white"
                : whiteHeader
                ? "#010101"
                : headerIndicate
                ? "white"
                : "#2f4666",
            }}
            ref={middleArrow}
          ></p>
          <p
            className="each_burger_span"
            style={{
              backgroundColor: display
                ? "white"
                : whiteHeader
                ? "#010101"
                : headerIndicate
                ? "white"
                : "#2f4666",
            }}
            ref={rightArrow}
          ></p>
        </div>
        <MobileMenu display={display} changeBurger={changeBurger} />
      </div>
    </div>
  );
};
