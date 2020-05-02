import * as socket from 'socket.io';
import * as http from 'http';
import { Message } from '../../common/model/Message';
import { SocketEvent } from '../../common/types/SocketEvent';
import { PostMessage } from '../postMessage/PostMessage';

export class ServerConnectAgent {
    private static socket: SocketIO.Socket;

    public static getSocket(): SocketIO.Socket {
        return this.socket;
    }

    public static connect(httpServer: http.Server): void {
        socket(httpServer).sockets.on('connection', (socket: socket.Socket) => {
            this.socket = socket;
            socket.on(SocketEvent.POST_MESSAGE, (message: Message) => PostMessage.postMessage(message));
        });
    }

    public static disconnect(): void {
        this.socket = undefined;
    }
}