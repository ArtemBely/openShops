import React, { useState } from "react";
var arr = [0];
export const Description = (props) => {
    const [count, setCount] = useState(1);
    const increaseCount = () => { setCount((prevState) => (prevState + 1)); arr.push(count); };
    //useEffect(() => { arr.push(count) }, [count]);
    const returnFields = () => {
        return (React.createElement("div", null, arr.map((key) => (React.createElement("div", null,
            React.createElement("p", { className: 'post_name' },
                "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ",
                key + 1),
            React.createElement("input", { type: 'text', name: 'descriptionTitle', form: 'projectsForm', required: true, className: 'main_characteristics_input' }),
            React.createElement("p", { className: 'post_name special_descr' },
                "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ",
                key + 1),
            React.createElement("textarea", { name: 'descriptionTxt', form: 'projectsForm', required: true, className: 'main_characteristics_area' }))))));
    };
    return (React.createElement("div", null,
        React.createElement("p", { className: 'post_name bold_name' }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"),
        returnFields(),
        React.createElement("p", { className: 'post_name add_block', onClick: increaseCount },
            React.createElement("span", null, "+"),
            " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u043E\u043A")));
};
