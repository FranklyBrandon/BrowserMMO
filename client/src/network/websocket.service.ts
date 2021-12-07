import { ENTRY_URL} from "../configuration/config.constants"
import { Websocket, WebsocketBuilder } from "websocket-ts/lib";

export class WebSocketService {
    public websocket: Websocket;

    //private actionMap: IActionMap;

    constructor() {

    }

    public setActionMap(/*actionMap: IActionMap*/) {
        //this.actionMap = actionMap;
    }

    public connect(name: string): void { 
        this.websocket  = new WebsocketBuilder(ENTRY_URL!)
            .onOpen((i, ev) => this.onOpen(name))
            .onClose((i, ev) => { console.log("connection closed") })
            .onError((i, ev) => { console.log("connection error") })
            .onMessage((i, ev) => this.onMessgae(i,ev))
            .onRetry((i, ev) => { console.log("retry") })
            .build();
    }

    public send(opcode: string, data: string) { 
        /*
        let packet: Packet<string> =  {
            opcode,
            data
        }

        this.websocket.send(JSON.stringify(packet));
        */
    }

    public onMessgae(socket: Websocket, event: MessageEvent<any>) {
        /*
        if(this.actionMap) {
            this.actionMap.invoke(event.data);
        }
        */
    }

    public onOpen(name: string) {
        console.log("A websocket connection has been established")
        /*
        this.send(OPCODES.NAME_ENTRY, name);
        */
    }
}

//https://github.com/jjxxs/websocket-ts#readme
// Endianess: https://blog.mgechev.com/2015/02/06/parsing-binary-protocol-data-javascript-typedarrays-blobs/
// Typed Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
// Converting to and from using array buffer!: https://stackoverflow.com/questions/15761790/convert-a-32bit-integer-into-4-bytes-of-data-in-javascript
// Reading binary data: https://stackoverflow.com/questions/11554006/javascript-arraybuffer-whats-it-for
