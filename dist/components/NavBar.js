import React, { useState, useEffect } from "react";
export const NavBar = () => {
    const [currentPath, setCurrentPath] = useState('');
    useEffect(() => {
        if (typeof window != "undefined") {
            setCurrentPath(window.location.pathname == '/contacts' ? 'Контакты' :
                window.location.pathname == '/about' ? 'О нас' :
                    window.location.pathname == '/about/' + window.location.pathname.split('/').pop() ? 'О нас → Название вакансии' :
                        window.location.pathname == '/projects' ? 'Проекты' :
                            window.location.pathname == '/projects/' + window.location.pathname.split('/').pop() ? 'Проекты → Архитектурно-градостроительная концепция многофункционального комплекса с подземной автостоянкой на Виноградной улице' :
                                window.location.pathname == '/news' ? 'Новости' :
                                    window.location.pathname == '/news/' + window.location.pathname.split('/').pop() ? 'Новости → Название новости' : '');
        }
    }, []);
    return (React.createElement("div", { className: 'wrap_navbar' },
        React.createElement("div", { className: 'navbar' },
            React.createElement("p", { className: 'navbar_style' },
                "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u2192 ",
                currentPath))));
};
