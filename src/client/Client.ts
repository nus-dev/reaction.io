import MainController from './controller/MainController';
import MainDOM from './components/MainDom';
import { Message } from '../common/model/Message';
import { User } from '../common/model/User';
import { ChatAgent } from './agent/ChatAgent';

MainDOM.render();

setTimeout(() => MainController.connect(), 1000);
setTimeout(() => ChatAgent.addOnReceiveMessage((message: Message) => {
    console.log(`message 받음!! ${JSON.stringify(message)}`)
}), 1500);
setTimeout(() => MainController.sendMessage(new Message(
    new User(
        'userid', 'username'
    ), 'text'
)), 2000);