import React, { useState, useEffect } from "react";
import { categories } from './categories';
import { Characteristics } from "./Characteristics";
import { Description } from "./Description";
import { Technical } from "./Technical";
import { defineUpdate } from './defineUpdate';
let data1;
export const AddProject = (props) => {
    if (typeof window != "undefined") {
        data1 = window.__INITIAL_INFO__;
    }
    const [name, setData] = useState({
        title: '',
        category: '',
        secondString: '',
        tag: ''
    });
    useEffect(() => {
        if (props.data) {
            setData({ title: props.data.title, category: props.data.category,
                secondString: props.data.secondString, tag: props.data.tag });
        }
    }, []);
    const handleChange = (e) => {
        setData(Object.assign(Object.assign({}, name), { [e.target.name]: e.target.value }));
    };
    return (React.createElement("div", { className: 'wrap_post_project', style: { display: typeof window != "undefined" && window.location.pathname.split('/')[2] == 'projects' ? 'grid' : 'none' } },
        React.createElement("form", { action: `/publication/${defineUpdate()}`, method: 'POST', id: 'projectsForm', encType: "multipart/form-data" }),
        React.createElement("div", null,
            React.createElement("p", { className: 'post_name' }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"),
            React.createElement("input", { type: 'text', name: 'title', form: 'projectsForm', value: props.data ? name.title : undefined, required: true, onChange: handleChange, className: 'news_post_input' })),
        React.createElement("div", null,
            React.createElement("p", { className: 'post_name' }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"),
            React.createElement("select", { className: 'news_post_input', name: 'category', required: true, form: 'projectsForm', onChange: handleChange, id: 'select_category' }, categories.map((item, key) => (React.createElement("option", { key: key, value: key == 0 ? '' : item.name, disabled: key == 0 ? true : false, selected: props.data && props.data.category == item.name ? true : false }, item.name))))),
        React.createElement("div", null,
            React.createElement("p", { className: 'post_name' }, "\u0412\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u0440\u0435\u0432\u044C\u044E"),
            React.createElement("input", { type: 'text', name: 'secondString', form: 'projectsForm', value: props.data ? name.secondString : undefined, required: true, onChange: handleChange, className: 'news_post_input' })),
        React.createElement("div", null,
            React.createElement("p", { className: 'post_name' }, "\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 / \u0422\u044D\u0433"),
            React.createElement("input", { type: 'text', name: 'tag', form: 'projectsForm', required: true, value: props.data ? name.tag : undefined, onChange: handleChange, className: 'news_post_input' })),
        React.createElement("div", { className: 'wrap_main_project_issues' },
            React.createElement(Characteristics, { val: data1 ? data1.mainArray : null }),
            React.createElement(Technical, { val: data1 ? data1.technicalArray : null }),
            React.createElement(Description, { val: data1 ? data1.descriptionArray : null }))));
};
