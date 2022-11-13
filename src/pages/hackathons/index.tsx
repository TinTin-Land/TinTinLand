import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Heads from "../../components/head";
import HackathonsState from "../../components/state";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Hackathons = () =>{
    const Course_info =
      [
          {
              id:"",
              state:"Ended",
              name:"WEB3 JAM ",
              time:"2022.06.17 - 2022.08.14",
              h1:"Flow&TinTinLand 六月举办一场在 Flow 上以 NFT+、NFT featured 为主题的开发者活动，希望同时吸引 Web2 希望进入 Web3 世界的产品方以及 Flow 上的开发者，来互相认识结合各自的经验和长处碰撞想法，并让更多融合与创新发生在Flow上 ",
              link:"",
              more:"https://www.notion.so/tintinland1/Web3-Jam-2022-Summer-0a0f85afb0db49cd9980cbdcc61f3101",
              img:"/hackathons/黑客松-1.png",
          },
          {
              state:"Ended",
              name:"Supernova Hackathon ",
              time:"2022.05.10 - 2022.06.20  ",
              h1:"本次黑客松是 DFINITY官方举办的全球首场黑客松，也是官方第一次在中国举办黑客松，从11月15日正式报名到决赛历时1个多月，共有200多位开发者报名，最终超过20个团队入围总决赛.",
              link:"",
              more:"https://mp.weixin.qq.com/s/-xWsmrblKv5ygAQluPz-Mw",
              img:"/hackathons/黑客松-2.png",
          },
          {
              state:"Ended",
              name:"Warpspeed 2021 DFINITY×IAF ",
              time:"2021.11.15 -  2021.12.19 ",
              h1:"DFINITY 基金会举办 IC 的首届全球黑客松 Supernova，希望更多开发者尝试在 IC 上构建完全去中心化服务应用，赢得市场和用户的认可. ",
              link:"",
              more:"https://mp.weixin.qq.com/s/e0QRDW7kxzBfgfx0NP4HSw",
              img:"/hackathons/黑客松-3.png",
          }
      ]

    return (

        <div className="mx-auto relative bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Heads/>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24 mx-auto">
                <div className="p-10  rounded-xl bg-left md:bg-cover overflow-hidden"  style={{backgroundImage:"url('/黑客松_bg.png')"}}>
                    <div className="">
                        <div className="text-[#5448AE] text-xl mb-5">
                            Hackathons
                        </div>
                        <div className="text-4xl mb-5">
                            <div className="mb-2">
                                建立与全球开发者的联系，
                            </div>
                            <div>
                                一起组队玩转黑客松
                            </div>
                        </div>
                        <div className="text-xl ">
                            用区块链技术创建 Web3 世界 <br/>协助开发者创建团队，提供技术指导，引入投资。
                        </div>
                    </div>


                </div>
                <div>
                    <div className="text-indigo-700 text-xl mt-10">
                        Explore Hackathons
                    </div>
                    <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3  gap-10 ">
                        {Course_info.map(items=>(
                            <div key={items.id} className="rounded-2xl relative">
                                <div className={classNames(HackathonsState[items.state]," flex justify-end right-4 mt-5 rounded-full px-3 py-1   absolute")}>
                                    {items.state}
                                </div>
                                <img className="rounded-t-2xl w-full  h-56" src={items.img} alt=""/>
                                <div className="px-10 py-8 bg-white rounded-b-2xl">
                                    <div className="   mt-2">
                                        {items.name}
                                    </div>
                                    <div className="text-sm   mt-2">
                                        {items.time}
                                    </div>
                                    <div className="line-clamp-4 h-20 text-sm text-[#000000]  mt-2">
                                        {items.h1}
                                    </div>
                                    <div className="flex mt-5 ">
                                        <Link href={items.link}>
                                            <a className={items.state=="ComingSoon" || items.state=="OnGoing"  ?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-8 py-2.5 mr-5":"hidden"}>
                                                立刻报名
                                            </a>
                                        </Link>

                                        <Link href={`/hackathons_detail`}>
                                            <a className="text-xs 2xl:text-xl text-black border border-black rounded-full  px-8 py-2.5">
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
            <Tail/>
        </div>


    )
}
export default Hackathons
