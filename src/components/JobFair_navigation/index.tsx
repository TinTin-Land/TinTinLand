import Link from "next/link";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";

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
            <div className="w-full ">

            <div className="w-full ">
                {navigation.map(items=>(
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
                <div className="xl:mt-56 2xl:mt-96 flex  items-center text-base  p-4 px-6 rounded-xl justify-center">
                   <div className="text-base mr-4 ">
                       <div>
                           你的项目也在寻找工作伙伴吗？
                       </div>
                       <div className="  ">
                           可以
                           <a className="w-20 text-indigo-800 underline font-semibold  ">
                               填写表格
                           </a>
                           ，你的岗位也将展示在这里。
                       </div>
                   </div>
                    <img className="w-12" src="/common_icons/编组 13@2x.png" alt=""/>
                </div>
            </div>
        </>
    )
}


export default JobFair_Navigation
