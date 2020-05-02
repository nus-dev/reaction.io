import { User } from "./User";

export class Message {
    private timestamp: number;
    private sendUser: User;
    private text: string;

    constructor(sendUser: User, text: string) {
        this.sendUser = sendUser;
        this.text = text;
        this.timestamp = new Date().getTime();
    }
    // public toString(): string {
    //     return JSON.stringify(this);
    // }
}