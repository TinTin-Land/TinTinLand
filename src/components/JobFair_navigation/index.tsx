import Link from "next/link";
import { useRouter } from "next/router";
import {useEffect, useState, useMemo} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const navigation = [
    {
        title:"开发",
        number:"1",
        sort:[
            {
                list:"web 前端工程师",
                number:"1"
            },
        ]
    },
    {
        title:"产品",
        number:"1",
        sort:[

        ]
    },
    {
        title:"设计",
        number:"1",
        sort:[

        ]
    },
    {
        title:"运营",
        number:"1",
        sort:[

        ]
    },
]
const JobFair_Navigation = () =>{
    const router = useRouter();
    const [pathname,setPathname] = useState("")
    useEffect(()=>{
        if (router.isReady && router.query.slug?.[0]) {
            setPathname(router.query.slug[0]);
        }
    }, [router.isReady, router.query.slug]);

    const isActive = useMemo(() => (path: string) => `/projects/${path}` === `/projects/${pathname}`, [pathname]);

    return(
        <div className="w-full">
            {navigation.map(item => (
                <div key={item.title}>
                    <Link href={`/projects/${item.title}`}>
                        <a className={classNames(
                            isActive(item.title) ? 'bg-white shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-rose-500/50' : '',
                            "flex justify-between p-2 text-sm md:text-xl text-black rounded-xl px-4"
                        )}>
                            <div className="font-semibold">{item.title}</div>
                            <div className="font-normal">{item.number}</div>
                        </a>
                    </Link>
                    <div>
                        {item.sort.map(subItem => (
                            <Link key={subItem.list} href={`/projects/${subItem.list}`}>
                                <a className={classNames(
                                    isActive(subItem.list) ? 'bg-white shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-rose-500/50' : '',
                                    "flex justify-between p-2 text-sm md:text-base text-black rounded-xl px-4"
                                )}>
                                    <div className="mr-3">{subItem.list}</div>
                                    <div className="font-normal">{subItem.number}</div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}


export default JobFair_Navigation
