import { Popover, Tab, Transition,Menu } from '@headlessui/react';
import Link from "next/link";
import { Switch } from '@headlessui/react'
import {ChevronDownIcon, Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import React, {Fragment, useEffect, useState} from "react";
import {useAtom} from "jotai";
import {Language, LoginState, UserEmail} from "../../jotai";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Media = () =>{

    const media = [
        {
            title:"YouTube",
            href:"https://www.youtube.com/@tintinland3610"
        },
        {
            title:"Bilibili",
            href:"https://space.bilibili.com/1152852334?spm_id_from=333.337.search-card.all.click"
        },

    ]

    return(
        <Menu as="div" className="relative">
            <div>
                <Menu.Button className="flex items-center w-20 py-2.5 text-sm leading-5 text-center  rounded-lg text-base xl:text-sm font-medium text-black ">
                    Live
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-black" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute  z-10 mt-2 w-28  rounded-md bg-white  shadow-2xl  focus:outline-none ">
                    <div className="py-1">
                        {media.map(item=>(
                            <Menu.Item key={item.title}>
                                {({ active }) => (
                                    <a
                                        rel="noreferrer"
                                        href={item.href}
                                        target ="_blank"
                                        className={classNames(
                                            active ? 'bg-gray-100 ' : 'text-gray-700',
                                            'block px-4 py-3 text-sm rounded-lg font-medium text-black'
                                        )}
                                    >
                                        {item.title}
                                        <i className={active ?"fa fa-arrow-right -rotate-45 absolute ml-1":"hidden "} aria-hidden="true" />
                                    </a>

                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
const Header = () =>{
    const router = useRouter();
    const { pathname, query, asPath } = router
    const [loginState,SetLoginState] = useAtom(LoginState)
    const [scroll,setScroll]=useState(false)
    const [,setLoginState] = useAtom(LoginState)
    const [userEmail,setUserEmail] =useAtom(UserEmail)
    const [language,setLanguage] =useAtom(Language)
    const { t } = useTranslation('header')

    const navigation = [
        { id: 1, name: t("课程"), href: '/course' },
        { id: 2, name: t("Hackathons"), href: '/hackathons' },
        { id: 3, name: t("活动"), href: '/meeting' },
        { id: 4, name: t("关于我们"), href: '/#About' },
    ]

    // Replace window.onscroll with useEffect
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const loginOut = () => {
        setLoginState(false);
        setUserEmail({ user_email: "", username: "" });
        router.push('/');
    }

    const languageChange = () => {
        const newLanguage = language === "cn" ? "en" : "cn";
        setLanguage(newLanguage);
        router.push({ pathname, query }, asPath, { locale: newLanguage });
    }

    useEffect(()=>{
        if(router.isReady){
            if(router.locale == "cn"){
                setLanguage("cn")
            }else {
                setLanguage("en")
            }
        }
    },[router.isReady])

    return (
        <header>
            <Popover className="relative bg-white  ">
                <div className={classNames(scroll?" backdrop-blur-sm bg-white/95":"",
                    "flex  fixed z-50 inset-x-0    transition duration-700 mb-10 pl-5 mb-5 justify-between items-center  p-3 md:p-3 sm:px-6 lg:justify-end md:space-x-10 lg:px-10 xl:px-20 items-center ")}>

                    <div className=" flex  justify-between lg:justify-start">
                        <div className="flex justify-start  ">
                            <Link  href="/" legacyBehavior>
                                <a>
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className=" w-auto   "
                                        src="/tintin_color_horizontal.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>

                    </div>
                    {/*导航*/}
                    <Tab.Group as="nav" className="hidden  lg:flex  space-x-8  text-white ">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link  href={item.href} legacyBehavior>
                                    <a  className=" ">
                                        <div  className='w-20 py-2.5 text-sm leading-5 text-center  rounded-lg text-sm font-medium text-black '>
                                            {item.name}
                                        </div>

                                    </a>
                                </Link>
                            </div>
                        ))}
                        <Media/>
                    </Tab.Group>
                    {/*切换*/}
                    <div className="hidden lg:flex w-full justify-end  items-center">
                        <div className="flex justify-center items-center">
                            <Switch
                                // checked={languageState}
                                onChange={languageChange}
                                className={classNames(
                                    'relative inline-flex flex-shrink-0 h-7 w-12  border border-gray-500 rounded-full cursor-pointer transition-colors ease-in-out duration-200 items-center bg-gray-200 '
                                )}
                             checked>
                                <span className="sr-only">Use setting</span>

                                <span
                                    aria-hidden="true"
                                    className={classNames(

                                        'pointer-events-none inline-block   w-5 rounded-full   transform ring-0 transition ease-in-out'
                                    )}
                                >
                                    <div className="flex justify-between items-center  w-12  text-xs">

                                        <div className={language==="cn"?"w-12   w-6  py-1":"bg-black rounded-full w-12  w-6 py-1 text-center text-white"}>
                                              EN
                                        </div>
                                         <div className={language==="en"?" w-12   w-6  py-1":"bg-black rounded-full w-12   w-6  py-1  text-white"}>
                                          中
                                        </div>
                            </div>

                                </span>
                            </Switch>

                        </div>
                    </div>

                    {/*手机版*/}
                    <div className="-mr-2  my-0.5 lg:hidden">
                        <Popover.Button className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  ">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                </div>

                <div className="fixed z-50 inset-x-0">
                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            className="absolute my-auto  fixed z-50 inset-x-0  min-h-screen  inset-y-auto   p-2 transition transform origin-top-right lg:hidden"
                        >
                            <div className="rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5 bg-white   transition duration-700 divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className=" w-auto"
                                                src="/tintin_color_horizontal.svg"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  ">
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>

                                </div>
                                <div className="py-6 px-5">
                                    <div className="grid grid-cols-1 gap-4 md:flex justify-between  items-center">
                                        {navigation.map((item) => (
                                            <Link key={item.name} href={item.href} legacyBehavior>
                                                <a
                                                    className="text-base font-medium text-gray-900    transition duration-700 "
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                        <Media/>
                                    </div>

                                </div>
                                <div className="flex justify-between  p-5 items-center">
                                        <div className="flex justify-between">
                                            <Switch
                                                // checked={languageState}
                                                onChange={languageChange}
                                                className={classNames(
                                                    'relative inline-flex flex-shrink-0 h-7 w-12  border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 items-center bg-gray-200 '
                                                )}
                                             checked>
                                                <span className="sr-only">Use setting</span>

                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(

                                                        'pointer-events-none inline-block   w-5 rounded-full   transform ring-0 transition ease-in-out duration-200'
                                                    )}
                                                >
                                    <div className="flex justify-between items-center  w-12  text-xs">
                                         <div className={language==="cn"?"w-12   w-6  py-1":"bg-black rounded-full w-12  w-6 py-1 text-center text-white"}>
                                              EN
                                        </div>
                                         <div className={language==="en"?" w-12   w-6  py-1":"bg-black rounded-full w-12   w-6  py-1  text-white"}>
                                          中
                                        </div>
                            </div>
                                </span>
                                            </Switch>
                                        </div>
                                </div>
                            </div>
                        </Popover.Panel>

                    </Transition>
                </div>
            </Popover>
        </header>
    )
}




export default Header