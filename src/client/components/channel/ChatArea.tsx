import * as React from "react";
import { MessageDom, MessageProps } from "./Message";

export interface ChatAreaProps {
    // messages: Array<Message>;
}

export interface ChatAreaState {
    messages: Array<MessageProps>;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class ChatArea extends React.Component<ChatAreaProps, ChatAreaState> {
    constructor(props: any) {
        super(props);

        this.state = {
            messages: [{
                key: '0',
                sendDate: new Date(),
                sendUser: 'shjang',
                text: '장수홍님이 입장하셨습니다.'
            }]
        };
    }
    getInitialState() {
        return {
            messages: [] as Array<MessageProps>
        };
    }

    render() {
        const messages = this.state.messages.map((message) => {
            console.info(message);
            return <MessageDom key={message.key} sendDate={message.sendDate} sendUser={message.sendUser} text={message.text}/>
        });
        console.info(messages);
        return <div>
                {messages}
            </div>;
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             messages: this.state.messages.concat([{
    //                 key: "1",
    //                 sendDate: new Date(),
    //                 sendUser: "shjang",
    //                 text: "Hi"
    //             }])
    //         });
    //     }, 1000);

    //     setTimeout(() => {
    //         this.setState({
    //             messages: this.state.messages.concat([{
    //                 key: "2",
    //                 sendDate: new Date(),
    //                 sendUser: "hhlee",
    //                 text: "Hallo!"
    //             }])
    //         });
    //     }, 3000);

    //     setTimeout(() => {
    //         this.setState({
    //             messages: this.state.messages.concat([{
    //                 key: "3",
    //                 sendDate: new Date(),
    //                 sendUser: "shjang",
    //                 text: "I love you"
    //             }])
    //         });
    //     }, 5000);
    // }
}