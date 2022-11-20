import React from "react";
const partner1 = '../../images/Group 400.svg';
const partner2 = '../../images/Group 401.svg';
const partner3 = '../../images/Group 402.svg';
const partner4 = '../../images/Group 403.svg';
export const Partners = () => {
    return (React.createElement("div", { className: 'wrap_partners' },
        React.createElement("div", { className: 'partners' },
            React.createElement("p", { className: 'big_title_main' }, "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B"),
            React.createElement("a", { href: "#", className: 'partners_links' },
                React.createElement("img", { src: partner1 })),
            React.createElement("a", { href: "#", className: 'partners_links' },
                React.createElement("img", { src: partner2 })),
            React.createElement("a", { href: "#", className: 'partners_links' },
                React.createElement("img", { src: partner3 })),
            React.createElement("a", { href: "#", className: 'partners_links' },
                React.createElement("img", { src: partner4 })))));
};
