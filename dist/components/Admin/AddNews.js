import React, { useEffect, useState } from "react";
import { defineUpdate } from './defineUpdate';
export const AddNews = (props) => {
    const [defineNews, setDefineNews] = useState('');
    const [name, setData] = useState({
        title: '',
        description: '',
        tag: ''
    });
    useEffect(() => {
        if (props.data) {
            setData({ title: props.data.title, tag: props.data.tag, description: props.data.description });
        }
        if (typeof window != "undefined" && window.location.pathname.split('/')[2] == 'news') {
            setDefineNews('news');
        }
        else if (typeof window != "undefined" && window.location.pathname.split('/')[2] == 'vacancies') {
            setDefineNews('vacancies');
        }
    }, []);
    const handleChange = (e) => {
        setData(Object.assign(Object.assign({}, name), { [e.target.name]: e.target.value }));
    };
    return (React.createElement("div", { style: { display: defineNews == 'vacancies' || defineNews == 'news' ? 'block' : 'none' } },
        React.createElement("form", { action: `/publication/${defineUpdate()}`, method: 'POST', id: defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm', encType: "multipart/form-data" }),
        React.createElement("p", { className: 'post_name' },
            "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 ",
            defineNews == 'vacancies' ? 'вакансии' : 'новости'),
        React.createElement("input", { type: 'text', name: 'title', form: defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm', value: props.data ? name.title : undefined, onChange: handleChange, required: true, className: 'news_post_input' }),
        React.createElement("p", { className: 'post_name' }, "\u0414\u0430\u0442\u0430 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 / \u0422\u044D\u0433"),
        React.createElement("input", { type: 'text', name: 'tag', form: defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm', value: props.data ? name.tag : undefined, onChange: handleChange, required: true, className: 'news_post_input' }),
        React.createElement("p", { className: 'post_name' },
            "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ",
            defineNews == 'vacancies' ? 'вакансии' : 'новости'),
        React.createElement("textarea", { className: 'post_area', form: defineNews == 'vacancies' ? 'vacancyForm' : 'newsForm', value: props.data ? name.description : undefined, onChange: handleChange, required: true, name: 'description' })));
};
