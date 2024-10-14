import {useAtom} from "jotai";
import {JobFairInfoState} from "../../jotai";
import React, {Fragment, useEffect, useState} from "react";
import Header from "../../components/header";
import Link from "next/link";
import {Listbox, Transition} from "@headlessui/react";
import Tail from "../../components/tail";
import { useRouter } from "next/router";
import Info from "../../info";
import JobFair_info from "../../components/JobFair_info";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import {Talent_pool_navigation, TalentPool} from "../../components/TalentPool";
import Heads from "../../components/head";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface Person {
    name: string;
    avatar: string;
    location: string;
    twitter: string;
    usertype: { type: string }[];
    experience: string;
    email: string;
}

const JobFair: React.FC = () => {
    const People: Person[] = [
        {
            name: "TinTinLand",
            avatar: "/people/赵杲.png",
            location: "hangzhou",
            twitter:"",
            usertype:[
                {
                    type:"产品经理"
                },
                {
                    type:"DAO贡献者"
                },
                {
                    type:"产品经理"
                },
                {
                    type:"DAO贡献者"
                },
            ],
            experience:"1-2年",
            email:"Jasonwong@tintinland.com",
        },
        {
            name:"TinTinLand1",
            avatar:"/people/赵杲.png",
            location:"hangzhou",
            twitter:"",
            usertype:[
                {
                    type:"产品经理"
                },
                {
                    type:"DAO贡献者"
                },
            ],
            experience:"1-2年",
            email:"Jasonwong@tintinland.com",
        }, {
            name:"TinTinLand2",
            avatar:"/people/赵杲.png",
            location:"hangzhou",
            twitter:"",
            usertype:[
                {
                    type:"产品经理"
                },
                {
                    type:"DAO贡献者"
                },
            ],
            experience:"1-2年",
            email:"Jasonwong@tintinland.com",
        }, {
            name:"TinTinLand3",
            avatar:"/people/赵杲.png",
            location:"hangzhou",
            twitter:"",
            usertype:[
                {
                    type:"产品经���"
                },
                {
                    type:"DAO贡献者"
                },
            ],
            experience:"1-2年",
            email:"Jasonwong@tintinland.com",
        },
        {
            name:"TinTinLand5",
            avatar:"/people/赵杲.png",
            location:"hangzhou",
            twitter:"",
            usertype:[
                {
                    type:"产品经理"
                },
                {
                    type:"DAO贡献者"
                },
            ],
            experience:"1-2年",
            email:"Jasonwong@tintinland.com",
        },


    ]
    const router = useRouter()
    const [open, setOpen] = useAtom(JobFairInfoState)
    const [pathname,setPathname] = useState("")
    const [data,setData] =useState([])
    const [selected, setSelected] = useState(Talent_pool_navigation[0])
    useEffect(()=>{
        if (router.isReady){
            const content = router.query.slug[0] as string;
            setPathname(content);
            setData(Info[content]);
        }
    },[router.isReady,router.query.slug])

    const OpenJobInfo = (e) =>{

        setOpen(true)
    }


    return (
        <div className="mx-auto relative  bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Heads/>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24    mx-auto  ">
                <div className="mb-4">
                    <div className="text-4xl">
                       寻找Web3人才
                    </div>
                    <div className="mt-2">
                        寻找Web3人才副标题
                    </div>
                </div>
                <div className="block xl:hidden py-5">

                    <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                            <>
                                <Listbox.Label className="block text-sm font-medium text-gray-500">按职位类型筛选</Listbox.Label>
                                <div className="relative mt-1">
                                    <Listbox.Button className=" relative w-full cursor-default rounded-xl border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm  focus:outline-none  sm:text-sm">

                                        <div className=" truncate flex justify-between items-center">
                                            <div className="flex items-center">
                                                <img className="w-5 mr-2 border border-dashed border-black " src="/common_icons/grid_view_black_24dp@3x.png" alt=""/>
                                                {selected.title}
                                            </div>
                                            <div>
                                                {selected.number}
                                            </div>
                                        </div>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronDownIcon className="h-5 w-5 text-black" aria-hidden="true" />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {Talent_pool_navigation.map((lists) => (
                                                <Listbox.Option
                                                    key={lists.title}
                                                    className={({ active }) =>
                                                        classNames(
                                                            active ? 'text-gray-900' : 'text-gray-900',
                                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                                        )
                                                    }
                                                    value={lists}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {lists.title}
                        </span>
                                                            {selected ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'text-indigo-600' : '',
                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                    )}
                                                                >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>

                </div>

                <div className="  ">
                    <div className="text-[#5448AE] -mb-8 font-semibold  text-xl ">
                        共有 243 个优秀人才
                    </div>
                    <div className="flex justify-between mt-1  ">
                    {/*scrollbar-track-gray-100*/}
                    <div className="w-full xl:w-8/12 mt-10 h-new-1 xl:h-new 2xl:h-106  overflow-y-auto xl:scrollbar-thin  scrollbar-thumb-fuchsia-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full  xl:pr-4 ">
                     <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-4">
                        {People.map(item=>(
                            <Link key={item.name} href="/homepage" legacyBehavior>
                            <div className="cursor-pointer bg-white rounded-xl p-4 ">
                                <div className="flex justify-between ">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="w-12 h-12 rounded-full mr-4" src={item.avatar} alt=""/>
                                        </div>
                                        <div>
                                            <div className="md:w-48 truncate font-semibold ">
                                                {item.name}
                                            </div>
                                            <div className="flex items-center text-gray-500">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                              <div className="ml-1">{item.location}</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-blue-500 text-2xl">
                                        <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="h-16 items-center overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-4 my-5 text-sm ">
                                    {item.usertype.map(item=>(
                                    <div key= {item.type} className="rounded-full px-2 py-1 bg-[#E9E5F7] text-center">
                                        {item.type}
                                    </div>
                                    ))}
                                </div>
                                </div>
                                <div className="border-t border-[#000000]/20  py-5">
                                    <div className="flex items-center text-gray-500">
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                     <div className="ml-1">
                                         Web3 经验：{item.experience}
                                     </div>
                                    </div>
                                    <div className="flex items-center text-gray-500 mt-2">
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                        <div className="ml-1">
                                            {item.email}
                                        </div>
                                    </div>

                                </div>

                            </div>
                            </Link>
                        ))}
                     </div>
                    </div>
                    <div className="hidden xl:block xl:w-4/12 xl:pl-20">
                        <TalentPool />
                    </div>
                </div>

                <div className="sm:flex justify-end xl:-mt-24">
                    <div className="my-5 flex bg-white items-center text-base  p-4 xl:w-96 rounded-xl md:justify-end text-right">
                        <div className="text-xs sm:text-base mr-3 text-gray-600 items-center flex">
                            <img className="w-12 md:hidden mr-3" src="/common_icons/编组 13@2x.png" alt=""/>
                            <div className="text-left md:text-right">
                                <div className="  ">
                                   马上填写
                                    <a className=" text-indigo-800 underline font-semibold  ">
                                       个人档案
                                    </a>
                                    ，
                                </div>
                                <div>
                                    把我的信息也展示在这里.
                                </div>
                            </div>
                        </div>
                        <img className="w-12 hidden md:flex" src="/common_icons/编组 13@2x.png" alt=""/>
                    </div>
                </div>

                <JobFair_info/>

            </div>

            </div>
            <Tail/>
        </div>
    );
}

export default JobFair
