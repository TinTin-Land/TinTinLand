import {useAtom} from "jotai";
import {JobFairInfoState} from "../../jotai";
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
    const  Course_data =
        {
            logo:"/tintin-favicon.svg",
            name:"TX Labs",
            website:"https://txlabs.org",
            h1:"Blockless (曾用名 TX Mesh) 是 Web3.0 的第一个模块化执行层。它是一个无需许可的去中心化网络，赋予链上和链下互操作性和可组合性。Blockless通过类似“去中心化 AWS”的功能，构建链上链下的混合应用程序（预言机、桥接器、汇总、私有计算等），支持应用程序定义的本地共识的可组合、无服务器基础架构，能够帮助开发者节省开发成本 90%（100 万美元）以上。.                                   ",
            work:[
                {
                    title:"首席开发工程师",
                    type:"80k-120K｜杭州｜Remote｜全职",
                    content:[
                        {
                            h1:"3年以上全职软件工程经验。"
                        },
                        {
                            h1:"理解区块链平台和协议以及它们在未来 Web3 生态系统中的作用。包括但不限于：Layer 1 区块链(以太坊、BSC、Cardano、Cosmos、PolkaDot 等)，Layer 2 解决方案（Polygon、Arbitrum、Starkware、Aztec 等），Hyperledger Fabric、Indy、 Sovrin、联盟链等"
                        },
                        {
                            h1:"理解DeFi 和链下协议"
                        },
                        {
                            h1:"对主要区块链协议、应用密码学和 PKI 背后的密码学有深刻认知。"
                        },
                        {
                            h1:"了解云安全、大数据、区块链和一般的分布式架构。"
                        },
                        {
                            h1:"了解微服务设计。"
                        },
                        {
                            h1:" 有以下一项或多项经验：\n" +
                                "- 实现云转型并构建云原生架构和解决方案（AWS、Azure、谷歌云、甲骨文等）经验\n" +
                                "- 企业架构，4+1架构建模，UML经验。\n" +
                                "- 复杂技术堆栈的大型分布式系统的交付经验。"
                        },



                    ]
                },
                {
                    title:"Senior Frontend Engineer, Creator Experience1",
                    type:"80k-120K｜杭州｜Remote｜全职",
                    content:[
                        {
                            h1:"1. 3年以上全职软件工程经验。\n" +
                                "2. 理解区块链平台和协议以及它们在未来 Web3 生态系统中的作用。包括但不限于：Layer 1 区块链(以太坊、BSC、Cardano、Cosmos、PolkaDot 等)，Layer 2 解决方案（Polygon、Arbitrum、Starkware、Aztec 等），Hyperledger Fabric、Indy、 Sovrin、联盟链等\n" +
                                "3.  理解DeFi 和链下协议\n" +
                                "4. 对主要区块链协议、应用密码学和 PKI 背后的密码学有深刻认知。\n" +
                                "5. 了解云安全、大数据、区块链和一般的分布式架构。\n" +
                                "6. 了解微服务设计。\n" +
                                "7. 有以下一项或多项经验：\n" +
                                "    - 实现云转型并构建云原生架构和解决方案（AWS、Azure、谷歌云、甲骨文等）经验\n" +
                                "    - 企业架构，4+1架构建模，UML经验。\n" +
                                "    - 复杂技术堆栈的大型分布式系统的交付经验。\n" +
                                "加分项：\n" +
                                "1. 3 年以上初创公司技术领导经验，\n" +
                                "2. 1 年以上主要区块链协议的全职架构、设计和交付经验\n" +
                                "3. 敏捷软件开发经验\n" +
                                "4. Scrum Master 从业认证\n" +
                                "5. AWS 云从业认证\n" +
                                "6. Cloudera Hadoop 从业认证"
                        },


                    ]
                },

            ],
            aboutUs:"butian@txlabs.org",
        }
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

                    <div className="fixed z-30 inset-0  overflow-y-auto">
                        <div className="flex items-center justify-center  sm:min-h-full sm:p-4 text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white sm:rounded-lg px-4 pt-5 pb-4 text-left  h-screen sm:h-full shadow-xl items-center transform transition-all  sm:my-8 sm:max-w-5xl w-full sm:p-6">
                                    <div className="flex justify-start sm:justify-end">
                                        <div onClick={()=>{setOpen(false)}}
                                                className="cursor-pointer text-2xl  font-light">
                                            <div className="mb-10 flex items-center sm:hidden">
                                                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                                <div className="ml-2 text-black">
                                                返回职位列表
                                                </div>
                                            </div>
                                            <img className="hidden sm:flex w-8 " src="/common_icons/close.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className=" -mt-4">
                                        <div className="flex items-center">
                                            <img className="rounded-full  w-10" src={Course_data.logo} alt=""/>
                                            <div className="font-semibold mx-4 text-xl">
                                                {Course_data.name}
                                            </div>
                                            <Link href={Course_data.website}>
                                                <a className=" outline-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="text-gray-500 mt-4">
                                            {Course_data.h1} </div>

                                            <div className="mx-auto w-full rounded-xl border divide-y divide-gray-200  my-5  max-h-99 overflow-auto  ">
                                                {Course_data.work.map(item=>(
                                                    <Disclosure key={item.title}>
                                                        {({ open }) => (
                                                            <>
                                                                <Disclosure.Button className={ classNames(open? 'bg-gray-100':"","flex justify-between w-full items-center   px-2 py-4 text-left  font-medium text-black outline-none")}>

                                                                    <div className=" xl:flex w-11/12 px-2 sm:px-0 sm:pl-2">
                                                                        <div  className="truncate">{item.title}</div>
                                                                        <div className=" xl:ml-5 font-light" >{item.type}</div>
                                                                    </div>
                                                                    <ChevronUpIcon
                                                                        className={`${
                                                                            open ? '' : 'rotate-180 transform '
                                                                        } h-5 w-5 text-black`}
                                                                    />
                                                                </Disclosure.Button>
                                                                <Disclosure.Panel className="px-10 py-4  text-gray-800 font-normal bg-gray-100 list-decimal outline-none ">

                                                                    {item.content.map(list=>(
                                                                        <li key={list.h1} className="mt-1.5 whitespace-pre-wrap">
                                                                            {list.h1}
                                                                        </li>
                                                                    ))}
                                                                </Disclosure.Panel>
                                                            </>
                                                        )}
                                                    </Disclosure>
                                                ))}
                                            </div>

                                        <div className="fixed sm:relative inset-x-0 bottom-8 sm:bottom-0  text-[#5448AE] font-semibold mt-4 flex justify-center sm:justify-start text-xl">
                                            投递:
                                            <a href={`mailto:${Course_data.aboutUs}`} className="cursor-pointer ml-1 ">
                                                {Course_data.aboutUs}
                                            </a>
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
