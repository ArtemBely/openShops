import React, { useEffect, useState, useRef } from "react";
import MobileMenu from "./MobileMenu";
const logo = "../../images/Frame 1.svg";
const spec_screen_logo = "../../images/Frame 1 — копия 3.svg";
const white_logo = "../../images/Frame 1 — копия.svg";
const contact_header = "../../images/Frame 1 — копия 4.svg";
export const Header = () => {
    const [imgIndicate, setImg] = useState({});
    const [headerIndicate, setHeader] = useState({});
    const [contactIndicate, setContact] = useState({});
    const [whiteHeader, setWhiteHeader] = useState({});
    const [display, showDisplay] = useState(false);
    const middleArrow = useRef();
    const leftArrow = useRef();
    const rightArrow = useRef();
    const stableHeader = useRef();
    useEffect(() => {
        if (typeof window != "undefined" && window.location.pathname == "/") {
            document.body.style.backgroundColor = "#010101";
            setImg(true);
            if (window.localStorage.getItem("count") == "6") {
                setHeader(false);
            }
            else {
                setHeader(true);
            }
        }
        else {
            setImg(false);
        }
        if (typeof window != "undefined" &&
            window.location.pathname == "/contacts") {
            document.body.style.backgroundColor = "#010101";
            setContact(true);
        }
        else {
            setContact(false);
        }
        if ((typeof window != "undefined" &&
            (window.location.pathname == "/about" ||
                window.location.pathname ==
                    "/about/" + window.location.pathname.split("/").pop() ||
                window.location.pathname == "/projects")) ||
            window.location.pathname ==
                "/projects/" + window.location.pathname.split("/").pop() ||
            window.location.pathname == "/news" ||
            window.location.pathname ==
                "/news/" + window.location.pathname.split("/").pop()) {
            document.body.style.backgroundColor = "white";
            setWhiteHeader(true);
        }
        else {
            setWhiteHeader(false);
        }
    }, []);
    const changeBurger = () => {
        leftArrow.current.classList.toggle("leftRotate");
        middleArrow.current.classList.toggle("dispNone");
        rightArrow.current.classList.toggle("rightRotate");
        stableHeader.current.classList.toggle("fixedHeader");
        showDisplay((prevState) => !prevState);
    };
    return (React.createElement("div", { className: "wrap_header", style: { backgroundColor: whiteHeader ? "white" : "transparent" } },
        React.createElement("div", { className: "header", ref: stableHeader },
            React.createElement("a", { href: "/" },
                React.createElement("img", { src: !headerIndicate
                        ? spec_screen_logo
                        : imgIndicate
                            ? logo
                            : contactIndicate
                                ? contact_header
                                : white_logo, id: "logo" })),
            React.createElement("div", { className: "wrap_menu" },
                React.createElement("a", { href: "/about", className: "menu_links", 
                    // activeClassName="active_menu_links"
                    style: {
                        color: whiteHeader
                            ? "#010101"
                            : headerIndicate
                                ? "white"
                                : "#2f4666",
                    } }, "\u041E \u043D\u0430\u0441"),
                React.createElement("a", { href: "/projects", className: "menu_links", 
                    // activeClassName="active_menu_links"
                    style: {
                        color: whiteHeader
                            ? "#010101"
                            : headerIndicate
                                ? "white"
                                : "#2f4666",
                    } }, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"),
                React.createElement("a", { href: "/contacts", className: "menu_links", 
                    // activeClassName="active_menu_links"
                    style: {
                        color: whiteHeader
                            ? "#010101"
                            : headerIndicate
                                ? "white"
                                : "#2f4666",
                    } }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
            React.createElement("div", { className: "burger", onClick: changeBurger },
                React.createElement("p", { className: "each_burger_span", style: {
                        backgroundColor: display
                            ? "white"
                            : whiteHeader
                                ? "#010101"
                                : headerIndicate
                                    ? "white"
                                    : "#2f4666",
                    }, ref: leftArrow }),
                React.createElement("p", { className: "each_burger_span", style: {
                        backgroundColor: display
                            ? "white"
                            : whiteHeader
                                ? "#010101"
                                : headerIndicate
                                    ? "white"
                                    : "#2f4666",
                    }, ref: middleArrow }),
                React.createElement("p", { className: "each_burger_span", style: {
                        backgroundColor: display
                            ? "white"
                            : whiteHeader
                                ? "#010101"
                                : headerIndicate
                                    ? "white"
                                    : "#2f4666",
                    }, ref: rightArrow })),
            React.createElement(MobileMenu, { display: display, changeBurger: changeBurger }))));
};
