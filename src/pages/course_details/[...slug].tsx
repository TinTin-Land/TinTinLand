import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {Fragment, useEffect, useState} from "react";
import Link from "next/link";
import ChevronUpIcon from "@heroicons/react/outline/ChevronUpIcon";
import {Dialog, Disclosure, Transition} from "@headlessui/react";
import {useRouter} from "next/router";
import Course_info from "../../components/course_info";
import {useAtom} from "jotai";
import { Course_Detail } from "../../jotai";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const  Details = () =>{
    const [courseDetail] = useAtom(Course_Detail)
    useEffect(()=>{
    },[])

    return(
        <>
            <div className="hidden xl:flex bg-white justify-between rounded-xl xl:px-20 py-5">
                {courseDetail.Learning_Highlights.map(item=>(
                    <div key={item.h1} className="text-center text-gray-500 items-center ">
                        <div className="flex justify-center  ">
                            <img className="" src={item.icon} alt=""/>
                        </div>
                        <div className="flex justify-center mx-auto mt-2 w-32 ">
                            {item.h1}
                        </div>
                    </div>
                ))}

            </div>
            <div className="bg-white xl:hidden  grid grid-cols-2 md:grid-cols-4  gap-4  rounded-xl xl:px-20 py-5">
                {courseDetail.Learning_Highlights.map(item=>(
                <div key={item.h1} className="text-center text-gray-500 items-center ">
                    <div className="flex justify-center  ">
                        <img className="" src={item.icon} alt=""/>
                    </div>
                    <div className="flex justify-center mx-auto mt-2 w-32 ">
                        {item.h1}
                    </div>
                </div>
                ))}

            </div>
            <div className="text-indigo-700 text-2xl mt-20 mb-2">
                授课导师
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4` }>
                {courseDetail.teacher.map(item=>(
                    <div key={item.name} className="rounded-2xl   p-5">
                        <div className="flex items-center">
                            <img className="rounded-full w-16" src={item.img} alt=""/>
                            <div className="ml-2">
                                <div className='text-xl font-semibold'>
                                    {item.name}
                                </div>
                                <div >
                                    {item.title}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 ">
                            {item.introduction}
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}
const CourseInfo = () =>{
    const [courseDetail] = useAtom(Course_Detail)

    return(
        <div className="md:flex mb-20">
            <div className="md:w-7/12 xl:w-8/12 md:mr-10">
                <div className="text-indigo-700 text-2xl mt-20 mb-2">
                    课程大纲

                </div>
                <div className="mx-auto w-full rounded-2xl   bg-white ">
                    {courseDetail.Course_data.map(item=>(
                        <Disclosure key={item.title}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full items-center rounded-2xl  bg-white p-4 text-left  font-medium text-black   border-gray-200">
                                        <ChevronUpIcon
                                            className={`${
                                                open ? '' : 'rotate-180 transform '
                                            } h-5 w-5 text-black`}
                                        />
                                        <span key={item.title} className="ml-5">{item.title}</span>

                                    </Disclosure.Button>
                                    <div className="border-b border-gray-200 w-full">
                                    </div>
                                    <Disclosure.Panel className="px-10 py-4  text-gray-800 font-normal bg-gray-100 list-decimal">
                                        {item.content.map(list=>(
                                            <li key={list.h1} className="mt-1.5">
                                                {list.h1}
                                            </li>
                                        ))}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>

            </div>


            <div className="md:w-4/12 xl:w-5/12">
                {/*ProjectProvider*/}
                <div className="border-b border-gray-400 py-6">
                    <div className="text-indigo-700 text-2xl mt-14 ">
                        课程提供方
                    </div>
                    <div className="flex w-full grid grid-cols-2  xl:grid-cols-3 gap-4 mt-3 ">
                        {courseDetail.project_Provider.map(item=>(
                            <div key={item.name} className="flex items-center ">
                                <img className="rounded-full w-8 xl:w-10 " src={item.img} alt=""/>
                                <div className="ml-2 text-black font-semibold">
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*Suitable for the crowd*/}
                <div className="border-b border-gray-400 py-6">
                    <div className="text-indigo-700 text-2xl  ">
                        适合人群
                    </div>
                    <div className=" items-center w-full grid grid-cols-1 gap-4 mt-3 ">
                        {courseDetail.suitable_ForTheCrowd.map(item=>(
                            <div key={item.h1} className="flex items-center xl:text-xl">
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                                <div className="pl-3">
                                    {item.h1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*Community support*/}
                <div className="border-b border-gray-400 py-6">
                    <div className="text-indigo-700 text-2xl  ">
                        社区支持
                    </div>
                    <div className=" items-center w-full grid grid-cols-1 gap-4 mt-3 ">
                        {courseDetail.community_support.map(item=>(
                            <div key={item.h1} className="flex items-center xl:text-xl">
                                <i className={item.icon} aria-hidden="true"></i>
                                <div className="pl-3">
                                    {item.h1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" py-6">
                    <div className="text-indigo-700 text-2xl  ">
                        课程推荐
                    </div>
                    <div className="h-96 overflow-x-auto pr-2">
                    <div className=" items-center w-full grid grid-cols-1 gap-4 mt-3 ">
                        {courseDetail.community_recommendation.map(item=>(
                            <div key={item.h1} className="rounded-2xl   ">
                                <div className="grid xl:grid-cols-2 gap-4">
                                    <div className="flex items-center">
                                    <img className="rounded-full w-10 h-10 bg-white" src={item.avatar} alt=""/>
                                    <div className="ml-2">
                                        <div className=' font-semibold'>
                                            {item.name}
                                        </div>
                                        <div className=" text-xs text-gray-600">
                                            {item.position}
                                        </div>
                                    </div>
                                    </div>
                                    <div className={item.avatar2?"flex items-center":"hidden"}>
                                        <img className="rounded-full w-10 h-10" src={item.avatar2} alt=""/>
                                        <div className="ml-2">
                                            <div className=' font-semibold'>
                                                {item.name2}
                                            </div>
                                            <div className=" text-xs text-gray-600">
                                                {item.position2}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5  ">
                                    {item.h1}
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const CourseDetails = () =>{
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [courseDetail,setCourseDetail] = useAtom(Course_Detail)
    const WeiXinImg = {
        img:"/tintinVX.png"
    }
    useEffect(()=>{
        if (router.isReady){
            const course = router.query.slug[0]
            const fetchUserBounty = async () => {

                const newDetail = {
                    id:Course_info[course].id ,
                    img: Course_info[course].img,
                    cycle:Course_info[course].cycle,
                    name:Course_info[course].name,
                    state:Course_info[course].state,
                    startTime:Course_info[course].startTime,
                    registrationDeadline:Course_info[course].registrationDeadline,
                    link:Course_info[course].link,
                    h1:Course_info[course].h1,
                    type:Course_info[course].type,
                    Course_data: Course_info[course].Course_data,
                    Learning_Highlights:Course_info[course].Learning_Highlights,
                    teacher: Course_info[course].teacher,
                    project_Provider: Course_info[course].project_Provider,
                    community_recommendation: Course_info[course].community_recommendation,
                    suitable_ForTheCrowd: Course_info[course].suitable_ForTheCrowd,
                    community_support: Course_info[course].community_support,
                }
                setCourseDetail(newDetail)
                console.log(courseDetail)
            }
            fetchUserBounty()

        }
    },[router.isReady])
    return (

        <div className="mx-auto relative  bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24    mx-auto ">
                <button onClick={()=>{setOpen(true)}} className="fixed  z-30 bottom-6 right-6  ">
                    <img className="w-10 h-10 " src="/tintin-favicon.svg" alt=""/>
                </button>
                <div className="   py-10      md:flex justify-between " >
                    <div className="md:w-1/2">
                        <div className="flex mb-2">
                            <div className="bg-purple-300 px-2 py-0.5 text-2xl rounded-full">
                                {courseDetail.cycle}
                            </div>
                        </div>

                        <div className="text-2xl md:text-4xl xl:text-5xl ">
                            {courseDetail.name}
                        </div>
                        <div className="mt-10 text-sm xl:text-xl font-light whitespace-pre-line">
                            <div>
                                {courseDetail.h1}
                            </div>
                        </div>

                        <div className="mt-4 flex grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-1 xl:gap-2 ">
                            {courseDetail.type.map(list=>(
                            <div key={list.content} className="bg-white rounded-full text-center text-gray-700 px-2  py-1  text-xs xl:text-sm" >
                                {list.content}
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 md:ml-10 ">
                        <div className="" >
                            <img className="rounded-t-2xl  w-full  mt-10 md:mt-0" src={courseDetail.img} alt=""/>
                            <div className="bg-white p-10 xl:flex justify-between rounded-b-2xl items-center">
                                <div className="flex justify-between items-center">
                                    <div className="xl:pr-20">
                                        <div>
                                            开课时间
                                        </div>
                                        <div className="text-xl">
                                            {courseDetail.startTime}
                                        </div>
                                    </div>

                                    <div className="flex border-r border-black h-10 ">
                                    </div>
                                    <div className="xl:pl-20">
                                        <div>
                                            报名截止
                                        </div>
                                        <div className="text-xl">
                                            {courseDetail.registrationDeadline}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 xl:mt-0 flex justify-center">
                                <Link href={courseDetail.link}>
                                    <a className={classNames(courseDetail.state?"bg-black text-white rounded-full w-36 text-center px-8 py-2.5 ":" hidden")} target="_blank">
                                        立刻报名
                                    </a>
                                </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <Details/>
                <CourseInfo/>
            </div>

            <Tail/>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl items-center transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">

                                   <div className="flex justify-end">
                                       <button onClick={()=>{setOpen(false)}}
                                               className=" text-2xl  font-light">
                                           <img className="w-8" src="/common_icons/close.png" alt=""/>
                                       </button>
                                   </div>
                                    <div>
                                        <div className="text-center mt-2 text-xl font-semibold">
                                            加入Web3技术社区，与全球10000+开发者共同交流
                                        </div>
                                        <img src={WeiXinImg.img} alt=""/>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>


    )
}
export default CourseDetails
