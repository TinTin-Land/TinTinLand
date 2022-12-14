import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {Fragment, useEffect, useState} from "react";
import Link from "next/link";
import ChevronUpIcon from "@heroicons/react/outline/ChevronUpIcon";
import {Dialog, Disclosure, Transition} from "@headlessui/react";
import {useRouter} from "next/router";
import Course_info from "../../components/course_info";
import {useAtom} from "jotai";
import {Course_Detail, LoginState, OpenLoginState, PopUpBoxInfo, PopUpBoxState, UserEmail} from "../../jotai";
import Heads from "../../components/head";
import {Pop_up_box} from "../../components/pop_up_box";
import {client} from "../../client";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const  Details = () =>{
    const [courseDetail] = useAtom(Course_Detail)
    useEffect(()=>{
    },[])

    return(
        <>
            <div className={classNames("hidden xl:flex bg-white justify-between rounded-xl xl:px-20 py-5")}>
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
            <div className="text-indigo-700 text-2xl mt-20 mb-2 ">
                ????????????
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
                    ????????????
                </div>
                <div className="mx-auto w-full rounded-2xl   bg-white ">
                    {courseDetail.Course_data.map(item=>(
                        <Disclosure key={item.title}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full items-center rounded-2xl  bg-white p-4 text-left  font-medium text-black   border-gray-200">
                                        <div className={classNames(item.content.length !=0?"":"hidden")}>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? '' : 'rotate-180 transform '
                                            } h-5 w-5 text-black`}
                                        />
                                        </div>
                                        <span key={item.title} className="ml-5">{item.title}</span>

                                    </Disclosure.Button>
                                    <div className="border-b border-gray-200 w-full">
                                    </div>
                                    <Disclosure.Panel className={classNames(item.content.length != 0?"px-10 py-4  text-gray-800 font-normal bg-gray-100 list-decimal":"hidden")}>
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
                        ???????????????
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
                        ????????????
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
                        ????????????
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

                <div className={classNames(courseDetail.community_recommendation.length !=0?"py-6":" hidden ")}>
                    <div className="text-indigo-700 text-2xl">
                        ????????????
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
    const [loginState,] = useAtom(LoginState)
    const [user_email,] = useAtom(UserEmail)
    const [openLogin,setOpenLogin] =useAtom(OpenLoginState)
    const [pop_up_boxState,setSop_up_boxState] = useAtom(PopUpBoxState)
    const [pop_up_boxData,setPop_up_boxData] =useAtom(PopUpBoxInfo)
    const WeiXinImg = {
        img:"/tintinVX.png"
    }
    const Signup = async (courseName) => {
        if(loginState){
            setOpenLogin(true)
            const CourseId = await client.callApi('v1/teachable/GetCourseId', {
                course_name:courseName
            });
            const TaUser = await client.callApi('v1/teachable/GetTaUser', {
                user_email: user_email.user_email
            });

            if (CourseId.res !==undefined && TaUser.res!==undefined) {
                if(!CourseId.isSucc && !TaUser.isSucc){
                    const data = await client.callApi('v1/teachable/EnrollCourse', {
                        course_id: CourseId.res.course_id,
                        user_id: TaUser.res.user_id
                    });
                    console.log(data)
                    setOpenLogin(false)
                    setPop_up_boxData({
                        state:true,
                        type:"??????",
                        title:"",
                    })
                    setSop_up_boxState(true)
                }else {
                    setOpenLogin(false)
                    setPop_up_boxData({
                        state:false,
                        type:"??????",
                        title:"???????????????????????????",
                    })
                    setSop_up_boxState(true)
                }

                // console.log(CourseId.res.course_id,TaUser.res.user_id)
            }else {
                setOpenLogin(false)
                setPop_up_boxData({
                    state:false,
                    type:"??????",
                    title:"???????????????",
                })
                setSop_up_boxState(true)
            }

        }
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
                    AboutStart:Course_info[course].AboutStart,
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

        <div className="mx-auto relative bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Heads/>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24    mx-auto ">
                <button onClick={()=>{setOpen(true)}} className="fixed  z-30 bottom-6 right-6  ">
                    <img className="w-10 h-10 " src="/tintinlogo.svg" alt=""/>
                </button>
                <div className="pb-10 md:flex justify-between " >

                    <div className="md:w-1/2">
                        <div className="flex mb-2">
                            <div className="bg-purple-300 px-2 py-0.5 text-2xl rounded-full">
                                {courseDetail.cycle}
                            </div>
                        </div>
                        <div className="text-2xl md:text-4xl xl:text-5xl ">
                            {courseDetail.name}
                        </div>
                        <div className="md:hidden md:w-1/2 md:ml-10 mb-10">
                            <div className="" >
                                <img className="rounded-t-2xl  w-full  mt-10 md:mt-0" src={courseDetail.img} alt=""/>
                                <div className="bg-white p-10 xl:flex justify-between rounded-b-2xl items-center">
                                    <div className="flex justify-between items-center">
                                        <div className="xl:pr-20">
                                            <div>
                                                ????????????
                                            </div>
                                            <div className="text-xl">
                                                {courseDetail.startTime}
                                            </div>
                                        </div>

                                        <div className="flex border-r border-black h-10 ">
                                        </div>
                                        <div className="xl:pl-20">
                                            <div>
                                                ????????????
                                            </div>
                                            <div className="text-xl">
                                                {courseDetail.registrationDeadline}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 xl:mt-0 flex justify-center">
                                        <button onClick={()=>Signup(courseDetail.h1)}>
                                            <div   className={courseDetail.state?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-8 py-2.5 mr-5":"hidden"} >
                                                ????????????
                                            </div>
                                        </button>
                                        <button onClick={()=>Signup(courseDetail.h1)} >
                                            <div className={courseDetail.AboutStart?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-8 py-2.5 mr-5":"hidden"}>
                                                ????????????
                                            </div>
                                        </button>
                                    </div>

                                </div>
                            </div>
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

                    <div className="hidden md:block md:w-1/2 md:ml-10 ">
                        <div className="" >
                            <img className="rounded-t-2xl  w-full  mt-10 md:mt-0" src={courseDetail.img} alt=""/>
                            <div className="bg-white p-10 xl:flex justify-between rounded-b-2xl items-center">
                                <div className="flex justify-between items-center">
                                    <div className="xl:pr-20">
                                        <div>
                                            ????????????
                                        </div>
                                        <div className="text-xl">
                                            {courseDetail.startTime}
                                        </div>
                                    </div>

                                    <div className="flex border-r border-black h-10 ">
                                    </div>
                                    <div className="xl:pl-20">
                                        <div>
                                            ????????????
                                        </div>
                                        <div className="text-xl">
                                            {courseDetail.registrationDeadline}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 xl:mt-0 flex justify-center">
                                    <button onClick={()=>Signup(courseDetail.h1)}>
                                        <div   className={courseDetail.state?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-8 py-2.5 mr-5":"hidden"} >
                                            ????????????
                                        </div>
                                    </button>
                                    <button onClick={()=>Signup(courseDetail.h1)} >
                                        <div className={courseDetail.AboutStart?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-8 py-2.5 mr-5":"hidden"}>
                                            ????????????
                                        </div>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Details/>
                <CourseInfo/>
            </div>

            <Tail/>
            <Transition.Root show={openLogin} as={Fragment}>
                <Dialog as="div" className="relative z-30" onClose={()=>false}>
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
                                <Dialog.Panel className="">

                                    <div className="animate-spin text-white">
                                        <i className="fa fa-spinner f-spin fa-2x fa-fw"></i>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <Pop_up_box/>
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
                                            ??????Web3????????????????????????10000+?????????????????????
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
