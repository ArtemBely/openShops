import React, { useEffect, useState } from "react";
export const Publication = () => {
    const [txtPublic, setTxtPublic] = useState('проектов');
    const [txtBelow, setTxtBelow] = useState('Добавить новый проект');
    useEffect(() => {
        if (typeof window != "undefined") {
            if (window.location.pathname.split('/').pop() == 'projects') {
                setTxtPublic('проектов');
                setTxtBelow('Добавить новый проект');
            }
            if (window.location.pathname.split('/').pop() == 'news') {
                setTxtPublic('новостей');
                setTxtBelow('Добавить новую новость');
            }
            if (window.location.pathname.split('/').pop() == 'vacancies') {
                setTxtPublic('вакансий');
                setTxtBelow('Создать новую вакансию');
            }
            if (window.location.pathname.split('/').pop() == 'team') {
                setTxtPublic('команды');
                setTxtBelow('Добавить нового участника команды');
            }
        }
    });
    return (React.createElement("div", { className: 'wrap_public_txt' },
        React.createElement("p", { className: 'txtPublic' },
            "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F ",
            txtPublic),
        React.createElement("p", { className: 'txtBelow' },
            React.createElement("span", null, "+"),
            " ",
            txtBelow)));
};
