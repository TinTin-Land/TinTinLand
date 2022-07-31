import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {useState} from "react";
import Link from "next/link";
import { Tab } from "@headlessui/react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Homepage= () =>{
    let [categories] = useState({
        简介: [],
        TinTin足迹: [],
    })

    const usertype = [
        {
            type:"产品经理",
        },
        {
            type:"DAO贡献者",
        },
        {
            type:"The Graph",
        },
    ]

    return (

        <div className="mx-auto relative  bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Header/>
            <div className=" lg:px-10 xl:px-32 relative px-5 pt-24 pb-96   mx-auto ">

                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div>
                            <img className="w-20 rounded-full" src="https://cdn.discordapp.com/attachments/897398778166906911/978238644810842133/unknown.png" alt=""/>
                        </div>
                        <div className="ml-10 grid grid-cols-8 gap-2">
                            {usertype.map(item=>(
                            <div key={item.type} className="bg-purple-100 rounded-full text-center text-gray-700 px-4 py-0.5  text-xs " >
                                {item.type}
                            </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-28 flex justify-center py-1.5 px-3 border border-black  rounded-full shadow-sm text-sm font-medium"
                        >
                           Edit profile
                        </button>
                    </div>

                </div>
                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="font-semibold ">
                            TestUser312
                        </div>
                        <div className="border-r h-4 mx-3 border-black">

                        </div>

                            <Link href="">
                                <a>
                                    <img src="/icon-twitter.png" alt=""/>
                                </a>
                            </Link>
                    </div>
                </div>
                <div className="flex items-center mt-3 text-gray-600">
                    <div className="flex items-center">
                    <i className="fa fa-briefcase" aria-hidden="true"></i>
                    <div className="text-xs ml-1">
                        产品策划@TinTinLand
                    </div>
                    </div>
                    <div className="flex items-center ml-5">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <div className="text-xs ml-1">
                            2022年6月22日 加入
                        </div>
                    </div>
                </div>

                <Tab.Group>
                    <Tab.List className="  space-x-1  mt-10 mx-auto  flex justify-between border-b border-gray-300">
                        <div>
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-24  font-medium  mr-8 focus:outline-none ',
                                            selected
                                                ? 'border-b-2  border-black'
                                                : ' text-gray-500 ')}>
                                    {category}
                                </Tab>
                            ))}
                        </div>

                    </Tab.List>

                    <Tab.Panels className="mt-2 ">
                        <Tab.Panel
                            className={classNames('  p-1 ')}>
                            <div className="flex justify-center my-auto">
                                <div className="text-center text-gray-500">
                                    <img className="mt-20"  src="/无简介空状态.png" alt=""/>
                                    暂无个人简介
                                </div>
                            </div>

                        </Tab.Panel>

                        <Tab.Panel className={classNames('  p-1')}>
                            <div className="flex justify-center my-auto">
                                <div className="text-center text-gray-500">
                                    <img className="mt-20"  src="/无简介空状态.png" alt=""/>
                                    暂无个人简介
                                </div>
                            </div>


                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>

            <Tail/>
        </div>


    )
}

export default Homepage
