import {useAtom} from "jotai";
import {UserInfoState} from "../../jotai";
import React, {useEffect, useState} from "react";
import Header from "../../components/header";
import Link from "next/link";
import {Tab} from "@headlessui/react";
import Tail from "../../components/tail";
import JobFair_Navigation from "../../components/JobFair_navigation";
import { useRouter } from "next/router";
import Info from "../../info";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const JobFair= () =>{
    const router = useRouter()

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


    return (

        <div className="mx-auto relative  bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24    mx-auto  ">
                <div>
                    <div className="text-4xl">
                        发现最酷的Web3项目
                    </div>
                    <div className="mt-2">
                        发现最酷的Web3项目
                    </div>
                </div>
                <div className="flex justify-between mt-5">
                    <div className="w-8/12 grid grid-cols-1 gap-8 h-105 overflow-y-auto no-scrollbar pr-4">
                        <div className=" bg-white  p-5 rounded-xl">
                            <div className="flex">
                                <img className="w-14 rounded-full"  src="/tintin-favicon.svg" alt=""/>
                                <div className="ml-2 w-11/12">
                                    <div className="text-xl font-semibold">
                                        TinTin Land
                                    </div>
                                    <div className=" truncate text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-xl mt-4 divide-y divide-gray-200">
                                <div className="flex p-5 ">
                                    <div className="font-semibold">
                                        Senior Frontend Engineer, Creator Experience
                                    </div>
                                    <div className="ml-4">
                                        80k-120K｜杭州｜Remote｜全职
                                    </div>
                                </div>
                                <div className="flex p-5 ">
                                    <div className="font-semibold">
                                        Senior Frontend Engineer, Creator Experience
                                    </div>
                                    <div className="ml-4">
                                        80k-120K｜杭州｜Remote｜全职
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className=" bg-white  p-5 rounded-xl">
                            <div className="flex">
                                <img className="w-14 rounded-full"  src="/tintin-favicon.svg" alt=""/>
                                <div className="ml-2 w-11/12">
                                    <div className="text-xl font-semibold">
                                        TinTin Land
                                    </div>
                                    <div className=" truncate text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-xl mt-4 divide-y divide-gray-200">
                                <div className="flex p-5 ">
                                    <div className="font-semibold">
                                        Senior Frontend Engineer, Creator Experience
                                    </div>
                                    <div className="ml-4">
                                        80k-120K｜杭州｜Remote｜全职
                                    </div>
                                </div>
                                <div className="flex p-5 ">
                                    <div className="font-semibold">
                                        Senior Frontend Engineer, Creator Experience
                                    </div>
                                    <div className="ml-4">
                                        80k-120K｜杭州｜Remote｜全职
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className=" bg-white  p-5 rounded-xl">
                            <div className="flex">
                                <img className="w-14 rounded-full"  src="/tintin-favicon.svg" alt=""/>
                                <div className="ml-2 w-11/12">
                                    <div className="text-xl font-semibold">
                                        TinTin Land
                                    </div>
                                    <div className=" truncate text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-xl mt-4 divide-y divide-gray-200">
                                <div className="flex p-5 ">
                                    <div className="font-semibold">
                                        Senior Frontend Engineer, Creator Experience
                                    </div>
                                    <div className="ml-4">
                                        80k-120K｜杭州｜Remote｜全职
                                    </div>
                                </div>
                                <div className="flex p-5 ">
                                    <div className="font-semibold">
                                        Senior Frontend Engineer, Creator Experience
                                    </div>
                                    <div className="ml-4">
                                        80k-120K｜杭州｜Remote｜全职
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className=" bg-white  p-5 rounded-xl">
                            <div className="flex">
                                <img className="w-14 rounded-full"  src="/tintin-favicon.svg" alt=""/>
                                <div className="ml-2 w-11/12">
                                    <div className="text-xl font-semibold">
                                        TinTin Land
                                    </div>
                                    <div className=" truncate text-gray-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-xl mt-4 divide-y divide-gray-200">
                                <div className="flex p-5 ">
                                    <div className="font-semibold">
                                        Senior Frontend Engineer, Creator Experience
                                    </div>
                                    <div className="ml-4">
                                        80k-120K｜杭州｜Remote｜全职
                                    </div>
                                </div>
                                <div className="flex p-5 ">
                                    <div className="font-semibold">
                                        Senior Frontend Engineer, Creator Experience
                                    </div>
                                    <div className="ml-4">
                                        80k-120K｜杭州｜Remote｜全职
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="w-4/12 pl-20">
                        <JobFair_Navigation/>
                    </div>

                </div>


            </div>

            <Tail/>
        </div>


    )
}

export default JobFair
