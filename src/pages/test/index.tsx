import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {ReactNode, useEffect} from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import {useRouter} from "next/router";
import Course_info from "../../components/course_info";
import {useAtom} from "jotai";
import { atomWithStorage } from "jotai/utils";




const Meeting = () =>{
    const router = useRouter();
    useEffect(()=>{

    },[])

    const darkModeAtom = atomWithStorage('darkMode', false)
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    const toggleDarkMode = () => setDarkMode(!darkMode)
    return (
        <div>

            <Link href="/link2">
                <a className={router.pathname == '/' ? 'active' : ''}>LINK2</a>
            </Link>

            {/*<div onClick={ssetnumber}>*/}
            {/*    {nmber}*/}
            {/*</div>*/}


            return (
            <>
                <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
                <button onClick={toggleDarkMode}>toggle theme</button>
            </>
        </div>

    )
}

export default Meeting
