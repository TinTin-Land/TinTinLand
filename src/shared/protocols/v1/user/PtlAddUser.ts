// This is a demo code file
// Feel free to delete it

/**
 * 增加数据
 * 此处的注释将会自动附带到生成的 API 文档中
 */
export interface ReqAddUser {
    /** 要增加的消息内容 */
    username: string;
    user_email:string;
}

export interface ResAddUser {
    /** 服务端内容创建时间 */
    time: Date
}
