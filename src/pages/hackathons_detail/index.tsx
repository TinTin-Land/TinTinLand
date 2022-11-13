import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Heads from "../../components/head";
import HackathonsState from "../../components/state";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Links = () =>{
    return(
        <div className="p-3">
           <div className="">
               众多veb2五联网从业者在进入区块維行业时，都会碰到技术底层、产品污态等差异而造成的适应期，同时也需要花幾比较大的入门成本。如开发者需要学习和学握不司公链上使用的开发语言，产品经理需要理解众多 DApp 与veb2 产品架构上的技术区别。
           </div>
            <div className="mt-4">
                为了解决广大开发者们对区块链行业的进入需求，也为了更好地连接 Web2 和 Xcb3 的互联网人才们，TinTinLand 联合 Flox 举办了区块链行业首创的 Vcb3 Jam 活动，以时下 最热门的区块链賽道 NFT+、NFI featured 为賽道，给对区块链感兴趣的 xcb2 人才们，提供一个与区块链开发者合作交流的平台，让双方有机会深入浅出地进行行业深度交流和落地方案技术探讨，并通过头脑风暴将 Wcb2和xeb3的观点、想法和创意互相碰撞和交流，最终产出一个令人惊吸的项目方案，参与活动奖项的角逐。
            </div>
            <div className="mt-4">
                所有参赛项目都需要围绕本期Wcb3 Jam黑客松主题-‘时人不识凌云木，直待凌云始道高进行开发和设计。本期主题没有官方解读，台工参我者司以根据自己的解读来将主题相关内容设计进各自的产品当中，并且需要在Demo Day的产品演示环节当中对主题相关内容和自己的理解有所展现。
            </div>
            <div className="font-semibold mt-4">
                时间
            </div>
            <div className="mt-4">
                2022年7月7日～2022年8月14日
            </div>
            <div className="font-semibold mt-4">
              赛题
            </div>
            <div className="mt-4">
                本次 Web3Jam 我们将以时下最热门的 NFT+ 作为比賽賽道，它们分别为
            </div>
            <div className="mt-4">
                NFT + DAO / Tools
            </div>
            <div className="mt-4">
          NFT + Game / Entertainment
            </div>
            <div className="mt-4">
                NFT + Life / Metaversce
            </div>
        </div>
    )
}

const Hackathons_detail = () =>{
    const categories = [
        {
            title:"总览"
        },
        {
            title:"Links"
        },
        {
            title:"Q&A"
        },
    ]
    return (

        <div className="mx-auto relative bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Heads/>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24 mx-auto">
                <div className="  rounded-xl bg-left md:bg-cover overflow-hidden h-48" style={{backgroundImage:"url('/黑客松_bg.png')"}} >

                    <div className=" text-center mt-20 flex justify-center  text-2xl xl:text-5xl">
                      ETH CC HACKATHON
                    </div>

                </div>
                <div className="xl:flex mt-10">
                    <div className="xl:w-4/12 h-full bg-white rounded-md px-10 my-2 pb-5">
                        <div className="border-b border-[#000000]/20  py-5">
                        <div>
                            Web3 Jam
                        </div>
                        <div>
                            活动时间
                        </div>
                        <div>
                            30 July 2022 - 30 July 2022
                        </div>
                        <div className="flex mt-5 ">
                            <Link href="">
                                <a className="text-xs 2xl:text-xl bg-black text-white rounded-full  px-8 py-2.5 mr-5">
                                    立刻报名
                                </a>
                            </Link>

                            <Link href="">
                                <a className="text-xs 2xl:text-xl text-black border border-black rounded-full  px-8 py-2.5">
                                    了解更多
                                </a>
                            </Link>
                        </div>
                        </div>
                        <div className="border-b border-[#000000]/20  py-5">
                            <div className="text-[#5448AE] font-semibold">
                                信息标题
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div  className="flex items-center ">
                                    <img className="rounded-full w-8  " src="/tintinlogo.svg" alt=""/>
                                    <div className="ml-1 text-black font-semibold">
                                       TinTinLand
                                    </div>
                                </div>
                                <div  className="flex items-center ">
                                    <img className="rounded-full w-8  " src="/tintinlogo.svg" alt=""/>
                                    <div className="ml-1 text-black font-semibold">
                                        TinTinLand
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-[#000000]/20  py-5">
                            <div className="text-[#5448AE] font-semibold">
                                信息标题
                            </div>
                            <div className="mt-4 ">
                                <div  className="flex items-center ">
                                    <img className="rounded-full w-8  " src="/tintinlogo.svg" alt=""/>
                                    <div className="ml-1 text-black font-semibold">
                                        TinTinLand
                                    </div>
                                </div>
                                <div  className="flex items-center mt-3 ">
                                    <img className="rounded-full w-8  " src="/tintinlogo.svg" alt=""/>
                                    <div className="ml-1 text-black font-semibold">
                                        TinTinLand
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="md:w-full ml-4">
                        <Tab.Group>
                            <Tab.List className="mt-2   border-b-2 border-[#000000]/20 mx-auto  flex ">
                                <div className="rounded-lg  text-[#000000]/50   flex justify-start  w-full">
                                    {categories.map((item) => (
                                        <Tab
                                            key={item.title}
                                            className={({ selected }) =>
                                                classNames(
                                                    ' w-full xl:w-24 py-1.5 md:py-1 -mb-0.5 font-medium  outline-none text-xl',
                                                    selected
                                                        ? 'text-[#5448AE] border-b-2  border-[#5448AE]  '
                                                        : ' ')}>
                                            {item.title}
                                        </Tab>
                                    ))}
                                </div>
                            </Tab.List>
                            {/*Recent*/}
                            <Tab.Panels className="mt-2 w-full  h-new-1 xl:h-new 2xl:h-100  overflow-y-auto scrollbar-thin  scrollbar-thumb-fuchsia-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full   xl:pr-4 ">
                                <Tab.Panel className=' rounded-xl md:p-1   '>
                                    <Links/>
                                    <Links/>
                                </Tab.Panel>
                                {/*Popular*/}
                                <Tab.Panel className=' rounded-xl md:p-1   '>
                                    <Links/>
                                </Tab.Panel>
                                <Tab.Panel className=' rounded-xl md:p-1   '>

                                    <Links/>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>


                    </div>



                </div>
            </div>
            <Tail/>
        </div>


    )
}
export default Hackathons_detail
