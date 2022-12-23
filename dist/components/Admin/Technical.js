import React, { useState, useEffect } from "react";
var arr = [0];
export const Technical = () => {
    const [count, setCount] = useState(1);
    const increaseCount = () => { setCount((prevState) => (prevState + 1)); };
    useEffect(() => {
        arr.push(count);
    }, [count]);
    const returnFields = () => {
        return (React.createElement("div", null, arr.map((key) => (React.createElement("div", null,
            React.createElement("p", { className: 'post_name' },
                "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ",
                key + 1),
            React.createElement("input", { type: 'text', className: 'main_characteristics_input', form: 'projectsForm', required: true, name: 'technicalTitle' }),
            React.createElement("p", { className: 'post_name special_descr' },
                "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ",
                key + 1),
            React.createElement("input", { type: 'text', className: 'main_characteristics_input', form: 'projectsForm', required: true, name: 'technicalDescription' }))))));
    };
    return (React.createElement("div", null,
        React.createElement("p", { className: 'post_name bold_name' }, "\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"),
        returnFields(),
        React.createElement("p", { className: 'post_name add_block', onClick: increaseCount },
            React.createElement("span", null, "+"),
            " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u043E\u043A")));
};
