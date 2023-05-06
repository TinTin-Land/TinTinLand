// This is a demo code file
// Feel free to delete it

/**
 * 增加数据
 * 此处的注释将会自动附带到生成的 API 文档中
 */
export interface ReqAddCourseTeacher {
    /** 要增加的消息内容 */
    course_teacher_name:string;
    course_teacher_info:string;
}

export interface ResAddCourseTeacher {
    /** 服务端内容创建时间 */
    time: Date;
}
