import React from "react";
import { team } from './teamParticipants';
export const Team = () => {
    return (React.createElement("div", { className: 'wrap_teamBlock' },
        React.createElement("div", { className: 'teamBlock' },
            React.createElement("p", { className: 'txt_about1Title first_title', style: { gridColumn: '1 / 4' } }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"),
            team.map((participant) => (React.createElement("div", null,
                React.createElement("p", { className: 'foto1' }),
                React.createElement("p", { className: 'name_of' }, participant.name),
                React.createElement("p", { className: 'lastname_of' }, participant.title)))))));
};
