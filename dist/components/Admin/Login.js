import React from 'react';
import { Form } from './Form';
import HeaderAdmin from './HeaderAdmin';
function Login() {
    return (React.createElement("p", { className: 'wrap_main_page' },
        React.createElement(HeaderAdmin, null),
        React.createElement(Form, null)));
}
export default Login;
