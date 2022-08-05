import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'


const detail = {
    id: "",
    img: "",
    cycle:"",
    name:"",
    state:false,
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
        h1:"",
    }],
    suitable_ForTheCrowd:[],
    community_support:[],
}


const Course_Detail = atom(detail)

const LogoFavicon = atomWithStorage("LogoFavicon","/tintin-favicon.svg")

export {Course_Detail,LogoFavicon}
