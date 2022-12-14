import React, { useState, useEffect } from "react";
export const Form = () => {
    const [err, setErr] = useState('');
    useEffect(() => {
        if (typeof window != "undefined") {
            setErr(window.__INITIAL_ERRORS__[0]);
            console.log(window.__INITIAL_ERRORS__);
        }
    });
    return (React.createElement("div", { className: 'wrap_form' },
        React.createElement("div", { className: 'form_inside' },
            React.createElement("form", { method: 'POST', action: '/login/signin', id: 'signinForm', style: { position: 'absolute' } }),
            React.createElement("p", { className: 'admin_txt' }, "\u041A\u0430\u0431\u0438\u043D\u0435\u0442 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430"),
            React.createElement("p", { className: 'login_txt' }, "\u041B\u043E\u0433\u0438\u043D"),
            React.createElement("p", { className: 'login_txt' }, "\u041F\u0430\u0440\u043E\u043B\u044C"),
            React.createElement("input", { type: 'email', name: 'email', form: 'signinForm', required: true, className: 'login_inputs email_inp' }),
            React.createElement("input", { type: 'password', name: 'password', form: 'signinForm', required: true, className: 'login_inputs pass_inp' }),
            React.createElement("button", { className: 'login_btn', form: 'signinForm', type: 'submit' }, "\u0412\u0445\u043E\u0434"),
            React.createElement("p", { style: { color: 'red' } }, err))));
};
