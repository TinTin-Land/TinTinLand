import {useAtom} from "jotai";
import {JobFairInfoState, UserInfoState} from "../../jotai";
import React, {useEffect, useState} from "react";
import Header from "../../components/header";
import Link from "next/link";
import {Tab} from "@headlessui/react";
import Tail from "../../components/tail";
import JobFair_Navigation from "../../components/JobFair_navigation";
import { useRouter } from "next/router";
import Info from "../../info";
import JobFair_info from "../../components/JobFair_info";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const JobFair= () =>{
    const JobInfo = [
        {
            logo:"/tintin-favicon.svg",
            name:"TinTin Land",
            website:"/home",
            h1:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.                                   ",
            work:[
                {
                    title:"Senior Frontend Engineer, Creator Experience",
                    type:"80k-120K｜杭州｜Remote｜全职",
                    content:[
                        {
                            h1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. "

                        },
                        {
                            h1:"Quis nostrud exercitation ullamco laboreu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ullamco laboreu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }

                    ]
                },

            ]
        },
        {
            logo:"/tintin-favicon.svg",
            name:"TinTin Land2",
            website:"/home",
            h1:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.                                   ",
            work:[
                {
                    title:"Senior Frontend Engineer, Creator Experience",
                    type:"80k-120K｜杭州｜Remote｜全职",
                    content:[
                        {
                            h1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. "

                        },
                        {
                            h1:"Quis nostrud exercitation ullamco laboreu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ullamco laboreu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }

                    ]
                },

            ]
        },



    ]
    const router = useRouter()
    const [open, setOpen] = useAtom(JobFairInfoState)
    const [pathname,setPathname] = useState("")
    const [data,setData] =useState([])
    useEffect(()=>{
        if (router.isReady){
            const content = router.query.slug[0]
            const fetchUserBounty = async () => {
                setPathname(content)
                setData(Info[content])
            }
            fetchUserBounty()

        }
    },[router.isReady,router.query.slug])

    const OpenJobInfo = (e) =>{

       setOpen(true)
    }


    return (

        <div className="mx-auto relative  bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24    mx-auto  ">
                <div className="  ">
                    <div className="text-4xl">
                        发现最酷的Web3项目
                    </div>
                    <div className="mt-2">
                        发现最酷的Web3项目
                    </div>
                </div>
                <div className="flex justify-between pt-4  ">
                    <div className="w-8/12  grid-cols-1 gap-4  h-105 overflow-y-auto   pr-4 ">
                        {JobInfo.map(item=>(
                        <div key={item.name} onClick={OpenJobInfo} className="cursor-pointer mb-4">
                        <div  className=" bg-white  p-5 rounded-xl">
                            <div className="flex">
                                <img className="w-14 rounded-full"  src={item.logo} alt=""/>
                                <div className="ml-2 w-11/12 text-left">
                                    <div className=" text-xl font-semibold">
                                        {item.name}
                                    </div>
                                    <div className=" truncate text-gray-500">
                                        {item.h1}
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-xl mt-4 divide-y divide-gray-200">
                                {item.work.map(list=>(
                                <div key={list.title} className="flex p-5 ">
                                    <div className="font-semibold">
                                        {list.title}
                                    </div>
                                    <div className="ml-4">
                                        {list.type}
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        </div>
                        ))}
                    </div>
                    <div className="w-4/12 pl-20">
                        <JobFair_Navigation/>
                    </div>

                </div>
                <JobFair_info/>

            </div>


            <Tail/>
        </div>


    )
}

export default JobFair
