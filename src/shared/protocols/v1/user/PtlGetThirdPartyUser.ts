// This is a demo code file
// Feel free to delete it


import {user} from "../../../interface/user";

/**
 * 增加数据
 * 此处的注释将会自动附带到生成的 API 文档中
 */
export interface ReqGetThirdPartyUser {
    /** 要增加的消息内容 */
    user_email:string;
}

export interface ResGetThirdPartyUser {
    /** 服务端内容创建时间 */
    time: Date;
    wj_open_id:string;
}
