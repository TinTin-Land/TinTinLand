import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {Fragment, useState} from "react";
import Link from "next/link";
import {Dialog, Listbox, Switch, Tab, Transition} from "@headlessui/react";
import {useAtom} from "jotai";
import { UserInfoState } from "../../jotai";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";


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

const UserInfo = () =>{
    const [open, setOpen] = useAtom(UserInfoState)
    const [imgUrl,setImgUrl] = useState("/头像_avatar.png")
    const [emailType,setEmailType] = useState(true)
    const [userNameType,setUserNameType] = useState(true)
    const [selectedNation, setSelectedNation] = useState(nation[0])
    const [selectedRole, setSelectedRole] = useState(Role[0])
    const [selectedExperience, setSelectedExperience] = useState(Experience[0])
    const [enabled, setEnabled] = useState(false)

    const inputImg = () => {
        if(window.FileReader){
            let fileInput = (document.getElementById('file') as HTMLInputElement).files[0]
            const reader = new FileReader()
            if (fileInput && fileInput.type.match('image.*')){
                reader.readAsDataURL(fileInput)
                reader.onload = function (e) {
                    console.log(e);
                    console.log(e.target.result);
                    setImgUrl(`${e.target.result}`)
            }

            }
        }

    }
    function checkemail()
    {
        const email = (document.getElementById("email") as HTMLInputElement).value
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
    return(
        <>
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

                    <div className="fixed z-10 inset-0 ">
                        <div className="flex items-center justify-center mt-10 overflow-auto p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-auto  shadow-xl items-center transform transition-all sm:my-8 sm:max-w-xl w-full sm:p-6">

                                    <div className="flex justify-between items-center">
                                        <button onClick={()=>{setOpen(false)}}
                                                className="flex items-center   ">
                                            <i className="fa fa-arrow-left" aria-hidden="true"></i>
                                            <div className="ml-2">
                                                返回我的主页
                                            </div>
                                        </button>
                                        <button className="text-xs bg-black text-white rounded-full  px-10 py-2 ">
                                            保存
                                        </button>

                                    </div>
                                    <div className="h-105 mt-2 overflow-y-auto">
                                        {/*基本信息*/}
                                        <div className="bg-rose-100 rounded-xl py-2 px-4 mt-4">
                                        <div className="text-xl font-semibold">
                                            基本信息
                                        </div>
                                        <div className="text-gray-500 text-sm">
                                            简单介绍自己，以便于别人了解你
                                        </div>
                                        {/*    头像*/}
                                        <div className="relative mt-2">
                                            <div className="w-20   rounded-full   flex items-center">
                                                <img  className=" border border-gray-300  rounded-full w-20 h-20" src={classNames(imgUrl)} alt=""/>
                                                <input onChange={inputImg} type="file" id="file" className="absolute opacity-0  w-20   flex justify-center "  accept="image/*"/>
                                            </div>
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
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    onKeyDown={checkemail}
                                                    onInput={checkemail}
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
                                                    name="comment"
                                                    id="comment"
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
                                        <div className="bg-rose-100 rounded-xl py-2 px-4 mt-4">
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
                                                    name="comment"
                                                    id="comment"
                                                    className="p-1 shadow-sm outline-none block w-full sm:text-sm border-gray-300 rounded-md resize-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                                    defaultValue={""}
                                                    placeholder="你的经历与成就"
                                                    maxLength= {300}
                                                />
                                            </div>
                                        </div>
                                            </div>
                                        {/*社交账号*/}
                                        <div className="bg-rose-100 rounded-xl py-2 px-4 mt-4">
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
                                                            id="twitter"
                                                            required
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
                                                            id="GitHub"
                                                            required
                                                            placeholder="GitHub"
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
                                                            placeholder="Telegram"
                                                            className="outline-none block w-full px-3 py-2 border  rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*隐私*/}
                                        <div className="bg-rose-100 rounded-xl py-2 px-4 mt-4">
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
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
const Homepage= () =>{
    const [, setOpen] = useAtom(UserInfoState)

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
                            onClick={()=>setOpen(true)}
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
        <UserInfo/>
            <Tail/>
        </div>


    )
}

export default Homepage
