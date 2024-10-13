import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {Fragment, useEffect, useState} from "react";
import Link from "next/link";
import {Dialog, Disclosure, Listbox, Switch, Tab, Transition} from "@headlessui/react";
import { CheckIcon, SelectorIcon,MapIcon } from "@heroicons/react/outline";
import Heads from "../../components/head";
import {client} from "../../client";
import {useRouter} from "next/router";
import {useAtom} from "jotai";
import {PopUpBoxInfo, PopUpBoxState, UserEmail} from "../../jotai";
import {user} from "../../shared/interface/user";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const track = [
    { id: 1, name: '请选择' },
    { id: 2, name: '1' },

]

// Simplified ProjectInfo component
const ProjectInfo = () => {
    const router = useRouter();
    const [selectedTrack, setSelectedTrack] = useState(track[0])
    const [user_email,] = useAtom(UserEmail)
    const [saveState,setSaveState] = useState(false)
    const [,setPop_up_boxData] =useAtom(PopUpBoxInfo)
    const [,setSop_up_boxState] = useAtom(PopUpBoxState)
    useEffect(() => {
        if(router.isReady){

        }
    },[router.isReady])


    const Revise = async () => {
        setSaveState(true)
        const user:user = {
            username:(document.getElementById("userName") as HTMLInputElement).value,
            user_email:(document.getElementById("userEmail") as HTMLInputElement).value,
            user_course_passport:"",
            twitter:  (document.getElementById("Twitter") as HTMLInputElement).value,
            telegram: (document.getElementById("Telegram") as HTMLInputElement).value,
            github:(document.getElementById("Github") as HTMLInputElement).value,

            description:(document.getElementById("description") as HTMLInputElement).value,
            country:selectedTrack.name,
            achievements:(document.getElementById("achievements") as HTMLInputElement).value,
        }
        // const ret = await client.callApi('v1/user/UpdateUser', {
        //     user
        // });
        // if(ret.isSucc){
        //     setSaveState(false)
        //     setPop_up_boxData({
        //         state:true,
        //         type:"保存",
        //         title:"",
        //         hash: ""
        //     })
        //     setSop_up_boxState(true)
        //     // location.reload();

        // }else {
        //     setSaveState(false)
        //     setPop_up_boxData({
        //         state:false,
        //         type:"保存",
        //         title:"请重试",
        //         hash: ""
        //     })
        //     setSop_up_boxState(true)
        // }
    }

    return (
        <div className="mx-auto sm:rounded-lg mt-2 sm:max-w-xl w-full pb-16">
            {/* <ProjectBasicInfo />
            <ContactInfo />
            <SocialAccounts />
        
            <SaveButton onSave={Revise} saveState={saveState} /> */}
        </div>
    )
}

// Simplified ProjectManagement component
const ProjectManagement = () => {
    const router = useRouter();
    const [user_email,] = useAtom(UserEmail)
    const positions = [
        {
            id: 1,
            title: 'Senior Frontend Engineer, Creator Experience',
            salary: '80k-120K',
            city:"杭州",
            location: 'Remote',
            department: '全职',
        },
        {
            id: 1,
            title: 'Senior Frontend Engineer, Creator Experience',
            salary: '80k-120K',
            city:"杭州",
            location: 'Remote',
            department: '全职',
        },
        {
            id: 1,
            title: 'Senior Frontend Engineer, Creator Experience',
            salary: '80k-120K',
            city:"杭州",
            location: 'Remote',
            department: '全职',
        },
    ]
    const [createJobState,setCreateJobState] = useState(false)
    const [removeJobState,setRemoveJobState] = useState(false)
    const [openCreateJob,setOpenCreateJob] = useState({type:"",data:{}})
    const [selectedTrack, setSelectedTrack] = useState(track[0])
    const [,setSop_up_boxState] = useAtom(PopUpBoxState)
    const [,setPop_up_boxData] =useAtom(PopUpBoxInfo)
    useEffect(() => {
        if(router.isReady){

        }
    },[router.isReady])

    const  CreateJob = () =>{
        setPop_up_boxData({
            state:true,
            type:"创建岗位",
            title:"",
            hash: ""
        })
        setCreateJobState(false)
        setSop_up_boxState(true)

    }
    const Revise = () =>{
        setCreateJobState(true)
        setOpenCreateJob({type:"Revise",data:{}})
    }

    const Remove = () =>{
        setPop_up_boxData({
            state:true,
            type:"删除岗位",
            title:"",
            hash: ""
        })
        setRemoveJobState(false)
        setSop_up_boxState(true)

    }

    return (
        <>
            {/* <CreateJobModal 
                isOpen={createJobState}
                onClose={() => setCreateJobState(false)}
                onSave={CreateJob}
            />
            
            <RemoveJobModal
                isOpen={removeJobState}
                onClose={() => setRemoveJobState(false)}
                onConfirm={Remove}
            />

            <JobList 
                positions={positions}
                onEdit={Revise}
                onRemove={() => setRemoveJobState(true)}
            />

            <AddJobButton onClick={() => setCreateJobState(true)} /> */}
        </>
    )
}

// Main component
const Project_Homepage = () => {
    const categories = [
        { title: "项目资料" },
        { title: "岗位管理" },
    ]

    return (
        <div className="mx-auto relative bg-fixed overflow-hidden" style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Heads />
            <Header />

            <div className="lg:px-10 xl:px-20 relative md:px-5 pt-12 mx-auto">
                <Tab.Group>
                    {/* <TabList categories={categories} /> */}
                    
                    <Tab.Panels className="mt-2">
                        <Tab.Panel><ProjectInfo /></Tab.Panel>
                        <Tab.Panel><ProjectManagement /></Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>

            <Tail />
        </div>
    )
}

export default Project_Homepage
