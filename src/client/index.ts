import {HttpClient} from "tsrpc-browser";
import {serviceProto} from "../shared/protocols/serviceProto";

const client = new HttpClient(serviceProto, {
    server: 'https://api.tintinland.com',
    json: true,
    // logger: console
});


export {
    client
}
