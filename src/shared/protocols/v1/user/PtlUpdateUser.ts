// This is a demo code file
// Feel free to delete it


import {user} from "../../../interface/user";

/**
 * 增加数据
 * 此处的注释将会自动附带到生成的 API 文档中
 */
export interface ReqUpdateUser {
    /** 要增加的消息内容 */
    user:user
}

export interface ResUpdateUser {
    /** 服务端内容创建时间 */
    time: Date
    user: user
}
