import React, { useEffect, useState } from "react";
let team;
export const Team = () => {
    if (typeof window != "undefined") {
        team = window.__INITIAL_TEAM__;
    }
    const [allTeam, setAllTeam] = useState([{}]);
    useEffect(() => {
        if (typeof window != "undefined") {
            if (window.location.pathname.split("/").pop() == "about") {
                setAllTeam(team);
            }
        }
    });
    return (React.createElement("div", { className: "wrap_teamBlock" },
        React.createElement("div", { className: "teamBlock" },
            React.createElement("p", { className: "txt_about1Title first_title", id: "team_spec_title", style: { gridColumn: "1 / 4" } }, "\u041A\u043E\u043C\u0430\u043D\u0434\u0430"),
            allTeam.map((participant) => (React.createElement("div", null,
                React.createElement("img", { src: `../../../uploads/${participant.noExchangeFile}`, className: "foto1" }),
                React.createElement("p", { className: "name_of" }, participant.name),
                React.createElement("p", { className: "lastname_of" }, participant.title)))))));
};
