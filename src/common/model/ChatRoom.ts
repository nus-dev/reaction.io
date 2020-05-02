import {User} from "./User";
import {Message} from "./Message";

export abstract class ChatRoom {
    private users: Array<User>;
    private messages: Array<Message>;
    
    public sendMessage(user: User, message: Message): void {
        //
    }

    // public inviteUser(invitedUser: User, invitingUser: User): void {
    //     //
    // }

    public joinUser(user: User): void {
        //
    }

    public leaveUser(user: User): void {
        //
    }
}