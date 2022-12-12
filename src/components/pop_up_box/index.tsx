import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment, useEffect, useState} from "react";
import {CheckCircleIcon, CheckIcon, XCircleIcon,} from "@heroicons/react/solid";
import {atom, useAtom} from "jotai";
import {PopUpBoxState,PopUpBoxInfo,} from "../../jotai";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Pop_up_box = () =>{
    const [pop_up_boxState,setSop_up_boxState] = useAtom(PopUpBoxState)
    const [pop_up_boxData,] =useAtom(PopUpBoxInfo)
    let time
    useEffect(()=>{
        clearTimeout(time)
        if(pop_up_boxState){
            time = setTimeout(()=>{
                setSop_up_boxState(false)
               // if(pop_up_boxData.state){
               //     location.reload()
               // }
            },3000)
        }
        const Pop_up_box = document.getElementById('SwapSuccessPop_up_box');
        Pop_up_box.onmouseover = function(){
            clearInterval(time);
        }
        Pop_up_box.onmouseout = function(){
            time = setTimeout(()=>{
                setSop_up_boxState(false)
                // if(pop_up_boxData.state){
                //     location.reload()
                // }
            },2000)
        }
    },[pop_up_boxState])
    return(
        <div
            id="SwapSuccessPop_up_box"
            aria-live="assertive"
            className="pointer-events-none z-40 fixed inset-0 top-10 flex items-end px-4 py-6 sm:items-start sm:p-6 z-40"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                <Transition
                    show={pop_up_boxState}
                    as={Fragment}
                    enter="transform ease-out duration-300 transition"
                    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className=" pointer-events-auto w-full max-w-xs overflow-hidden rounded-lg text-black bg-[#FFFFFF] shadow-lg shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] ">
                        <div className="p-4">
                            <div className="flex items-center">
                                <img className={pop_up_boxData.state?"w-10  mt-1":"hidden"} src="/successful.svg" alt=""/>
                                <img className={pop_up_boxData.state?"hidden":"w-10  mt-1"} src="/fail.png" alt=""/>
                                <div className="ml-3 w-0 flex-1 pt-0.5 text-black text-sm">
                                    <p className="font-medium">{pop_up_boxData.type}{classNames(pop_up_boxData.state?"成功":"失败")}</p>
                                    <p className={pop_up_boxData.state?"hidden":"mt-1 "}>请重试</p>

                                </div>
                                <div className="-mt-4 flex flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex rounded-md  text-black hover:text-gray-500 focus:outline-none "
                                        onClick={() => {
                                            setSop_up_boxState(false)
                                            // if(pop_up_boxData.state){
                                            //     location.reload()
                                            // }
                                        }}
                                    >
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}







export {Pop_up_box}
