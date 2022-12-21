import React from 'react';
import HeaderAdmin from './HeaderAdmin';
import { NewForm } from './NewForm';
function MainPublication() {
    return (React.createElement("p", { className: 'wrap_main_page' },
        React.createElement(HeaderAdmin, null),
        React.createElement(NewForm, null)));
}
export default MainPublication;
