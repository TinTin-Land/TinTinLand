import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Activity_Info from "../../components/activity_info";
import Heads from "../../components/head";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Coures = () =>{
    const Course_info =
        [
            {
                id: "EVM_102",
                img: "/course/EVM_102.png",
                type: [
                    {
                        content: "Solidity"
                    },
                    {
                        content: "The Graph"
                    },
                    {
                        content: "链上合约数据的读取与写入"
                    },
                    {
                        content: "合约安全"
                    },
                    {
                        content: "Arbitrum-sdk"
                    },

                ],
                h1: "第二期｜以太坊开发快速入门-轻松创建智能合约",
                link: "https://hkr.h5.xeknow.com/s/2yYwKx",
                state: true
            },
            {
                id: "IC_103",
                img: "/course/IC_103.png",
                type: [
                    {
                        content: "Motoko"
                    },
                    {
                        content: "Canister"
                    },
                    {
                        content: "Javescript"
                    },

                ],
                h1: "第三期｜Internet Computer：从核心技术入门到开发实战",
                link: "https://hkr.h5.xeknow.com/s/xRaCr",
                state: true

            },
            {
                id: "BAC_101",
                img: "/course/BAC_101.png",
                type: [
                    {
                        content: "比特币脚本系统"
                    },
                    {
                        content: "基础数据结构"
                    },
                    {
                        content: "执行模型"
                    },

                    {
                        content: "UTXO 模型"
                    },

                    {
                        content: "账户模型"
                    },
                ],
                h1:"从0开始学区块链：工程师眼中的比特币和以太坊",
                state: true,
                link: "https://hkr.h5.xeknow.com/s/VRdMD",

            },
            {
                id: "FLOW_101",
                img: "/course/FLOW_101.png",
                type: [
                    {
                        content: "Cadence"
                    },
                    {
                        content: "Flow FT"
                    },
                    {
                        content: "Flow NFT"
                    },
                    {
                        content: "NFT Metadata"
                    },
                    {
                        content: "FCL(Flow Client Library)"
                    },
                ],
                h1: "第一期｜Flow DApp开发入门课程——从初识Cadence到搭建Marketplace",
                link: "https://hkr.h5.xeknow.com/s/PGm9a",
                state: true

            },
            {
                id: "IC_201",
                img: "/course/IC_201.png",
                type: [
                    {
                        content: "Motoko"
                    },
                    {
                        content: "Canister"
                    },
                    {
                        content: "ICP系统服务"
                    },
                    {
                        content: "Ti Jar"
                    },

                ],
                h1: "第一期｜Internet Computer：从核心技术入门到开发实战进阶",
                link: "",
                state: false

            },
        ]

    return (

        <div className="mx-auto relative bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Heads/>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24    mx-auto ">
                <div className="   p-10  rounded-xl  bg-left md:bg-cover overflow-hidden "  style={{backgroundImage:"url('/活动_bg.png')"}}>
                    <div className="">
                        <div className="text-[#5448AE] text-xl mb-5">
                            TinTin活动
                        </div>
                        <div className="text-4xl mb-5">
                            <div className="mb-2">
                                与顶尖项目面对面讨论，
                            </div>
                            <div>
                                获得热点趋势与开发实战经验
                            </div>
                        </div>
                        <div className="text-xl ">
                            最新的多链技术分享，众多赛道实时资讯 <br/> 生态项目代码实操演练，与 Web3 领军人物现场讨论。
                            </div>
                    </div>


                </div>
                <div>
                    <div className="mt-10">
                        <div className="text-indigo-700 text-xl flex justify-between">
                            {Activity_Info.TinTinMeeting.title}
                            <Link href={`/meetingList/${Activity_Info.TinTinMeeting.latestIssue.type}`}>
                            <div className="flex bg-white text-black rounded-full cursor-pointer text-sm items-center px-4 py-1.5">
                                <div className="mr-1" >
                                    查看更多
                                </div>
                                <div>
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="md:w-1/2 text-sm mt-2">
                            {Activity_Info.TinTinMeeting.h1}
                        </div>
                    <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3   gap-10 ">
                        {Activity_Info.TinTinMeeting.history.map((item,index)=>(
                            <div key={item.id} className={index>2?"hidden":"rounded-2xl"}>
                                <img className="rounded-t-2xl w-99 h-52" src={item.img} alt=""/>
                                <div className="px-10 py-8 bg-white rounded-b-2xl">
                                    <div className="flex   flex-wrap">
                                        <div  className="bg-gray-200 rounded-full text-center text-gray-700 px-3 py-1 mr-2 mb-4 text-sm" >
                                            {item.name}
                                        </div>
                                    </div>
                                    <div className=" text-2xl line-clamp-2 h-16">
                                        {item.h1}
                                    </div>
                                    <div className="flex mt-5 ">
                                        <Link href={item.more}>
                                            <a className=" text-black border border-black rounded-full  px-8 py-2.5" target="_blank">
                                                了解更多
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    </div>
                    <div className="mt-10">
                        <div className="text-indigo-700 text-xl flex justify-between">
                            {Activity_Info.DTalk.title}
                            <Link href={`/meetingList/${Activity_Info.DTalk.latestIssue.type}`}>
                                <div className="flex bg-white text-black rounded-full cursor-pointer text-sm items-center px-4 py-1.5">
                                    <div className="mr-1" >
                                        查看更多
                                    </div>
                                    <div>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="md:w-1/2 text-sm mt-2">
                            {Activity_Info.DTalk.h1}
                        </div>
                        <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3   gap-10 ">
                            {Activity_Info.DTalk.history.map((item,index)=>(
                                <div key={item.id} className={index>2?"hidden":"rounded-2xl"}>
                                    <img className="rounded-t-2xl w-99 h-52" src={item.img} alt=""/>
                                    <div className="px-10 py-8 bg-white rounded-b-2xl">
                                        <div className="flex   flex-wrap">
                                            <div  className="bg-gray-200 rounded-full text-center text-gray-700 px-3 py-1 mr-2 mb-4 text-sm" >
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className=" text-2xl line-clamp-2 h-16">
                                            {item.h1}
                                        </div>
                                        <div className="flex mt-5 ">
                                            <Link href={item.more}>
                                                <a className=" text-black border border-black rounded-full  px-8 py-2.5" target="_blank">
                                                    了解更多
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="text-indigo-700 text-xl flex justify-between">
                            {Activity_Info.TinTinJobFair.title}
                            <Link href={`/meetingList/${Activity_Info.TinTinJobFair.latestIssue.type}`}>
                                <div className="flex bg-white text-black rounded-full cursor-pointer text-sm items-center px-4 py-1.5">
                                    <div className="mr-1" >
                                        查看更多
                                    </div>
                                    <div>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="md:w-1/2 text-sm mt-2">
                            {Activity_Info.TinTinJobFair.h1}
                        </div>
                        <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3   gap-10 ">
                            {Activity_Info.TinTinJobFair.history.map((item,index)=>(
                                <div key={item.id} className={index>2?"hidden":"rounded-2xl"}>
                                    <img className="rounded-t-2xl w-99 h-52" src={item.img} alt=""/>
                                    <div className="px-10 py-8 bg-white rounded-b-2xl">
                                        <div className="flex   flex-wrap">
                                            <div  className="bg-gray-200 rounded-full text-center text-gray-700 px-3 py-1 mr-2 mb-4 text-sm" >
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className=" text-2xl line-clamp-2 h-16">
                                            {item.h1}
                                        </div>
                                        <div className="flex mt-5 ">
                                            <Link href={item.more}>
                                                <a className=" text-black border border-black rounded-full  px-8 py-2.5" target="_blank">
                                                    了解更多
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="text-indigo-700 text-xl flex justify-between">
                            {Activity_Info.TinTinLand.title}
                            <Link href={`/meetingList/${Activity_Info.TinTinLand.latestIssue.type}`}>
                                <div className="flex bg-white text-black rounded-full cursor-pointer text-sm items-center px-4 py-1.5">
                                    <div className="mr-1" >
                                        查看更多
                                    </div>
                                    <div>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="md:w-1/2 text-sm mt-2">
                            {Activity_Info.TinTinLand.h1}
                        </div>
                        <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3   gap-10 ">
                            {Activity_Info.TinTinLand.history.map((item,index)=>(
                                <div key={item.id} className={index>2?"hidden":"rounded-2xl"}>
                                    <img className="rounded-t-2xl w-99 h-52" src={item.img} alt=""/>
                                    <div className="px-10 py-8 bg-white rounded-b-2xl">
                                        <div className="flex   flex-wrap">
                                            <div  className="bg-gray-200 rounded-full text-center text-gray-700 px-3 py-1 mr-2 mb-4 text-sm" >
                                                {item.name}
                                            </div>
                                        </div>
                                        <div className=" text-2xl line-clamp-2 h-16">
                                            {item.h1}
                                        </div>
                                        <div className="flex mt-5 ">
                                            <Link href={item.more}>
                                                <a className=" text-black border border-black rounded-full  px-8 py-2.5" target="_blank">
                                                    了解更多
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>


    )
}
export default Coures
