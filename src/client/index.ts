import {HttpClient} from "tsrpc-browser";
import {serviceProto} from "../shared/protocols/serviceProto";

const client = new HttpClient(serviceProto, {
    server: 'http://127.0.0.1:3009',
    json: true,
    // logger: console
});


export {
    client
}
