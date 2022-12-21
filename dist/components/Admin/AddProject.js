import React from "react";
import { categories } from './categories';
export const AddProject = () => {
    return (React.createElement("div", { className: 'wrap_post_project', style: { display: typeof window != "undefined" && window.location.pathname.split('/').pop() == 'projects' ? 'grid' : 'none' } },
        React.createElement("div", null,
            React.createElement("p", { className: 'post_name' }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"),
            React.createElement("input", { type: 'text', className: 'news_post_input' })),
        React.createElement("div", null,
            React.createElement("p", { className: 'post_name' }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"),
            React.createElement("select", { className: 'news_post_input', id: 'select_category' }, categories.map((item, key) => (React.createElement("option", { value: key == 0 ? '' : item.name, disabled: key == 0 ? true : false }, item.name))))),
        React.createElement("div", null,
            React.createElement("p", { className: 'post_name' }, "\u0412\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u0440\u0435\u0432\u044C\u044E"),
            React.createElement("input", { type: 'text', className: 'news_post_input' })),
        React.createElement("div", null,
            React.createElement("p", { className: 'post_name' }, "\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 / \u0422\u044D\u0433"),
            React.createElement("input", { type: 'text', className: 'news_post_input' }))));
};
