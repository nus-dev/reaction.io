import { Message } from "../../common/model/Message";
import { ServerConnectAgent } from "../agent/ServerConnectAgent";
import { SocketEvent } from "../../common/types/SocketEvent";

export class PostMessage {
    public static postMessage(message: Message): void {
        console.log(`post message: ${JSON.stringify(message)}`);
        const socket: SocketIO.Socket = ServerConnectAgent.getSocket();
        socket.emit(SocketEvent.RECEIVE_MESSAGE, message);
    }
}