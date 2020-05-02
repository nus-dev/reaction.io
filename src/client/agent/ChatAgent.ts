import { Message } from "../../common/model/Message";
import { ClientConnectAgent } from "./ClientConnectAgent";
import { SocketEvent } from "../../common/types/SocketEvent";

export class ChatAgent {
    private static onReceiveMessage: (message: Message) => any = () => {};

    public static sendMessage(message: Message): void {
        const socket: SocketIOClient.Socket = ClientConnectAgent.getSocket();
        console.log(message);
        // socket.emit(SocketEvent.POST_MESSAGE, JSON.stringify(message));
        socket.emit(SocketEvent.POST_MESSAGE, message);
    }

    public static addOnReceiveMessage(handler: (message: Message) => any): void {
        if (handler) {
            this.onReceiveMessage = handler;
            const socket: SocketIOClient.Socket = ClientConnectAgent.getSocket();
            socket.on(SocketEvent.RECEIVE_MESSAGE, (message: Message) => this.onReceiveMessage(message));
        }
    }
}