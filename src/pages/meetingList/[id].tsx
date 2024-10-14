import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Heads from "../../components/head";
import { Activity_detail} from "../../jotai";
import {useAtom} from "jotai";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { https} from "../../constants";
import {useTranslation} from "next-i18next";
import Image from 'next/image';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Meeting = ({ activity_details }: { activity_details: string }) => {
    const router = useRouter()
    const [activityList, setActivityList] = useAtom(Activity_detail)
    const { t } = useTranslation('common')

    useEffect(() => {
        if (router.isReady) {
            setActivityList(JSON.parse(activity_details))
        }
    }, [router.isReady, activity_details, setActivityList])

    return (
        <div className="mx-auto relative bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Heads/>
            <Header/>
            <div className=" lg:px-10 xl:px-20 relative px-5 pt-24    mx-auto ">
                <div className=" py-10     xl:flex justify-between " >
                    <div className=" xl:w-4/12 2xl:w-1/2 ">
                        <div className="text-2xl md:text-4xl xl:text-6xl ">
                            <div>
                                {activityList.name}
                            </div>

                        </div>
                        <div className="mt-10 text-base  2xl:text-2xl font-light">
                            <div>
                                {activityList.des}
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-9/12  xl:ml-4 mt-10 xl:mt-0 ">
                        <div className="" >
                            <div className="md:flex  w-full   py-8 md:bg-white rounded-2xl">
                                <div className="md:mx-8 md:w-7/12 relative">
                                    <Image 
                                        className="rounded-t-2xl md:rounded-xl"
                                        src={activityList.activityList[0].poster_1}
                                        alt=""
                                        layout="responsive"
                                        width={700}
                                        height={475}
                                        objectFit="cover"
                                    />
                                </div>
                                <div className=" bg-white p-5 xl:p-0  rounded-b-2xl ">
                                    <div className="pt-4 md:pt-0 flex ">
                                        <div className="rounded-full bg-gray-200 text-gray-700 px-2.5 py-0.5 text-sm">
                                            {activityList.activityList[0].activity}
                                        </div>
                                    </div>
                                    <div className="text-2xl  mt-5">
                                        {activityList.activityList[0].time}
                                    </div>
                                    <div className="font-light font-semibold">
                                        {activityList.activityList[0].date}
                                    </div>

                                        <div className='pr-1 font-semibold  text-xl xl:text-2xl line-clamp-3 xl:line-clamp-5 h-20 xl:h-32 mt-6'>
                                            {activityList.activityList[0].name}
                                        </div>

                                    <div className="flex  pt-6  xl:pt-20">
                                        <div className="flex justify-between  items-center">
                                            <div className="">
                                                {activityList.activityList[0].subLink && (
                                                    <Link
                                                        href={activityList.activityList[0].subLink}
                                                        target="_blank"
                                                        legacyBehavior
                                                    >
                                                        <a className={classNames(activityList.activityList[0].status =="In progress"|| activityList.activityList[0].status =="Not started"?"bg-black text-white rounded-full  px-8 py-2.5":"hidden")}>
                                                            {t("订阅")}
                                                        </a>
                                                    </Link>
                                                )}
                                            </div>
                                            <div className="">
                                                {activityList.activityList[0].videoLink && (
                                                    <Link
                                                        href={activityList.activityList[0].videoLink}
                                                        target="_blank"
                                                        legacyBehavior
                                                    >
                                                        <a className={activityList.activityList[0].status !=="Done"?"hidden":" text-black border border-black rounded-full  px-4 py-2.5"}>
                                                            {t("了解更多")}
                                                        </a>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div>
                    <div className="text-indigo-700 text-2xl">
                        {t("往��回顾")}
                    </div>
                    <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {activityList.activityList.map((item, index: number) => (
                            <div key={item.activity} className={index === 0 ? "hidden" : "rounded-2xl"}>
                                <div className="relative w-full md:h-64 xl:h-72 2xl:h-80">
                                    <Image 
                                        className="rounded-t-2xl"
                                        src={item.poster_1}
                                        alt=""
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="px-10 py-8 bg-white rounded-b-2xl">
                                    <div className="flex flex-wrap">
                                        <div  className="bg-gray-200 rounded-full text-center text-gray-700 px-3 py-1 mr-2 mb-4 text-sm" >
                                            {item.activity}
                                        </div>
                                    </div>
                                    <div className=" text-2xl line-clamp-2 h-16">
                                        {item.name}
                                    </div>
                                    <div className="flex mt-5 items-center ">
                                        <div className="mt-4">
                                            {item.subLink && (
                                                <Link
                                                    href={item.subLink}
                                                    legacyBehavior
                                                >
                                                    <a className={item.status == "In progress"||item.status == "Not started"?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-10 py-2.5 mr-5 ":"hidden"}>
                                                        {t("订阅")}
                                                    </a>
                                                </Link>
                                            )}
                                        </div>
                                        {item.videoLink && (
                                            <Link
                                                href={item.videoLink}
                                                target="_blank"
                                                legacyBehavior
                                            >
                                                <a className={item.status !== "Done"?"hidden":" text-black border border-black rounded-full  px-8 py-2.5"}>
                                                    {t("了解更多")}
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Tail/>
       </div>
    );
}

export default Meeting

export const getStaticPaths = async ({locales = [], defaultLocale}) => {
    let data = {
        locale: defaultLocale
    }
    const paths = []
    const activity_ret = await fetch(`${https}/v1/Activity/GetActivityAllDetails?value=no-cache`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const activity_result = await activity_ret.json()
    let activity_details = await JSON.parse(activity_result.res.project_details)
    console.log(activity_details);


    for (let i= 0 ;i<activity_details.length;i++){
        for (const locale of locales) {
            paths.push({ params:{id:(activity_details[i].id).toString()},locale})
        }
    }
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params:{id} ,locale}){
    let data = {
        // databaseId: CourseDatabaseId,
        locale,
        id
    }
    const activity_ret = await fetch(`${https}/v1/Activity/GetActivityDetails?value=no-cache`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    const activity_result = await activity_ret.json()
    let  activity_details = await activity_result.res.project_details
    return {
        props: {
            activity_details,
            ...(await serverSideTranslations(locale, ['common', 'footer','header'])),
        }
    };

}
