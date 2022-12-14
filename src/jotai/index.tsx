import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'


const detail = {
    id: "",
    img: "",
    cycle:"",
    name:"",
    state:false,
    AboutStart:true,
    startTime:"",
    registrationDeadline:"",
    link:"",
    h1:"",
    type: [{content:""}],
    Course_data:[{
        title:"",
        content:[
            { h1: "" }
        ]
    }],
    Learning_Highlights:[{icon:"", h1:"",}],
    teacher:[{img:"",name:"",title:"",introduction:""}],
    project_Provider: [],
    community_recommendation: [{
        avatar:"",
        name:"",
        position:"",
        avatar2:"",
        name2:"",
        position2:"",
        h1:"",
    }],
    suitable_ForTheCrowd:[],
    community_support:[],
}

const PopUpBoxInfo = atom({
    type:"",
    state:false,
    title:""
})
const PopUpBoxState = atom(false)

const Course_Detail = atom(detail)

const JobFairInfoState = atom(false)

const LoginState = atom(false)

const OpenLoginState = atom(false)

const userEmail = { user_email: "",username:""}
const UserEmail = atomWithStorage("UserEmail",userEmail)

export {Course_Detail,JobFairInfoState,LoginState,UserEmail,PopUpBoxState,PopUpBoxInfo,OpenLoginState}
