import {useAtom} from "jotai";
import {JobFairInfoState,} from "../../jotai";
import React, {Fragment, useEffect, useState} from "react";
import Header from "../../components/header";
import Link from "next/link";
import {Listbox, Tab, Transition} from "@headlessui/react";
import Tail from "../../components/tail";
import JobFair_Navigation from "../../components/JobFair_navigation";
import { useRouter } from "next/router";
import Info from "../../info";
import JobFair_info from "../../components/JobFair_info";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Heads from "../../components/head";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    {
        title:"开发",
        number:"1",
    },
    {
        title:"web 前端工程师",
        number:"1",
    },
    {
        title:"产品",
        number:"1",
    },
    {
        title:"设计",
        number:"1",
    },
    {
        title:"运营",
        number:"1",
    },

]

const JobFair= () =>{
    const JobInfo = [
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

        {
            logo:"/tintin-favicon.svg",
            name:"TX Labs1",
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
        },
        {
            logo:"/tintin-favicon.svg",
            name:"TinTin Land4",
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
    const [selected, setSelected] = useState(navigation[0])
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
            <Heads/>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24    mx-auto  ">
                <div className="mb-4">
                    <div className="text-4xl">
                        发现最酷的Web3项目
                    </div>
                    <div className="mt-2">
                        发现最酷的Web3项目
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
                                            {navigation.map((lists) => (
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
                <div className="flex justify-between   ">
                    <div className="xl:w-8/12    h-new-1 xl:h-new 2xl:h-106  overflow-y-auto scrollbar-thin  scrollbar-thumb-fuchsia-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full   xl:pr-4 ">

                      <div className="grid grid-cols-1 gap-4">

                      {JobInfo.map(item=>(
                        <div key={item.name} onClick={OpenJobInfo} className="cursor-pointer ">
                        <div  className=" bg-white  p-5 rounded-xl">
                            <div className="flex items-center">
                                <img className="w-14 rounded-full"  src={item.logo} alt=""/>
                                <div className="ml-2 w-10/12 sm:w-11/12 text-left">
                                    <div className=" sm:text-xl font-semibold">
                                        {item.name}
                                    </div>
                                    <div className="text-sm sm:text-base truncate text-gray-500">
                                        {item.h1}
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded-xl mt-4 divide-y divide-gray-200">
                                {item.work.map(list=>(
                                <div key={list.title} className=" xl:flex p-3 sm:p-5 text-sm">
                                    <div className="font-semibold truncate">
                                        {list.title}
                                    </div>
                                    <div className="xl:ml-4">
                                        {list.type}
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden xl:block xl:w-4/12 xl:pl-20">
                        <JobFair_Navigation/>
                    </div>
                </div>

                <div className="sm:flex justify-end xl:-mt-24">
                <div className="my-5 flex bg-white items-center text-base  p-4  rounded-xl md:justify-end text-right">
                    <div className="text-xs sm:text-base mr-3 text-gray-600 items-center flex">
                        <img className="w-12 md:hidden mr-3" src="/common_icons/编组 13@2x.png" alt=""/>
                        <div className="text-left md:text-right">
                        <div>
                            你的项目也在寻找工作伙伴吗？
                        </div>
                        <div className="  ">
                            可以
                            <a className=" text-indigo-800 underline font-semibold  ">
                                填写表格
                            </a>
                            ，你的岗位也将展示在这里。
                        </div>
                        </div>
                    </div>
                    <img className="w-12 hidden md:flex" src="/common_icons/编组 13@2x.png" alt=""/>
                </div>
                </div>

                <JobFair_info/>

            </div>


            <Tail/>
        </div>


    )
}

export default JobFair
