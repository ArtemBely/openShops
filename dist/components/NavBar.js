import React, { useState, useEffect } from "react";
export const NavBar = () => {
    const [currentPath, setCurrentPath] = useState('');
    useEffect(() => {
        if (typeof window != "undefined") {
            setCurrentPath(window.location.pathname == '/contacts' ? 'Контакты' :
                window.location.pathname == '/about' ? 'О нас' :
                    window.location.pathname == '/projects' ? 'Проекты' :
                        window.location.pathname == '/news' ? 'Новости' : '');
        }
    }, []);
    return (React.createElement("div", { className: 'wrap_navbar' },
        React.createElement("div", { className: 'navbar' },
            React.createElement("p", { className: 'navbar_style' },
                "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u2192 ",
                currentPath))));
};
