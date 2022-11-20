import React from "react";
const telegram = "../../../images/icon-park-outline_telegram.svg";
const whatsapp = "../../../images/Vector-4.svg";
export const Contact = () => {
    return (React.createElement("div", { className: 'wrap_contact' },
        React.createElement("div", { className: 'contact' },
            React.createElement("div", { className: 'wrap_contacts_inside' },
                React.createElement("div", null,
                    React.createElement("p", { className: 'contact_title' }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
                    React.createElement("p", { className: 'contact_info' }, "\u0420\u043E\u0441\u0441\u0438\u044F, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430,"),
                    React.createElement("p", { className: 'contact_info' }, "107076, \u0443\u043B. \u0411\u043E\u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0438\u0439 \u0412\u0430\u043B, \u0434. 3, \u0441\u0442\u0440. 32,"),
                    React.createElement("p", { className: 'contact_info' }, "\u043F\u043E\u043C. I, \u043A\u043E\u043C. 65, \u044D\u0442. 1")),
                React.createElement("div", { className: 'wrap_low_links_contact' },
                    React.createElement("a", { href: 'tel:+74997536333', className: 'contact_info' }, "+7 499 753 63 33 (2046)"),
                    React.createElement("a", { href: 'mailto:info@o-master.ru', className: 'contact_info' }, "info@o-master.ru")),
                React.createElement("div", { className: 'wrap_social_contacts' },
                    React.createElement("a", { href: '#', className: 'wrap_social_contacts_links' },
                        React.createElement("img", { src: whatsapp })),
                    React.createElement("a", { href: '#', className: 'wrap_social_contacts_links' },
                        React.createElement("img", { src: telegram, id: 'tele_low' })))),
            React.createElement("div", { className: 'wrap_low_map' }))));
};
