import * as React from "react";

export interface MessageProps {
    key: string;
    sendDate: Date;
    sendUser: string,
    text: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class MessageDom extends React.Component<MessageProps, {}> {
    render() {
        return <div>
            [{this.props.sendDate.toString()}] {this.props.sendUser}: {this.props.text}
        </div>;
    }
}