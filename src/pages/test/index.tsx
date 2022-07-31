import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {ReactNode, useEffect} from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import {useRouter} from "next/router";
import Course_info from "../../components/course_info";




const Meeting = () =>{
    const router = useRouter();
    useEffect(()=>{

    },[])

    return (
        <div>
            <Link href="/">
                <a className={router.pathname == '/' ? 'active' : ''}>HOME</a>
            </Link>
            <Link href="/test">
                <a className={router.pathname == '/test' ? 'bg-black' : ''}>test</a>
            </Link>

            <Link href="/link1">
                <a className={router.pathname == '/' ? 'active' : ''}>LINK1</a>
            </Link>

            <Link href="/link2">
                <a className={router.pathname == '/' ? 'active' : ''}>LINK2</a>
            </Link>

        </div>

    )
}

export default Meeting
