import Link from "next/link";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Talent_pool_navigation = [
    {
        title:"开发",
        number:"1",
        sort:[
            {
                list:"web 前端工程师",
                number:"1"
            },
            {
                list:"后端工程师",
                number:"1"
            },
            {
                list:"移动端开发工程师",
                number:"1"
            },
            {
                list:"智能合约工程师",
                number:"1"
            },
            {
                list:"测试工程师",
                number:"1"
            },
            {
                list:"安全工程师",
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
const Talent_pool = () =>{
    const router = useRouter();
    const [pathname,setPathname] = useState("")
    useEffect(()=>{
        if (router.isReady){
            const content = router.query.slug[0]
            console.log(router.query.slug[0])
            const fetchUserBounty = async () => {
                setPathname(content)
                console.log(`/projects/${pathname}`)
            }
            fetchUserBounty()

        }
    },[router.isReady,router.query.slug])
    return(
        <>
            <div className=" w-full ">
                {Talent_pool_navigation.map(items=>(
                    <div key={items.title}>
                        <Link href={`${items.title}`}>
                            <a className={classNames(`/projects/${items.title}` == `/projects/${pathname}` ? 'bg-white shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-rose-500/50' : ''
                                ,"flex justify-between p-2 text-sm md:text-xl text-black rounded-xl px-4 ")}>
                                <div className=" font-semibold ">
                                    {items.title}
                                </div>
                                <div className="font-normal ">
                                    {items.number}
                                </div>
                            </a>
                        </Link>
                        <div className="">
                            {items.sort.map(lists=>(
                                <div key={lists.list}>
                                    <Link href={`${lists.list}`}>
                                        <a className={classNames(`/projects/${lists.list}` == `/projects/${pathname}` ? 'bg-white shadow-[0_2px_16px_-1px_rgb(0,0,0,0.1)] shadow-rose-500/50' : ''
                                            ,"flex justify-between p-2 text-sm md:text-base text-black rounded-xl px-4")}>
                                            <div className="mr-3 ">
                                                {lists.list}
                                            </div>
                                            <div className="font-normal ">
                                                {lists.number}
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            ))}

                        </div>

                    </div>
                ))}

            </div>

        </>
    )
}


export {Talent_pool,Talent_pool_navigation}
