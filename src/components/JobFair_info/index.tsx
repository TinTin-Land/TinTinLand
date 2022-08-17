import {useAtom} from "jotai";
import {JobFairInfoState, UserInfoState} from "../../jotai";
import React, {Fragment, useState} from "react";
import {Dialog, Disclosure, Listbox, Switch, Transition} from "@headlessui/react";
import {CheckIcon, SelectorIcon} from "@heroicons/react/outline";
import Link from "next/link";
import ChevronUpIcon from "@heroicons/react/outline/ChevronUpIcon";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const JobFair_info = () =>{
    const [open, setOpen] = useAtom(JobFairInfoState)
    const  Course_data =[
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
        {
            title:"Senior Frontend Engineer, Creator Experience1",
            type:"80k-120K｜杭州｜Remote｜全职",
            content:[
                {
                    h1:"1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. "

                },
                {
                    h1:"Quis nostrud exercitation ullamco laboreu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ullamco laboreu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }

            ]
        },


        ]

    return(
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-30" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity " />
                    </Transition.Child>

                    <div className="fixed z-30 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all  sm:my-8 sm:max-w-5xl w-full sm:p-6">
                                    <div className="flex justify-end">
                                        <div onClick={()=>{setOpen(false)}}
                                                className="cursor-pointer text-2xl  font-light">
                                            <img className="w-8 " src="/common_icons/close.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="-mt-4">
                                        <div className="flex items-center">
                                            <img className="rounded-full  w-10" src="/tintin-favicon.svg" alt=""/>
                                            <div className="font-semibold mx-4 text-xl">
                                                TinTinLand
                                            </div>
                                            <Link href="/">
                                                <a className=" outline-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="text-gray-500 mt-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>

                                            <div className="mx-auto w-full rounded-xl border divide-y divide-gray-200  my-5  overflow-hidden">
                                                {Course_data.map(item=>(
                                                    <Disclosure key={item.title}>
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button className={ classNames(open? 'bg-gray-100':"","flex justify-between w-full items-center   px-2 py-4 text-left  font-medium text-black")}>

                                                                    <div>
                                                                        <span  className="ml-5">{item.title}</span>
                                                                        <span className="ml-5  font-light" >{item.type}</span>
                                                                    </div>
                                                                    <ChevronUpIcon
                                                                        className={`${
                                                                            open ? '' : 'rotate-180 transform '
                                                                        } h-5 w-5 text-black`}
                                                                    />
                                                                </Disclosure.Button>
                                                                <Disclosure.Panel className="px-10 py-4  text-gray-800 font-normal bg-gray-100 ">
                                                                    {item.content.map(list=>(
                                                                        <div key={list.h1} className="mt-1.5">
                                                                            {list.h1}
                                                                        </div>
                                                                    ))}
                                                                </Disclosure.Panel>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                ))}
                                            </div>

                                        <div className="text-indigo-500 font-semibold mt-4">
                                            投递：1234243@qq.com
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}


export default JobFair_info
