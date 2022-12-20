import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import { Publication } from './Publication';
function MainAdmin() {
    return (React.createElement("p", { className: 'wrap_main_page' },
        React.createElement(HeaderAdmin, null),
        React.createElement(Publication, null)));
}
export default MainAdmin;
