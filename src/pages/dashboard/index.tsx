import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {Fragment, useEffect, useState} from "react";
import Link from "next/link";
import {Dialog, Listbox, Switch, Tab, Transition} from "@headlessui/react";

import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";
import Heads from "../../components/head";
import {client} from "../../client";
import {useRouter} from "next/router";
import {useAtom} from "jotai";
import {UserEmail} from "../../jotai";
import {name} from "ci-info";
import {user} from "../../shared/interface/user";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const nation = [
    { id: 1, name: '中国' },
    { id: 2, name: '美国' },

]
const Role = [
    { id: 1, name: '开发' },
    { id: 2, name: '设计' },

]
const Experience = [
    { id: 1, name: '一年不到' },
    { id: 2, name: '刚来' },

]

// @ts-ignore
const UserInfo = () =>{
    const router = useRouter();
    const [emailType,setEmailType] = useState(true)
    const [userNameType,setUserNameType] = useState(true)
    const [selectedNation, setSelectedNation] = useState(nation[0])
    const [selectedRole, setSelectedRole] = useState(Role[0])
    const [selectedExperience, setSelectedExperience] = useState(Experience[0])
    const [enabled, setEnabled] = useState(false)
    const [user_email,] = useAtom(UserEmail)

    useEffect(() => {
        if(router.isReady){
            const query = async() =>{
                const ret = await client.callApi('GetUser', {
                    user_email: user_email.user_email
                });
                if(ret.isSucc){
                    const data = ret.res.user;
                    (document.getElementById("userName") as HTMLInputElement).value = data.username;
                    (document.getElementById("userEmail") as HTMLInputElement).value = data.user_email;
                    (document.getElementById("description") as HTMLInputElement).value = data.description;

                    const NationIndex =  nation.find( o => o.name ===data.country);
                    setSelectedNation(NationIndex?nation[NationIndex.id - 1]:nation[0]);

                    const RoleIndex =  Role.find( o => o.name ===data.roles);
                    setSelectedRole(RoleIndex?Role[RoleIndex.id - 1]:Role[0]);

                    const ExperienceIndex =  Experience.find( o => o.name ===data.experience);
                    setSelectedExperience(ExperienceIndex?Experience[ExperienceIndex.id - 1]:Experience[0]);

                    (document.getElementById("achievements") as HTMLInputElement).value = data.achievements;
                    (document.getElementById("Twitter") as HTMLInputElement).value = data.twitter;
                    (document.getElementById("Github") as HTMLInputElement).value = data.github;
                    (document.getElementById("Telegram") as HTMLInputElement).value = data.telegram;
                    setEnabled(data.privacy)


                }

            }
            query()
        }
    },[router.isReady])

    function checkEmail()
    {
        const email = (document.getElementById("userEmail") as HTMLInputElement).value
        const expression = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        let objExp = new RegExp(expression);
        if(objExp.test(email)==true){
            setEmailType(true)
        }
        else{
            setEmailType(false)
        }
    }

    const checkNumber = async (e) =>{
        // e.target.value= e.target.value.replace(/[ ]/g,'')
        if (e.target.value.replace(/[ ]/g,'') =='') {
            setUserNameType(false)
        }else {
            setUserNameType(true)

        }
    }




    const Revise = async () => {
        const user:user = {
            username:(document.getElementById("userName") as HTMLInputElement).value,
            user_email:(document.getElementById("userEmail") as HTMLInputElement).value,
            user_course_passport:"",
            twitter:  (document.getElementById("Twitter") as HTMLInputElement).value,
            telegram: (document.getElementById("Telegram") as HTMLInputElement).value,
            roles:selectedRole.name,
            privacy:enabled,
            github:(document.getElementById("Github") as HTMLInputElement).value,
            experience:selectedExperience.name,
            description:(document.getElementById("description") as HTMLInputElement).value,
            country:selectedNation.name,
            achievements:(document.getElementById("achievements") as HTMLInputElement).value,
        }
        const ret = await client.callApi('UpdateUser', {
            user
        });
        if(ret.isSucc){
            alert("修改成功")
            location.reload();

        }else {
            alert("修改失败")
        }
    }
    return(
        <>

                <div className="mx-auto sm:rounded-lg  mt-2 sm:max-w-xl w-full pb-16">
                    <div className="flex justify-end ">
                        <button onClick={Revise} className="bg-black text-white rounded-full py-1 px-3">确认修改</button>
                    </div>
                    {/*基本信息*/}
                    <div className="bg-[#F9F9FB] rounded-xl p-5 mt-4">
                        <div className="text-xl font-semibold">
                            基本信息
                        </div>
                        <div className="text-gray-500 text-sm">
                            简单介绍自己，以便于别人了解你
                        </div>

                        {/*    用户名*/}
                        <div className="mt-2">
                            <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-700 mt-4 ">
                                用户名
                                <div className={classNames(userNameType?"hidden":"text-red-400")}>
                                    请填入正确的ID
                                </div>
                            </label>
                            <div className="mt-2">
                                <input
                                    id="userName"
                                    autoComplete="off"
                                    required
                                    placeholder="Enter your ID"
                                    onKeyUp={checkNumber}
                                    maxLength={24}
                                    className={classNames(userNameType?"outline-none":"border-red-400","outline-none block w-full px-3 py-2 border  rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500   sm:text-sm")}
                                />
                            </div>
                        </div>
                        {/*    邮箱地址*/}
                        <div className="mt-2">
                            <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-700">
                                邮箱地址
                                <div className={classNames(emailType?"hidden":"text-red-400")}>
                                    请检查你的邮箱格式
                                </div>
                            </label>
                            <div className="mt-1">
                                <input
                                    id="userEmail"
                                    name="email"
                                    type="email"
                                    autoComplete="off"
                                    readOnly={true}
                                    onKeyDown={checkEmail}
                                    onInput={checkEmail}
                                    required
                                    placeholder="Enter your email"
                                    className={classNames(emailType?"outline-none":"border-red-400","outline-none block w-full px-3 py-2 border  rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm")}
                                />
                            </div>
                        </div>
                        {/*    简介*/}
                        <div className="mt-2">
                            <label htmlFor="email" className=" flex justify-between text-sm font-medium text-gray-700">
                                简介
                            </label>
                            <div className="mt-1">
                                                <textarea
                                                    rows={4}
                                                    name="description"
                                                    id="description"
                                                    autoComplete="off"
                                                    className="p-1 shadow-sm outline-none block w-full sm:text-sm border-gray-300 rounded-md resize-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="请介绍你自己吧"
                                                    defaultValue={''}
                                                    maxLength= {300}
                                                />
                            </div>
                        </div>

                        {/*    选择国家*/}
                        <div className="mt-2">
                            <Listbox value={selectedNation} onChange={setSelectedNation}>
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="block text-sm font-medium text-gray-700">国家</Listbox.Label>
                                        <div className="mt-1 relative">
                                            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-full shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <span className="block truncate">{selectedNation.name}</span>
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {nation.map((nation) => (
                                                        <Listbox.Option
                                                            key={nation.id}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={nation}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                        {nation.name}
                                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-indigo-600',
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
                        {/*    选择Web3角色*/}
                        <div className="mt-2">
                            <Listbox value={selectedRole} onChange={setSelectedRole}>
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="block text-sm font-medium text-gray-700">Web3角色</Listbox.Label>
                                        <div className="mt-1 relative">
                                            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-full shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <span className="block truncate">{selectedRole.name}</span>
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {Role.map((items) => (
                                                        <Listbox.Option
                                                            key={items.id}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={items}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                        {items.name}
                                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-indigo-600',
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
                        {/*    选择经验*/}
                        <div className="mt-2">
                            <Listbox value={selectedExperience} onChange={setSelectedExperience}>
                                {({ open }) => (
                                    <>
                                        <Listbox.Label className="block text-sm font-medium text-gray-700">经验</Listbox.Label>
                                        <div className="mt-1 relative">
                                            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-full shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <span className="block truncate">{selectedExperience.name}</span>
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {Experience.map((items) => (
                                                        <Listbox.Option
                                                            key={items.id}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={items}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                        {items.name}
                                                                                    </span>
                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-indigo-600',
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
                    </div>
                    {/*成就*/}
                    <div className="bg-[#F9F9FB] rounded-xl p-5 mt-4">
                        <div className="mt-2">
                            <label htmlFor="email" className=" ">
                                <div className=" font-medium text-gray-700">
                                    成就
                                </div>
                                <div className="text-gray-500 text-sm">
                                    分享更多关于你的经历
                                </div>
                            </label>
                            <div className="mt-1">
                                                <textarea
                                                    rows={4}
                                                    name="achievements"
                                                    id="achievements"
                                                    autoComplete="off"
                                                    className="p-1 shadow-sm outline-none block w-full sm:text-sm border-gray-300 rounded-md resize-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                                    placeholder="你的经历与成就"
                                                    maxLength= {300}
                                                />
                            </div>
                        </div>
                    </div>
                    {/*社交账号*/}
                    <div className="bg-[#F9F9FB] rounded-xl p-5 mt-4">
                        <div className="mt-2">
                            <label htmlFor="email" className=" ">
                                <div className=" font-medium text-gray-700">
                                    社交账号
                                </div>
                                <div className="text-gray-500 text-sm">
                                    让大家在网络上找到你
                                </div>
                            </label>
                            {/*twitter*/}
                            <div className="mt-2">
                                <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-700">
                                    Twitter
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="Twitter"
                                        required
                                        autoComplete="off"
                                        placeholder="Twitter"
                                        className="outline-none block w-full px-3 py-2 border  rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/*github*/}
                            <div className="mt-2">
                                <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-700">
                                    GitHub
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="Github"
                                        required
                                        autoComplete="off"
                                        placeholder="Github"
                                        className="outline-none block w-full px-3 py-2 border  rounded-full shadow-sm placeholder-gray-400 focus:outline-none  focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            {/*telegram*/}
                            <div className="mt-2">
                                <label htmlFor="email" className="flex justify-between text-sm font-medium text-gray-700">
                                    Telegram
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="Telegram"
                                        required
                                        autoComplete="off"
                                        placeholder="Telegram"
                                        className="outline-none block w-full px-3 py-2 border  rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*隐私*/}
                    <div className="bg-[#F9F9FB] rounded-xl p-5 mb-20 sm:mb-0  mt-4 ">
                        <div className="mt-2">
                            <div  className="flex justify-between items-center ">
                                <div className=" font-medium text-gray-700">
                                    隐私设置
                                </div>
                                <div className="text-gray-700 flex  items-center">
                                    <div className="mr-2">
                                        公开我的主页
                                    </div>
                                    <Switch
                                        checked={enabled}
                                        onChange={setEnabled}
                                        className={classNames(
                                            enabled ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none '
                                        )}
                                    >
                                        <span className="sr-only">Use setting</span>
                                        <span
                                            className={classNames(
                                                enabled ? 'translate-x-5' : 'translate-x-0',
                                                'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                            )}
                                        >
        <span
            className={classNames(
                enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </span>
        <span
            className={classNames(
                enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      </span>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    )
}

const UserCourse = () =>{
    const router = useRouter();
    const [user_email,] = useAtom(UserEmail)
    const course_info = [
        {
            course_name:"",
            percent_complete:"",
            course_tab:[{content:""}],
            course_image:"",
            course_link:"",
            course_homework_id:[{id:""}]
        }
    ]
    const [courseInfo,setCourseInfo] = useState(course_info)
    // const [courseLength,setCourseLength ] = useState(false)
    useEffect(() => {
        if(router.isReady){
            const query = async() =>{
                const ret = await client.callApi('GetUserCourseList', {
                    email: user_email.user_email
                });
                if(ret.res !==undefined){
                   const data = JSON.parse(ret.res.courses)
                    let course_list = []
                    for (let i = 0 ;i<data.length ;i++) {
                        const course = await client.callApi('GetCourse', {
                            course_name: data[i].course_name
                        });
                        const course_homework = await client.callApi('GetCourseHomework', {
                            course_name: data[i].course_name

                        });
                        console.log()
                        let result = {
                            course_name:data[i].course_name,
                            percent_complete:data[i].percent_complete,
                            course_tab:JSON.parse(course.res.course_details.course_tab),
                            course_image:course.res.course_details.course_image,
                            course_link:course.res.course_details.course_link,
                            course_homework_id:JSON.parse(course_homework.res.course_homework.course_homework_id)
                        }
                        course_list.push(result)
                        setCourseInfo(course_list)
                    }
                }
            }
            query()
        }
    },[router.isReady])
    // const Course_info =
    //     [
    //         {
    //             id: "EVM_102",
    //             img: "/course/EVM_102.png",
    //             type: [
    //                 {
    //                     content: "Solidity"
    //                 },
    //                 {
    //                     content: "The Graph"
    //                 },
    //                 {
    //                     content: "链上合约数据的读取与写入"
    //                 },
    //                 {
    //                     content: "合约安全"
    //                 },
    //                 {
    //                     content: "Arbitrum-sdk"
    //                 },
    //
    //             ],
    //             h1: "第二期｜以太坊开发快速入门-轻松创建智能合约",
    //             link: "https://hkr.h5.xeknow.com/s/2yYwKx",
    //             state: true,
    //             workDone:2,
    //             work:[
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:true,
    //                     url:"",
    //                 },
    //                 {
    //                     state:true,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //
    //             ]
    //         },
    //         {
    //             id: "IC_103",
    //             img: "/course/IC_103.png",
    //             type: [
    //                 {
    //                     content: "Motoko"
    //                 },
    //                 {
    //                     content: "Canister"
    //                 },
    //                 {
    //                     content: "Javescript"
    //                 },
    //
    //             ],
    //             h1: "第三期｜Internet Computer：从核心技术入门到开发实战",
    //             link: "https://hkr.h5.xeknow.com/s/xRaCr",
    //             state: true,
    //             workDone:2,
    //             work:[
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:true,
    //                     url:"",
    //                 },
    //                 {
    //                     state:true,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //
    //             ]
    //
    //         },
    //         {
    //             id: "BAC_101",
    //             img: "/course/BAC_101.png",
    //             type: [
    //                 {
    //                     content: "比特币脚本系统"
    //                 },
    //                 {
    //                     content: "基础数据结构"
    //                 },
    //                 {
    //                     content: "执行模型"
    //                 },
    //
    //                 {
    //                     content: "UTXO 模型"
    //                 },
    //
    //                 {
    //                     content: "账户模型"
    //                 },
    //             ],
    //             h1:"从0开始学区块链：工程师眼中的比特币和以太坊",
    //             state: true,
    //             link: "https://hkr.h5.xeknow.com/s/VRdMD",
    //             workDone:2,
    //             work:[
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:true,
    //                     url:"",
    //                 },
    //                 {
    //                     state:true,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //
    //             ]
    //
    //         },
    //         {
    //             id: "FLOW_101",
    //             img: "/course/FLOW_101.png",
    //             type: [
    //                 {
    //                     content: "Cadence"
    //                 },
    //                 {
    //                     content: "Flow FT"
    //                 },
    //                 {
    //                     content: "Flow NFT"
    //                 },
    //                 {
    //                     content: "NFT Metadata"
    //                 },
    //                 {
    //                     content: "FCL(Flow Client Library)"
    //                 },
    //             ],
    //             h1: "第一期｜Flow DApp开发入门课程——从初识Cadence到搭建Marketplace",
    //             link: "https://hkr.h5.xeknow.com/s/PGm9a",
    //             state: true,
    //             workDone:7,
    //             work:[
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:true,
    //                     url:"",
    //                 },
    //                 {
    //                     state:true,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //
    //             ]
    //
    //         },
    //         {
    //             id: "IC_201",
    //             img: "/course/IC_201.png",
    //             type: [
    //                 {
    //                     content: "Motoko"
    //                 },
    //                 {
    //                     content: "Canister"
    //                 },
    //                 {
    //                     content: "ICP系统服务"
    //                 },
    //                 {
    //                     content: "Ti Jar"
    //                 },
    //
    //             ],
    //             h1: "第一期｜Internet Computer：从核心技术入门到开发实战进阶",
    //             link: "",
    //             state: false,
    //             workDone:2,
    //             work:[
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:true,
    //                     url:"",
    //                 },
    //                 {
    //                     state:true,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //                 {
    //                     state:false,
    //                     url:"",
    //                 },
    //
    //             ]
    //
    //         },
    //     ]

    if(courseInfo[0].course_name !== ""){
        return(
            <>
                <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10  outline-none">
                    {courseInfo.map(items=>(

                        <div key={items.course_name} className="rounded-2xl relative">
                            <div className="absolute right-3 top-3 ">
                                <div className={Number(items.percent_complete) == 100?"hidden ":
                                    "bg-[#0B9C7E] rounded-full px-2 text-xs py-0.5  text-white border"}>
                                    学习中({items.percent_complete}%)
                                </div>
                                <div className={Number(items.percent_complete) == 100?"bg-[#5448AE] rounded-full px-2 text-xs py-0.5  text-white border ":
                                    "hidden"}>
                                    已完成课程
                                </div>

                            </div>
                            <img className="rounded-t-2xl" src={items.course_image} alt=""/>
                            <div className="relative  rounded-b-2xl" >
                                <div className={classNames(false?"absolute":"bg-white","  flex flex-col rounded-b-2xl")}>
                                    <div className="px-10  pt-4">
                                        <div className="flex  h-20 overflow-hidden  flex-wrap">
                                            {items.course_tab.map(list=>(
                                                <div key={list.content} className="bg-gray-200 rounded-full text-center text-gray-700  h-7 px-3 py-1 mr-2 mb-4 text-sm" >
                                                    {list.content}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="line-clamp-2  h-12 mt-2">
                                            {items.course_name}
                                        </div>
                                        <div className="flex mt-5 ">
                                            <Link href=''>
                                                <a className={false?"text-xs  bg-black text-white rounded-full  px-8 py-2.5 mr-5":"hidden"}>
                                                    领取奖励
                                                </a>
                                            </Link>
                                            <Link href={items.course_link}>
                                                <a className={false?"hidden":"text-xs  bg-black text-white rounded-full  px-8 py-2.5 mr-5"}>
                                                    跳转上课
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={false?"mt-4  px-10 py-6":"mt-4 border-t px-10 py-4"}>
                                        <div className={false?"hidden":"flex justify-between items-center"}>
                                            <div className="text-xs text-gray-700">
                                                作业完成情况
                                            </div>
                                            <div className="flex">
                                                {items.course_homework_id.map(list =>(
                                                    <Link  key={list.id}  href=''>
                                                        <a className={list.id ==""?"hidden":""}>
                                                            <div  className={false?"bg-[#0B9C7E] w-4 h-4 mr-1 rounded-full":"bg-gray-200 w-4 h-4 mr-1 rounded-full"}>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                ) )}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <img className={false?"rounded-b-2xl h-70  w-full":"hidden"} src="/workDone.png" alt=""/>

                            </div>
                        </div>
                    ))}

                </div>
            </>
        )
    }else {
        return (
            <div className="py-48 flex justify-center">
                暂无课程
            </div>
        )
    }

}
const Homepage= () =>{


    const categories =[
        {
            title:"我的课程",
        },
        {
            title:"个人资料",
        },
    ]



    return (

        <div className="mx-auto relative  bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Heads/>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative md:px-5 pt-12    mx-auto ">

                <Tab.Group>
                    <Tab.List className="  space-x-1  mt-10 mx-auto   flex justify-center border-b border-[#000000]/20 pb-5">
                        <div className="rounded-full border border-[#000000]/20 bg-[#FFFFFF]">
                            {categories.map((category) => (
                                <Tab
                                    key={category.title}
                                    className={({ selected }) =>
                                        classNames(
                                            'px-12 py-1.5 font-medium rounded-full  focus:outline-none ',
                                            selected
                                                ? 'bg-black text-white '
                                                : 'text-black ')}>
                                    {category.title}
                                </Tab>
                            ))}
                        </div>

                    </Tab.List>

                    <Tab.Panels className="mt-2 ">
                        <Tab.Panel
                            className={classNames('  p-1 ')}>
                            <UserCourse/>
                        </Tab.Panel>


                        <Tab.Panel className={classNames('  p-1')}>
                            <UserInfo/>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <Tail/>
        </div>


    )
}

export default Homepage
