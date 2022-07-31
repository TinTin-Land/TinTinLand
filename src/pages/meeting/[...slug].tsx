import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Activity_Info from "../../components/activity_info";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Meeting = () =>{
    const router = useRouter()
    const info = {
        title:"",
        h1:"",
        latestIssue:{
            id:"",
            type:"",
            name:"",
            time:"",
            data:"",
            h1:"",
            img:"",
            subscriptionLink:"",
            more:"",
            state:false,
        },
        history:[
            {

                id:"",
                type:"",
                name:"",
                time:"",
                data:"",
                h1:"",
                img:"",
                subscriptionLink:"",
                more:"",
                state:false,
            },

]

}
    const [type,setType] = useState(info)

    useEffect(()=>{
        if (router.isReady){
            const type = router.query.slug[0]
            const fetchUserBounty = async () => {
                const newInfo = {
                    title:Activity_Info[type].title,
                    h1:Activity_Info[type].h1,
                    latestIssue:Activity_Info[type].latestIssue,
                    history: Activity_Info[type].history

                }
                setType(newInfo)
                console.log(Activity_Info[type].history)

            }
            fetchUserBounty()

        }
    },[router.isReady])
    return (

        <div className="mx-auto relative  bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24    mx-auto ">
                <div className="   py-10     xl:flex justify-between " >
                    <div className=" xl:w-4/12 2xl:w-1/2 ">
                        <div className="text-2xl md:text-4xl xl:text-6xl ">
                            <div>
                                {type.title}
                            </div>

                        </div>
                        <div className="mt-10 text-base md:text-2xl font-light">
                            <div>
                                {type.h1}
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-9/12  xl:ml-4 mt-10 xl:mt-0 ">
                        <div className="" >
                            <div className="md:flex  w-full   py-8 md:bg-white rounded-2xl">
                                <img className="rounded-t-2xl md:rounded-xl md:mx-8 w-7/12  " src={type.latestIssue.img} alt=""/>
                                <div className=" bg-white p-5 xl:p-0  rounded-b-2xl ">
                                    <div className="pt-4 md:pt-0 flex ">
                                        <div className="rounded-full bg-gray-200 text-gray-700 px-2.5 py-0.5 text-sm">
                                            {type.latestIssue.name}
                                        </div>
                                    </div>
                                    <div className="text-2xl  mt-5">
                                        {type.latestIssue.time}
                                    </div>
                                    <div className="font-light font-semibold">
                                        {type.latestIssue.data}
                                    </div>

                                    <div className="text-base xl:text-xl font-semibold 2xl:text-2xl pr-1">
                                        <div className='flex flex-wrap my-9 items-center h-20 md:h-32 xl:h-36 2xl:line-clamp-4  xl:line-clamp-5 '>
                                            {type.latestIssue.h1}
                                        </div>
                                    </div>
                                    <div className="flex   ">

                                        <div className="flex justify-between  items-center">
                                            <div className="">
                                                <Link href={type.latestIssue.subscriptionLink}>
                                                    <a className={classNames(type.latestIssue.state?"bg-black text-white rounded-full  px-8 py-2.5 mr-5":"hidden")}>
                                                        订阅
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="">
                                                <Link href={type.latestIssue.more}>
                                                    <a className=" text-black border border-black rounded-full  px-4 py-2.5">
                                                        了解更多
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div>
                    <div className="text-indigo-700 text-2xl">
                        往期回顾
                    </div>
                    <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 ">
                        {type.history.map(item=>(
                            <div key={item.id} className="rounded-2xl  ">
                                <img className="rounded-t-2xl" src={item.img} alt=""/>
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
            <Tail/>
        </div>


    )
}
export default Meeting
