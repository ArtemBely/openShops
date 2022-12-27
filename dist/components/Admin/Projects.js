import React from "react";
const close = '../../../images/Vector.svg';
const fone = '../../../images/Rectangle 205.png';
export const Projects = (props) => {
    return (React.createElement("div", { className: 'each_project' },
        React.createElement("p", { className: 'date_of_publication', style: { opacity: props.page == 'team' ? 0 : 1 } }, props.page == 'team' ? 'tag' : props.item.tag),
        React.createElement("a", { href: `/publication/${props.page}/delete/${props.item._id}`, className: 'each_project_link' },
            React.createElement("img", { src: close })),
        React.createElement("a", { href: `/publication/${props.page}/${props.item._id}`, className: 'wrap_each_change' },
            React.createElement("div", { className: 'wrap_each_publication' },
                React.createElement("p", { className: 'wrap_inside_each_publication', style: { display: props.page == 'vacancies' ? 'none' : 'block' } },
                    React.createElement("img", { src: props.item.noExchangeFile ? `../../../uploads/${props.item.noExchangeFile}` : fone })),
                React.createElement("p", { className: 'title_of_publication', style: { display: props.page == 'projects' ? 'block' : 'none' } }, props.item.title),
                React.createElement("div", { className: 'wrap_each_admin_post', style: { display: props.page == 'news' ? 'block' : 'none' } },
                    React.createElement("p", { className: 'name_vacancy' }, props.item.title),
                    React.createElement("p", { className: 'position_vacancy' }, props.item.description)),
                React.createElement("div", { className: 'wrap_each_admin_post', style: { display: props.page == 'vacancies' ? 'block' : 'none' } },
                    React.createElement("p", { className: 'name_vacancy' }, props.item.title),
                    React.createElement("p", { className: 'position_vacancy' }, props.item.description)),
                React.createElement("div", { className: 'wrap_each_admin_post', style: { display: props.page == 'team' ? 'block' : 'none' } },
                    React.createElement("p", { className: 'name_vacancy' }, props.item.name),
                    React.createElement("p", { className: 'position_vacancy' }, props.item.title))))));
};
