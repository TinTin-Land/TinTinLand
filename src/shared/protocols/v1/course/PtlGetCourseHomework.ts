// This is a demo code file
// Feel free to delete it

import {course_homework} from "../../../interface/course_homework";

/**
 * 增加数据
 * 此处的注释将会自动附带到生成的 API 文档中
 */
export interface ReqGetCourseHomework {
    /** 要增加的消息内容 */
    course_name: string;
}

export interface ResGetCourseHomework {
    /** 服务端内容创建时间 */
    time: Date
    course_homework:course_homework
}
