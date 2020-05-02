import { Message } from "../../common/model/Message";
import { MainAgent } from "../agent/MainAgent";

class MainController {
    constructor() {
        //
    }

    public connect(): void {
        MainAgent.connect();
    }

    public sendMessage(message: Message): void {
        MainAgent.sendMessage(message);
    }
}

export default new MainController();