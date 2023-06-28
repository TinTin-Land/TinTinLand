import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment} from "react";
import {useAtom} from "jotai";
import {OpenLoginState} from "../../jotai";

const Loading = () =>{
    const [openLogin,setOpenLogin] =useAtom(OpenLoginState)
    return(
        <>
            <Transition.Root show={openLogin} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={()=>false}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center  justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div className="">

                                    <div className="animate-spin text-white">
                                        <i className="fa fa-spinner f-spin fa-2x fa-fw"></i>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root></>
    )
}

export default Loading
