import React from "react";
// import { Screen1 } from "./Screen1";
import { Screen2 } from "./Screen2";
import { Screen3 } from "./Screen3";
import { Screen4 } from "./Screen4";
import { Screen5 } from "./Screen5";
import { Screen6 } from "./Screen6";
import Screen7 from "./Screen7";
// import { Screen6 } from "./Screen6";

interface iState {
  count: number;
}

class Screen extends React.Component<{}, iState> {
  constructor(iState: any) {
    super(iState);

    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    if (typeof window != "undefined") {
      this.setState({
        count: Number(window.localStorage.getItem("count")) + 1,
      });
      window.localStorage.setItem(
        "count",
        JSON.stringify(
          Number(window.localStorage.getItem("count")) + 1 >= 6
            ? 1
            : Number(window.localStorage.getItem("count")) + 1
        )
      );
    }
  }

  returnScreen = () => {
    return this.state.count == 1 ? (
      <Screen2 />
    ) : this.state.count == 2 ? (
      <Screen3 />
    ) : this.state.count == 3 ? (
      <Screen4 />
    ) : this.state.count == 4 ? (
      <Screen5 />
    ) : this.state.count == 5 ? (
      <Screen7 />
    ) : (
      <Screen2 />
    );
  };

  render() {
    return <div className="wrap_screen">{this.returnScreen()}</div>;
  }
}
export default Screen;
