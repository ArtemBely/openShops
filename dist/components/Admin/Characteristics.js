import React, { useState, useEffect } from "react";
var arr = [0];
export const Characteristics = (props) => {
    const [count, setCount] = useState(1);
    const [name, setData] = useState({
        mainName: '',
        mainDescription: ''
    });
    const increaseCount = () => {
        setCount((prevState) => (prevState + 1));
        arr.push(count);
    };
    useEffect(() => {
        /*arr.push(count);*/
        if (typeof window != "undefined" && window.location.pathname.split('/').length == 4)
            arr.pop();
    }, []);
    const handleChange = (e) => {
        setData(Object.assign(Object.assign({}, name), { [e.target.name]: e.target.value }));
        console.log(e.target.value);
    };
    //existed values
    const returnFields = () => {
        if (props.val && props.val != null)
            return (React.createElement("div", null, props.val[0].map((item, key) => (React.createElement("div", null,
                React.createElement("p", { className: 'post_name' },
                    "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ",
                    key + 1),
                React.createElement("input", { type: 'text', name: 'mainName', form: 'projectsForm', value: props.val ? props.val[0][key] : undefined, onChange: handleChange, required: true, className: 'main_characteristics_input' }),
                React.createElement("p", { className: 'post_name special_descr' },
                    "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ",
                    key + 1),
                React.createElement("input", { type: 'text', name: 'mainDescription', form: 'projectsForm', value: props.val ? props.val[1][key] : undefined, onChange: handleChange, required: true, className: 'main_characteristics_input' }))))));
        return;
    };
    //new values
    const returnNewFields = () => {
        if (props)
            return (React.createElement("div", null, arr.map((key) => (React.createElement("div", null,
                React.createElement("p", { className: 'post_name' },
                    "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ",
                    key + (props.val && props.val != null ? props.val[0].length : 1)),
                React.createElement("input", { type: 'text', name: 'mainName', form: 'projectsForm', required: true, className: 'main_characteristics_input' }),
                React.createElement("p", { className: 'post_name special_descr' },
                    "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ",
                    key + (props.val && props.val != null ? props.val[0].length : 1)),
                React.createElement("input", { type: 'text', name: 'mainDescription', form: 'projectsForm', required: true, className: 'main_characteristics_input' }))))));
        return;
    };
    return (React.createElement("div", null,
        React.createElement("p", { className: 'post_name bold_name' }, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"),
        returnFields(),
        returnNewFields(),
        React.createElement("p", { className: 'post_name add_block', onClick: increaseCount },
            React.createElement("span", null, "+"),
            " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u043E\u043A")));
};
