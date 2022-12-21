import React from "react";
export const AddTeam = () => {
    return (React.createElement("div", { style: { display: typeof window != "undefined" && window.location.pathname.split('/').pop() == 'team' ? 'block' : 'none' } },
        React.createElement("p", { className: 'post_name' }, "\u0418\u043C\u044F"),
        React.createElement("input", { type: 'text', className: 'post_input' }),
        React.createElement("p", { className: 'post_name' }, "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C"),
        React.createElement("input", { type: 'text', className: 'post_input' })));
};
