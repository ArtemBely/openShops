import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Request } from "./Request";
import { Partners } from "./Partners";
import { Buildings } from "./Buildings";
import { Detailed } from "./Detailed";
import Screen from "./Screen";
function Main() {
    return (React.createElement("div", { className: "wrap_main_page" },
        React.createElement(Header, null),
        React.createElement(Screen, null),
        React.createElement(Detailed, null),
        React.createElement(Buildings, null),
        React.createElement(Partners, null),
        React.createElement(Request, null),
        React.createElement(Footer, null)));
}
export default Main;
