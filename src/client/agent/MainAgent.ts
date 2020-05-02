import { Message } from "../../common/model/Message";
import { ChatAgent } from "./ChatAgent";
import { ClientConnectAgent } from "./ClientConnectAgent";

export class MainAgent {
    public static connect(): void {
        ClientConnectAgent.connect();
    }

    public static diconnect(): void {
        ClientConnectAgent.disconnect();
    }

    public static sendMessage(message: Message): void {
        ChatAgent.sendMessage(message);
    }

    public static addOnReceiveMessage(handler: () => any): void {
        ChatAgent.addOnReceiveMessage(handler);
    }
}