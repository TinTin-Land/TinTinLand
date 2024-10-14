import Header from "../../components/header";
import Tail from "../../components/tail";
import React, {useEffect} from "react";
import Link from "next/link";
import Heads from "../../components/head";
import {useAtom} from "jotai";
import {
    Course_data,
} from "../../jotai";
import Loading from "../../components/loading";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {https} from "../../constants";
import Image from 'next/image';

const Course = ({ course_details }) =>{
    const { t } = useTranslation('common')
    const [courseInfo,setCourseInfo] = useAtom(Course_data)


    useEffect(()=>{
        setCourseInfo(JSON.parse(course_details));
    },[course_details, setCourseInfo])

    return (
        <div className="mx-auto relative bg-fixed overflow-hidden"
             style={{backgroundImage:"url('/tintin-bg.png')"}}>
            <Heads/>
            <Header/>
            <div className="lg:px-10 xl:px-20 relative px-5 pt-24 mx-auto">
                <div className="p-10 rounded-xl bg-left md:bg-cover overflow-hidden" style={{backgroundImage:"url('/课程_bg.png')"}}>
                    <div className="text-[#5448AE] text-xl mb-5">
                        {t("TinTin课程")}
                    </div>
                    <div className="text-4xl mb-5">
                    <div className="mb-2">
                        {t("学习最前沿的 Web3 技术")}
                    </div>
                    <div>
                        {t("创造未来开放网络")}
                    </div>
                    </div>
                    <div className="text-xl ">
                        {t("生态官方合作课程，项目 CTO &核心开发者亲自授课")}
                        <br/> {t("配套高质量社群，全球一线开发者助教全程陪伴，社区同学交流讨论")}
                    </div>
                    <button className="bg-black text-white px-4 py-2 rounded-full mt-5">
                        TinTin EDU
                    </button>
                </div>
                <div>
                    <div className="text-indigo-700 text-xl mt-10">
                        {t("火热报名中")} 🔥
                    </div>
                    <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {courseInfo.map(item=>(
                            <CourseCard key={item.id} item={item} t={t} />
                        ))}
                    </div>
                    <div className="text-indigo-700 text-xl mt-10">
                        {t("往期回顾")}
                    </div>
                    <div className="mt-5 mb-20 grid  md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {courseInfo.map(item=>(
                            <CourseCard key={item.id} item={item} t={t} />
                        ))}
                    </div>


                </div>
            </div>
            <Loading/>
            <Tail/>
        </div>
    )
}

const CourseCard = ({ item, t }) => {
    const isActive = item.state === "In progress" || item.state === "About to start";
    
    if (!isActive) return null;

    const buttonConfig = {
        "In progress": {
            text: t("立刻报名"),
            isLink: true,
            href: item.link,
        },
        "About to start": {
            text: t("即将开始"),
            isLink: false,
        },
    };

    const activeButton = buttonConfig[item.state];

    return (
        <div className="rounded-2xl">
            <div className="relative w-full h-48">
                <Image
                    className="rounded-t-2xl"
                    src={item.img}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="px-10 py-8 bg-white rounded-b-2xl">
                <div className="flex flex-wrap h-20 overflow-hidden">
                    {item.type.map(list => (
                        <div key={list.content} className="bg-gray-200 rounded-full text-center text-gray-700 h-7 px-3 py-1 mr-2 mb-4 text-sm">
                            {list.content}
                        </div>
                    ))}
                </div>
                <div className="line-clamp-2 h-12 mt-2">
                    {item.name}
                </div>
                <div className="flex mt-5">
                    {activeButton && (
                        activeButton.isLink ? (
                            (<Link
                            href={activeButton.href}
                            target="_blank"
                            className="text-xs 2xl:text-xl bg-black text-white rounded-full px-8 py-2.5 mr-5"
                            legacyBehavior>

                                {activeButton.text}

                            </Link>)
                        ) : (
                            <button className="text-xs 2xl:text-xl bg-black text-white rounded-full px-8 py-2.5 mr-5">
                                {activeButton.text}
                            </button>
                        )
                    )}
                    <Link
                        href={`/course_details/${item.id}`}
                        className="text-xs 2xl:text-xl text-black border border-black rounded-full px-8 py-2.5"
                        legacyBehavior>

                        {t("了解更多")}

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Course


export async function getStaticProps({locale}){
    let data ={ locale }
    const course_ret = await fetch(`${https}/v1/Course/GetCourseAllDetails?value=no-cache`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    })
    const course_result = await course_ret.json()
    let course_details = await course_result.res.project_details
    return {
        props: {
            course_details,
            ...(await serverSideTranslations(locale, ['common', 'footer','header'])),
        }
    };

}
