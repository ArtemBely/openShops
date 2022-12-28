import React from "react";
// import { Screen1 } from "./Screen1";
import { Screen2 } from "./Screen2";
import { Screen3 } from "./Screen3";
import { Screen4 } from "./Screen4";
import { Screen5 } from "./Screen5";
import Screen7 from "./Screen7";
class Screen extends React.Component {
    constructor(iState) {
        super(iState);
        this.returnScreen = () => {
            return this.state.count == 1 ? (React.createElement(Screen2, null)) : this.state.count == 2 ? (React.createElement(Screen3, null)) : this.state.count == 3 ? (React.createElement(Screen4, null)) : this.state.count == 4 ? (React.createElement(Screen5, null)) : this.state.count == 5 ? (React.createElement(Screen7, null)) : (React.createElement(Screen2, null));
        };
        this.state = {
            count: 1,
        };
    }
    componentDidMount() {
        if (typeof window != "undefined") {
            this.setState({
                count: Number(window.localStorage.getItem("count")) + 1,
            });
            window.localStorage.setItem("count", JSON.stringify(Number(window.localStorage.getItem("count")) + 1 >= 6
                ? 1
                : Number(window.localStorage.getItem("count")) + 1));
        }
    }
    render() {
        return React.createElement("div", { className: "wrap_screen" }, this.returnScreen());
    }
}
export default Screen;
