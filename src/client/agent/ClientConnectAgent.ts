import * as socket from 'socket.io-client';

export class ClientConnectAgent {
    private static socket: SocketIOClient.Socket;

    public static getSocket(): SocketIOClient.Socket {
        return this.socket;
    }

    public static connect(): void {
        this.socket = socket();
    }

    public static disconnect(): void {
        this.socket = undefined;
    }
}