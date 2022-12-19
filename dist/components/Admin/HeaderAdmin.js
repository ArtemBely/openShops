import React from 'react';
const white_logo = "../../../images/Frame 1 — копия.svg";
function HeaderAdmin() {
    return (React.createElement("div", { className: 'wrap_header_admin' },
        React.createElement("div", { className: 'header_admin' },
            React.createElement("a", { href: '/', className: 'wrap_admin_logo' },
                React.createElement("img", { src: white_logo })))));
}
export default HeaderAdmin;
