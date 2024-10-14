import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from 'next/image';

import Header from "../../components/header";
import Tail from "../../components/tail";
import Heads from "../../components/head";
import { Activity_Alldetail } from "../../jotai";
import { https } from "../../constants";

const Meeting = ({ activity_details }) => {
  const { t } = useTranslation('common');
  const [activityList, setActivityList] = useAtom(Activity_Alldetail);

  useEffect(() => {
    try {
      // 检查 activity_details 是否为有效的 JSON 字符串
      if (typeof activity_details === 'string') {
        const parsedDetails = JSON.parse(activity_details);
        setActivityList(parsedDetails);
        console.log("Parsed activity details:", parsedDetails);
      } else {
        // 如果 activity_details 已经是对象，直接使用
        setActivityList(activity_details);
        console.log("Activity details:", activity_details);
      }
    } catch (error) {
      console.error("Error parsing activity details:", error);
      setActivityList([]);
    }
  }, [activity_details, setActivityList]);

  return (
    <div className="mx-auto relative bg-fixed overflow-hidden"
         style={{backgroundImage: "url('/tintin-bg.png')"}}>
      <Heads />
      <Header />
      <div className="lg:px-10 xl:px-20 relative px-5 pt-24 mx-auto">
        <div className="p-10 rounded-xl bg-left md:bg-cover overflow-hidden" style={{backgroundImage: "url('/活动_bg.png')"}}>
          <div className="">
            <div className="text-[#5448AE] text-xl mb-5">
              {t("TinTin活动")}
            </div>
            <div className="text-4xl mb-5">
              <div className="mb-2">
                {t("与顶尖项目面对面讨论")}
              </div>
              <div>
                {t("获得热点趋势与开发实战经验")}
              </div>
            </div>
            <div className="text-xl ">
              {t("最新的多链技术分享，众多赛道实时资讯")}
              <br/>
              {t("生态项目代码实操演练，与 Web3 领军人物现场讨论")}
            </div>
          </div>
        </div>
        <div>
          {Array.isArray(activityList) && activityList.length > 0 ? (
            activityList.map((items) => (
              <div key={items.id} className={items.id ? "mt-10" : "hidden"}>
                <div className="text-indigo-700 text-xl flex justify-between">
                  {items.name}
                  <Link href={`/meetingList/${items.id}`} legacyBehavior>
                    <div className="flex bg-white text-black rounded-full cursor-pointer text-sm items-center px-4 py-1.5">
                      <div className="mr-1" >
                        {t("查看更多")}
                      </div>
                      <div>
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="md:w-2/3 text-sm mt-2">
                  {items.des}
                </div>
                <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {items.activityList.slice(0, 3).map((item) => (
                    <ActivityCard key={item.activity} item={item} t={t} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-xl text-center mt-10">{t("No activities available")}</p>
          )}
        </div>
      </div>
      <Tail />
    </div>
  );
};

const ActivityCard = ({ item, t }) => (
  <div className="rounded-2xl">
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
        <div className="bg-gray-200 rounded-full text-center text-gray-700 px-3 py-1 mr-2 mb-4 text-sm">
          {item.activity}
        </div>
      </div>
      <div className="text-2xl line-clamp-2 h-16">
        {item.name}
      </div>
      <div className="flex mt-5 items-center">
        <div className="mt-4">
          {item.subLink && (item.status === "In progress" || item.status === "Not started") && (
            <Link
              href={item.subLink}
              legacyBehavior>
          <a   className="text-xs 2xl:text-xl bg-black text-white rounded-full px-10 py-2.5">
                                                    {t("订阅")}
                                                </a>
            </Link>
          )}
        </div>
        {item.videoLink && item.status === "Done" && (
          <Link
            href={item.videoLink}
            target="_blank"
            legacyBehavior>
     <a  className="text-black border border-black rounded-full px-8 py-2.5" target="_blank">
                                                {t("了解更多")}
                                            </a>
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default Meeting;

export async function getStaticProps({ locale }) {
  try {
    const response = await fetch(`${https}/v1/Activity/GetActivityAllDetails?value=no-cache`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("API response:", result); // 保留此行用于调试

    // 直接传递 project_details，不进行 JSON 字符串化
    const activity_details = result.res.project_details;

    return {
      props: {
        activity_details,
        ...(await serverSideTranslations(locale, ['common', 'footer', 'header'])),
      },
    };
  } catch (error) {
    console.error("Failed to fetch activity details:", error);
    return {
      props: {
        activity_details: [],
        ...(await serverSideTranslations(locale, ['common', 'footer', 'header'])),
      },
    };
  }
}
