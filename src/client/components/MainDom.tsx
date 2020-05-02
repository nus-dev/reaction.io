import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChatArea } from "./channel/ChatArea";

class MainDOM {
    public render(): void {
        ReactDOM.render(
            <ChatArea />,
            document.getElementById("example")
        );
    }
}

export default new MainDOM();
