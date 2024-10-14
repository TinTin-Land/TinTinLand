import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAtom } from "jotai";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "../../components/header";
import Heads from "../../components/head";
import { Course_data, SignUpCourseBoxState, SignUpCourseBoxData, Activity_Alldetail, Hackathons_detail } from "../../jotai";
import HackathonsState from "../../components/state";
import Loading from "../../components/loading";
import Tail from "../../components/tail";
import { Keyboard, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Utility functions
const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

const parseJsonSafely = (jsonString: string | undefined, defaultValue: any[] = []) => {
  if (!jsonString) {
    console.warn("JSON string is empty or undefined");
    return defaultValue;
  }
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse JSON:", error, "Raw data:", jsonString);
    return defaultValue;
  }
};

// Components
const Course = ({ data }: { data: any[] }) => {
  const { t } = useTranslation('common');
  const course_info = data; // Directly use the data passed as prop

  return (
    <div id="Educate" className="pt-20">
      <div className="text-indigo-700 text-2xl">
        {t("TinTin课程")}
      </div>
      
      <div className="text-2xl md:text-4xl my-5">
        <div>
          {t("学习最前沿的 Web3 技术")}
          <br/>
          {t("创造未来开放网络")}
        </div>
      </div>

      <div className="mb-5 text-sm md:text-base">
        <div>
          {t("生态官方合作课程，项目 CTO &核心开发者亲自授课")}
        </div>
        <div>
          {t("配套高质量社群，全球一线开发者助教全程陪伴，社区同学交流讨论")}
        </div>

        <div className="flex justify-end md:-mt-10">
          <Link href="/course">
            <div className="flex bg-white text-black rounded-full cursor-pointer text-sm items-center px-4 py-1.5">
              <div className="mr-1">
                {t("查看更多")}
              </div>
              <div>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop view */}
      <div className="w-full relative hidden overflow-hidden xl:flex">
        <div className="w-full h-full relative transition-all duration-700" id="carousel">
          <Swiper
            rewind={true}
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={false}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            scrollbar={false}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Keyboard, Scrollbar, Navigation, Pagination]}
            className="swiper-container gap-4"
          >
            {course_info.map(item => (
              <SwiperSlide key={item.id} className={item.homeDisplay === "False" ? "hidden" : ""}>
                <CourseCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperStyles />
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full xl:hidden">
        <div className="w-full flex relative overflow-x-auto snap-x snap-mandatory">
          <div className="flex">
            {course_info.map(item => (
              <div key={item.id} className={item.homeDisplay === "False" ? "hidden" : "rounded-2xl snap-always snap-center md:snap-start w-90 mx-5"}>
                <CourseCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ item }) => (
  <div className="rounded-2xl mr-4">
    <img className="rounded-t-2xl w-full" src={item.img} alt=""/>
    <div className="px-10 py-8 bg-white rounded-b-2xl">
      <div className="flex h-20 overflow-hidden flex-wrap">
        {item.type.map(list => (
          <div key={list.content} className="bg-gray-200 rounded-full text-center text-gray-700 h-7 px-3 py-1 mr-2 mb-4 text-sm">
            {list.content}
          </div>
        ))}
      </div>
      <div className="line-clamp-2 text-xl h-14 mt-2">
        {item.name}
      </div>
      <div className="flex mt-5">
        <CourseButton item={item} />
      </div>
    </div>
  </div>
);

const CourseButton = ({ item }) => {
  const { t } = useTranslation('common');
  
  if (item.state === "In progress") {
    return (
      <Link href={item.link}>
        <a target="_blank" className="text-xs 2xl:text-xl bg-black text-white rounded-full px-4 2xl:px-8 py-2.5 mr-5">
          {t("立刻报名")}
        </a>
      </Link>
    );
  }
  
  if (item.state === "About to start") {
    return (
      <Link href={item.link}>
        <a target="_blank" className="text-xs 2xl:text-xl bg-black text-white rounded-full px-4 2xl:px-8 py-2.5 mr-5">
          {t("即将开始")}
        </a>
      </Link>
    );
  }
  
  return (
    <Link href={`/course_details/${item.id}`}>
      <a className="text-xs 2xl:text-xl text-black border border-black rounded-full px-8 py-2.5">
        {t("了解更多")}
      </a>
    </Link>
  );
};

const SwiperStyles = () => (
  <style jsx global>{`
    .swiper-button-next,
    .swiper-button-prev {
      border-radius: 9999px;
      background-color: white;
      background-color: rgba(255, 255, 255, 0.5);
      padding: 1.5rem;
      color: #000 !important;
    }  
    .swiper-button-prev:after, .swiper-button-next:after {
      font-size: 1.5rem !important;
    }
    .swiper-pagination-bullet-active {
      background: black;
    }
  `}</style>
);

const Hackathons = ({ data }) => {
  const { t } = useTranslation('common')
  const [hackathonsData, setHackathonsData] = useState([])
  
  useEffect(() => {
    if (data && Array.isArray(data)) {
      console.log("Hackathons data:", data);
      setHackathonsData(data);
    } else {
      console.warn("Hackathons data is not an array:", data);
      setHackathonsData([]);
    }
  }, [data])

  if (hackathonsData.length === 0) {
    return null; // or return a loading state or placeholder
  }

  return (
    <div id="Hackathons" className="pt-20 ">
      <div className="text-indigo-700 text-2xl">
        Hackathons
      </div>
      <div className="text-2xl md:text-4xl my-5">
        <div>
          {t("建立与全球开发者的联系")}
        </div>
        <div>
          {t("一起组队玩转黑客松")}
        </div>
      </div>
      <div className="mb-5 text-sm md:text-base">
        <div>
          {t("用区块链技术创建 Web3 世界")}
        </div>
        <div>
          {t("协助开发者创建团队，提供技术指导，引入投资")}
        </div>
      </div>
      <div className="flex justify-end md:-mt-10">
        <Link href="/hackathons" legacyBehavior>
          <div className="flex  bg-white text-black rounded-full cursor-pointer text-sm items-center  px-4 py-1.5">
            <div className="mr-1" >
              {t("查看更多")}
            </div>
            <div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
          </div>
        </Link>
      </div>
      <div className={hackathonsData.length > 0 ? "xl:flex mt-4 justify-between" : "hidden"}>
        {/* Large hackathon card */}
        <div className="relative xl:w-full" >
          <div className={classNames(HackathonsState[hackathonsData[0]?.state] || "", "flex justify-end right-4 mt-5 rounded-full px-3 py-1 border absolute")}>
            {hackathonsData[0]?.state || ""}
          </div>
          <img className="rounded-t-2xl w-full xl:h-96 2xl:h-99" src={hackathonsData[0]?.img || ""} alt=""/>
          <div className="px-10 py-8 bg-white rounded-b-2xl">
            <div className="2xl:text-xl font-semibold xl:w-72 truncate">
              {hackathonsData[0]?.name || ""}
            </div>
            <div className="font-light">
              {hackathonsData[0]?.time || ""}
            </div>
            <div className="flex mt-5 2xl:mt-10 items-center">
              <Link
                href={hackathonsData[0]?.registrationLink || "#"}
                className={classNames(hackathonsData[0]?.state === "ComingSoon" || hackathonsData[0]?.state === "OnGoing" ? "" : "hidden", "text-xs 2xl:text-xl bg-black text-white rounded-full px-8 py-2.5 mr-5")}
                target="_blank">
                {t("立刻报名")}
              </Link>
              <Link
                href={hackathonsData[0]?.activityLink || "#"}
                className="text-xs 2xl:text-xl text-black border border-black rounded-full px-8 py-2.5"
                target="_blank">
                {t("了解更多")}
              </Link>
            </div>
          </div>
        </div>

        {/* Medium hackathon card */}
        <div className="mt-5 xl:mt-0 xl:w-full  xl:ml-5     ">
          <div className="">
            <div className="relative ">
              <div className={classNames(HackathonsState[hackathonsData[1]?.state] || "", "flex justify-end right-4 mt-5 rounded-full px-3 py-1 border  absolute")}>
                {hackathonsData[1]?.state || ""}
              </div>
              <img className="rounded-t-2xl  w-full xl:h-56  2xl:h-80" src={hackathonsData[1]?.img || ""} alt=""/>
              <div className="px-10 py-3  bg-white rounded-b-2xl">
                <div className="2xl:text-xl font-semibold  truncate">
                  {hackathonsData[1]?.name || ""}
                </div>
                <div className="font-light">
                  {hackathonsData[1]?.time || ""}
                </div>
                <div className="flex my-5  items-center">
                  <Link
                    href={hackathonsData[1]?.registrationLink || "#"}
                    className={classNames(hackathonsData[1]?.state === "ComingSoon" || hackathonsData[1]?.state === "OnGoing" ? "" : "hidden", "text-xs 2xl:text-xl bg-black text-white rounded-full px-8 py-2.5 mr-5")}
                    target="_blank">
                    {t("刻报名")}
                  </Link>
                  <Link
                    href={hackathonsData[1]?.activityLink || "#"}
                    className="text-xs 2xl:text-xl text-black border border-black rounded-full  px-8 py-2.5"
                    target="_blank">
                    {t("了解更多")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Small hackathon card */}
          <div className="mt-5  rounded-2xl overflow-hidden">
            <div className="relative w-full ">
              <div className={classNames(HackathonsState[hackathonsData[2]?.state] || "", "flex justify-end right-4 mt-5 rounded-full px-3 py-1  border absolute")}>
                {hackathonsData[2]?.state || ""}
              </div>
              <div className="xl:flex  xl:items-center xl:justify-between bg-white rounded-2xl">

                <img className="xl:hidden rounded-t-2xl xl:rounded-t-none xl:rounded-r-2xl  w-full " src={hackathonsData[2]?.img || ""} alt=""/>
                <div className="pl-10 py-3 xl:py-0    ">
                  <div className="2xl:text-xl font-semibold xl:w-48 2xl:w-56  truncate">
                    {hackathonsData[2]?.name || ""}
                  </div>
                  <div className="font-light">
                    {hackathonsData[2]?.time || ""}
                  </div>
                  <div className="flex mt-5 ">
                    <Link
                      href={hackathonsData[2]?.registrationLink || "#"}
                      className={classNames(hackathonsData[2]?.state === "ComingSoon" || hackathonsData[2]?.state === "OnGoing" ? "" : "hidden", "text-xs 2xl:text-xl bg-black text-white rounded-full px-8 py-2.5 mr-5")}
                      target="_blank">
                      {t("立刻报名")}
                    </Link>
                    <Link
                      href={hackathonsData[2]?.activityLink || "#"}
                      className="text-xs 2xl:text-xl text-black border border-black rounded-full  px-8 py-2.5"
                      target="_blank">
                      {t("了解更多")}
                    </Link>
                  </div>
                </div>
                <img className="rounded-t-2xl hidden xl:flex xl:rounded-t-none xl:rounded-r-2xl  xl:w-5/12 xl:h-40 2xl:h-44" src={hackathonsData[2]?.img || ""} alt=""/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Activity = ({ data }: { data: string }) => {
  const { t } = useTranslation('common');
  const [activityList, setActivityList] = useAtom(Activity_Alldetail);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const parsedData = parseJsonSafely(data);
      console.log("Parsed activity data:", parsedData);
      setActivityList(parsedData);
      setIsLoading(false);
    } catch (err) {
      console.error("Error parsing activity data:", err);
      setError("Failed to load activity data");
      setIsLoading(false);
    }
  }, [data, setActivityList]);

  if (isLoading) {
    return <div>Loading activities...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!activityList || activityList.length === 0) {
    return <div>No activities available</div>;
  }

  return (
    <div id="Activities" className="pt-20">
      <div className="text-indigo-700 text-2xl">
        {t("TinTin活动")}
      </div>
      <div className="text-2xl md:text-4xl my-5">
        <div>
          {t("顶尖项目面对面讨论")}
        </div>
        <div>
          {t("获得热点趋势与开发实战经验")}
        </div>
      </div>
      <div className="mb-5 text-sm md:text-base">
        <div>
          {t("最新的多链技术分享，众多赛道实时资讯")}
        </div>
        <div>
          {t("生态项目代码实操演练，与 Web3 领军人物现场讨论")}
        </div>
      </div>
      <div className="flex justify-end md:-mt-10">
        <Link href="/meeting" legacyBehavior>
          <div className="flex  bg-white text-black rounded-full cursor-pointer text-sm items-center  px-4 py-1.5">
            <div className="mr-1 " >
              {t("查看更多")}
            </div>
            <div>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
          </div>
        </Link>
      </div>
      <div className=" xl:flex  mt-4" >
        {/* Large activity card */}
        <div className="hidden xl:block relative xl:w-1/2 2xl:w-7/12 " >
          <div className="flex px-10 py-8 bg-white rounded-2xl  ">
            <div className="my-auto  w-full">
              <div className=" flex ">
                <div className="rounded-full bg-gray-100 text-gray-700 px-2.5 py-0.5 text-sm">
                  {activityList[0]?.activityList?.[0]?.activity || t("No activity")}
                </div>
              </div>
              <div className="text-2xl font-light mt-5">
                {activityList[0]?.activityList?.[0]?.time || t("No time specified")}
              </div>
              <div className="font-semibold ">
                {activityList[0]?.activityList?.[0]?.date || t("No date specified")}
              </div>
              <div className=" mt-4 mb-9 xl:my-9   items-center  xl:text-xl font-semibold line-clamp-4 h-20 xl:line-clamp-2  w-full  ">
                {activityList[0]?.activityList?.[0]?.name || t("No name specified")}
              </div>
              <div className="xl:flex 2xl:block w-full">
                <img className="xl:flex 2xl:hidden rounded-xl mt-5   md:mt-0  md:mr-5 w-82 h-98" src={activityList[0]?.activityList?.[0]?.poster_2 || ""} alt=""/>
                <img className="xl:hidden 2xl:flex rounded-2xl w-82 2xl:w-100 h-97 " src={activityList[0]?.activityList?.[0]?.poster_1 || ""} alt=""/>
                <div className="xl:ml-5  2xl:ml-0  flex  xl:mt-9 xl:justify-end  2xl:justify-start xl:items-end items-center">
                  <div className="">
                    <Link
                      href={activityList[0]?.activityList?.[0]?.subLink || ""}
                      className={activityList[0]?.activityList?.[0]?.status == "In progress"||activityList[0]?.activityList?.[0]?.status =="Not started"?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-7  py-2.5 mr-5 ":"hidden"}>

                      {t("订阅")}

                    </Link>
                  </div>
                  <div className=" text-sm">
                    <Link
                      href={`/meetingList/${activityList[0]?.id}`}
                      className="text-xs 2xl:text-xl text-black border border-black rounded-full px-4  py-2.5">

                      {t("了解更多")}

                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block xl:hidden relative  " >
          <div className="flex flex-col-reverse md:flex-row p-8 bg-white rounded-2xl  items-center">
            <div className="">
              <div className="items-end ">
                <img className="md:hidden xl:block rounded-xl mt-5  md:mt-0  md:mr-5 md:w-82 " src={activityList[0]?.activityList?.[0]?.poster_2 || ""} alt=""/>
                <div className="md:hidden flex   mt-9  items-end items-center ">
                  <div className="">
                    <Link
                      href={activityList[0]?.activityList?.[0]?.subLink || ""}
                      className={activityList[0]?.activityList?.[0]?.status == "In progress"||activityList[0]?.activityList?.[0]?.status =="Not started"?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-10 py-2.5 mr-5 ":"hidden"}>

                      {t("订阅")}

                    </Link>
                  </div>
                  <div className="xl:w-52 text-sm">
                    <Link
                      href={`/meetingList/${activityList[0]?.id}`}
                      className={activityList[0]?.activityList?.[0]?.status !== "Done" ? "hidden" : "text-xs 2xl:text-xl text-black border border-black rounded-full px-8 py-2.5"}>

                      {t("了解更多")}

                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full hidden md:block xl:hidden">
              <img className="rounded-xl mt-5 md:mt-0 md:mr-5 h-98" src={activityList[0]?.activityList?.[0]?.poster_1 || ""} alt=""/>
            </div>

            <div className="w-full md:pl-6">
              <div className="flex">
                <div className="rounded-full bg-gray-200 text-gray-700 px-2.5 py-0.5 text-sm">
                  {activityList[0]?.activityList?.[0]?.activity || t("No activity")}
                </div>
              </div>
              <div className="text-2xl font-light mt-5">
                {activityList[0]?.activityList?.[0]?.time || t("No time specified")}
              </div>
              <div className="font-semibold">
                {activityList[0]?.activityList?.[0]?.date || t("No date specified")}
              </div>

              <div className="xl:text-xl font-semibold">
                <div className='mt-4 md:mb-8 items-center line-clamp-4 md:h-24 xl:line-clamp-3 2xl:w-90'>
                  {activityList[0]?.activityList?.[0]?.name || t("No name specified")}
                </div>

              </div>
              <div className="hidden md:flex justify-between items-end">
                <div className="flex items-center">
                  <Link
                    href={activityList[0]?.activityList?.[0]?.subLink || ""}
                    className={activityList[0]?.activityList?.[0]?.status == "In progress" || activityList[0]?.activityList?.[0]?.status == "Not started" ? "text-xs 2xl:text-xl bg-black text-white rounded-full px-8 xl:px-10 py-2.5 mr-5" : "hidden"}>

                    {t("订阅")}

                  </Link>
                  <Link
                    href={`/meetingList/${activityList[0]?.id}`}
                    className={activityList[0]?.activityList?.[0]?.status !== "Done" ? "hidden" : "text-xs 2xl:text-xl text-black border border-black rounded-full px-8 xl:px-10 py-2.5"}>

                    {t("了解更多")}

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-auto mt-6 xl:mt-0 xl:w-1/2 xl:ml-4 2xl:ml-9 grid grid-cols-1  ">
          {/* Medium activity card */}
          <div className="relative  " >
            <div className="flex flex-col-reverse md:flex-row p-8 bg-white rounded-2xl mx-auto items-center">
              <div className="">
                <div className="    items-end ">
                  <img className=" md:hidden xl:block rounded-xl mt-5  md:mt-0  md:mr-5 md:w-82" src={activityList[1]?.activityList?.[0]?.poster_2 || ""} alt=""/>
                  <div className="md:hidden flex mt-9  items-end items-center ">
                    <div className="">
                      <Link
                        href={activityList[1]?.activityList?.[0]?.subLink || ""}
                        className={activityList[1]?.activityList?.[0]?.status == "In progress"||activityList[1]?.activityList?.[0]?.status =="Not started"?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-10 py-2.5 mr-5 ":"hidden"}>

                        {t("订阅")}

                      </Link>
                    </div>
                    <div className="xl:w-52 text-sm">
                      <Link
                        href={`/meetingList/${activityList[1]?.id}`}
                        className={activityList[1]?.activityList?.[0]?.status !== "Done"?"hidden":"text-xs 2xl:text-xl text-black border border-black rounded-full  px-8 py-2.5"}>

                        {t("了解更多")}

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full hidden  md:block xl:hidden">
                <img className=" rounded-xl mt-5  md:mt-0  md:mr-5  " src={activityList[1]?.activityList?.[0]?.poster_1 || ""} alt=""/>
              </div>

              <div className=" w-full md:pl-6">
                <div className=" flex ">
                  <div className="rounded-full bg-gray-200 text-gray-700 px-2.5 py-0.5 text-sm">
                    {activityList[1]?.activityList?.[0]?.activity || t("No activity")}
                  </div>
                </div>
                <div className="text-2xl font-light mt-5">
                  {activityList[1]?.activityList?.[0]?.time || t("No time specified")}
                </div>
                <div className="font-semibold">
                  {activityList[1]?.activityList?.[0]?.date || t("No date specified")}
                </div>

                <div className=" xl:text-xl font-semibold">
                  <div className=' mt-4 md:mb-8 xl:my-10 items-center line-clamp-4 md:h-24 xl:line-clamp-3   2xl:w-90'>
                    {activityList[1]?.activityList?.[0]?.name || t("No name specified")}
                  </div>

                </div>
                <div className="hidden md:flex justify-between items-end  ">
                  <div className="flex   items-center">
                    <div className="  ">
                      <Link
                        href={activityList[1]?.activityList?.[0]?.subLink || ""}
                        className={activityList[1]?.activityList?.[0]?.status == "In progress"||activityList[1]?.activityList?.[0]?.status =="Not started"?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-7   py-2.5 mr-5 ":"hidden"}>

                        {t("订阅")}

                      </Link>
                    </div>
                    <div className="  ">
                      <Link
                        href={`/meetingList/${activityList[1]?.id}`}
                        className={activityList[1]?.activityList?.[0]?.status !== "Done"?"hidden":"text-xs 2xl:text-xl text-black border border-black rounded-full  px-4  py-2.5"}>

                        {t("了解更多")}

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* Small activity card */}
          <div className="relative mt-5 2xl:mt-10  " >
            <div className="flex flex-col-reverse md:flex-row 2xl:mt-0.5 p-8 bg-white rounded-2xl  items-center">
              <div className="">
                <img className="md:hidden xl:block rounded-xl mt-5  md:mt-0  md:mr-5 md:w-82 " src={activityList[2]?.activityList?.[0]?.poster_2 || ""} alt=""/>
                <div className="md:hidden flex   mt-9  items-end items-center ">
                  <div className="">
                    <Link
                      href={activityList[2]?.activityList?.[0]?.subLink || ""}
                      className={activityList[2]?.activityList?.[0]?.status == "In progress"||activityList[2]?.activityList?.[0]?.status =="Not started"?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-10 py-2.5 mr-5 ":"hidden"}>

                      {t("订阅")}

                    </Link>
                  </div>
                  <div className="xl:w-52 text-sm">
                    <Link
                      href={`/meetingList/${activityList[2]?.id}`}
                      className={activityList[2]?.activityList?.[0]?.status !== "Done"?"hidden":"text-xs 2xl:text-xl text-black border border-black rounded-full  px-8 py-2.5"}>

                      {t("了解更多")}

                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full hidden  md:block xl:hidden">
                <img className=" rounded-xl mt-5  md:mt-0  md:mr-5  " src={activityList[2]?.activityList?.[0]?.poster_1 || ""} alt=""/>
              </div>
              <div className="w-full md:pl-6">
                <div className=" flex ">
                  <div className="rounded-full bg-gray-200 text-gray-700 px-2.5 py-0.5 text-sm">
                    {activityList[2]?.activityList?.[0]?.activity || t("No activity")}
                  </div>
                </div>
                <div className="text-2xl font-light mt-5">
                  {activityList[2]?.activityList?.[0]?.time || t("No time specified")}
                </div>
                <div className="font-semibold">
                  {activityList[2]?.activityList?.[0]?.date || t("No date specified")}
                </div>

                <div className=" xl:text-xl font-semibold">
                  <div className=' mt-4 md:mb-8 xl:my-10 items-center line-clamp-4 md:h-24 xl:line-clamp-3   2xl:w-90'>
                    {activityList[2]?.activityList?.[0]?.name || t("No name specified")}
                  </div>

                </div>
                <div className="hidden md:flex justify-between items-end ">
                  <div className="flex   items-center">
                    <div className="  ">
                      <Link
                        href={activityList[2]?.activityList?.[0]?.subLink || ""}
                        className={activityList[2]?.activityList?.[0]?.status == "In progress"||activityList[2]?.activityList?.[0]?.status =="Not started"?"text-xs 2xl:text-xl bg-black text-white rounded-full  px-7   py-2.5 mr-5 ":"hidden"}>

                        {t("订阅")}

                      </Link>
                    </div>
                    <div className="">
                      <Link
                        href={`/meetingList/${activityList[2]?.id}`}
                        className={activityList[2]?.activityList?.[0]?.status !== "Done"?"hidden":"text-xs 2xl:text-xl text-black border border-black rounded-full  px-4  py-2.5"}>

                        {t("了解更多")}

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = ()=>{
    const { t } = useTranslation('common')
    return(
        <div id="About" className="pt-20">
            <div className="xl:flex justify-between items-center">

                <div className='xl:w-1/2  xl:mr-9'>
                    <div className="text-indigo-700 text-2xl ">
                        {t("关于我们")}
                    </div>
                    <div className="text-2xl xl:text-4xl 2xl:text-5xl my-5">
                        {t("赋能下一代开发者的技术社区")}
                    </div>
                    <div className="2xl:mt-14 text-base 2xl:text-xl">
                        <div>
                            {t("TinTinLand 是赋下一代开发的技术社区，能够通过聚集、培育、输送 开发者到各放网络，共同定义并构建未来")}
                        </div>
                        <div className="mt-5">
                            {t("我们也将和行业有商业洞察力、有经验的��发者、社区、媒体合作，提供 技术课程、技术内容解读、AMA、线下开发者活动等")}
                        </div>
                    </div>
                    <p className="mt-4 flex">
                        {t('联系我们')}:
                        <a href="mailto:tintinland2022@gmail.com" className="cursor-pointer ml-1 text-blue-600">
                            tintinland2022@gmail.com
                    </a>
                    </p>

                </div>

                <div className="mt-5 xl:w-1/2">
                    <img className="rounded-xl w-full" src="/about us.png" alt=""/>
                </div>

            </div>

        </div>
    )
}

const Media = ({ data }) => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    setMedia(parseJsonSafely(data, []));
  }, [data]);

  useEffect(() => {
    if (media.length > 0) {
      const onload = () => {
        const oDiv = document.getElementById('div1');
        const oUl = document.getElementsByTagName('ul')[0];
        const Li = oUl.getElementsByTagName('li');

        oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
        oUl.style.width = (Li[0].offsetWidth * Li.length) / 16 + 'rem';

        const speed = 2;
        // @ts-ignore
        function move() {
          if (oUl.offsetLeft < -oUl.offsetWidth / speed) {
            oUl.style.left = '0';
          }
          if (oUl.offsetLeft > 0) {
            oUl.style.left = (-oUl.offsetWidth / speed) / 16 + 'rem';
          }
          oUl.style.left = (oUl.offsetLeft - 2) / 16 + 0.05 + 'rem'; //进行左横向滚动
        }

        let timer = setInterval(move, 60);

        oDiv.onmouseover = function () {
          clearInterval(timer);
        };
        oDiv.onmouseout = function () {
          timer = setInterval(move, 60);
        };
      };
      onload();
    }
  }, [media]);

  return (
    <div className="mt-20 mx-4 relative" id="div1">
      <div className="flex relative overflow-hidden w-full h-20">
        <ul className="flex mb-2 absolute">
          {media.concat(media).map((item, index) => (
            <Link key={`${item.img}-${index}`} href={item.href} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <li className="w-36 xl:w-44 bg-white rounded-xl mr-4">
                  <img className="filter grayscale hover:grayscale-0 transition duration-300" src={item.img} alt="" />
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Community = ({ data }) => {
  const [community, setCommunity] = useState([]);

  useEffect(() => {
    setCommunity(parseJsonSafely(data, []));
  }, [data]);

  useEffect(() => {
    if (community.length > 0) {
      const onload = () => {
        const oDiv = document.getElementById('div2');
        const oUl = document.getElementsByTagName('h3')[0];
        const Li = oUl.getElementsByTagName('li');

        oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
        oUl.style.width = (Li[0].offsetWidth * Li.length) / 16 + 'rem';

        const speed = 2;
        // @ts-ignore
        function move() {
          if (oUl.offsetLeft < -oUl.offsetWidth / speed) {
            oUl.style.left = '0';
          }
          if (oUl.offsetLeft > 0) {
            oUl.style.left = (-oUl.offsetWidth / speed) / 16 + 'rem';
          }
          oUl.style.left = (oUl.offsetLeft - 2) / 16 + 0.05 + 'rem'; //进行左横向滚动
        }

        let timer = setInterval(move, 60);

        oDiv.onmouseover = function () {
          clearInterval(timer);
        };
        oDiv.onmouseout = function () {
          timer = setInterval(move, 60);
        };
      };
      onload();
    }
  }, [community]);

  return (
    <div className="mt-10 mx-4 relative" id="div2">
      <div className="flex relative overflow-hidden w-full h-16">
        <h3 className="flex mb-2 absolute">
          {community.concat(community).map((item, index) => (
            <Link key={`${item.img}-${index}`} href={item.href} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <li className="w-36 xl:w-44 bg-white rounded-xl mr-4 list-none">
                  <img className="filter grayscale hover:grayscale-0 transition duration-300" src={item.img} alt="" />
                </li>
              </a>
            </Link>
          ))}
        </h3>
      </div>
    </div>
  );
};

const CommunityMember = ({ data }) => {
  const { t } = useTranslation('common');
  const [communityMember, setCommunityMember] = useState([]);

  useEffect(() => {
    setCommunityMember(parseJsonSafely(data, []));
  }, [data]);

  useEffect(() => {
    if (communityMember.length > 0) {
      const onload = () => {
        const oDiv = document.getElementById('div3');
        const oUl = document.getElementsByTagName('h4')[0];
        const Li = oUl.getElementsByTagName('li');

        oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
        oUl.style.width = (Li[0].offsetWidth * Li.length) / 15 + 'rem';

        const speed = 2;
        // @ts-ignore
        function move() {
          if (oUl.offsetLeft < -oUl.offsetWidth / speed) {
            oUl.style.left = '0';
          }
          if (oUl.offsetLeft > 0) {
            oUl.style.left = (-oUl.offsetWidth / speed) / 16 + 'rem';
          }
          oUl.style.left = (oUl.offsetLeft - 2) / 16 + 0.05 + 'rem'; //进行左横向滚动
        }

        let timer = setInterval(move, 60);

        oDiv.onmouseover = function () {
          clearInterval(timer);
        };
        oDiv.onmouseout = function () {
          timer = setInterval(move, 60);
        };
      };
      onload();
    }
  }, [communityMember]);

  return (
    <div className="w-full mt-10 mb-32">
      <div className="text-indigo-700 text-2xl mb-10">
        {t("社区成员")}
      </div>
      <div className="xl:hidden relative overflow-x-auto w-full h-64 snap-x snap-mandatory">
        <div className="flex absolute mb-2">
          {communityMember.map((item) => (
            <div key={item.name} className="rounded-2xl snap-always snap-start w-90 bg-white mr-8 p-5 list-none">
              <div className="flex items-center">
                <img className="rounded-full w-16" src={item.img} alt="" />
                <div className="ml-2">
                  <div className="text-xl font-semibold">
                    {item.name}
                  </div>
                  <div>
                    {item.position}
                  </div>
                </div>
              </div>
              <div className="mt-5 line-clamp-5">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden xl:flex relative overflow-hidden w-full h-64" id="div3">
        <h4 className="flex absolute mb-2">
          {communityMember.map((item) => (
            <li key={item.name} className="rounded-2xl snap-always snap-center w-96 bg-white mr-8 p-5 list-none">
              <div className="flex items-center">
                <img className="rounded-full w-16" src={item.img} alt="" />
                <div className="ml-2">
                  <div className="text-xl font-semibold">
                    {item.name}
                  </div>
                  <div>
                    {item.position}
                  </div>
                </div>
              </div>
              <div className="mt-5 line-clamp-5">
                {item.text}
              </div>
            </li>
          ))}
        </h4>
      </div>
    </div>
  );
};

// Main component
const Home: React.FC<{ props: any }> = ({ props }) => {
  console.log("Raw props:", props); // 添加这行来查看原始 props
  
  const { t } = useTranslation('common');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const courseInfo = parseJsonSafely(props?.course_details);
  const hackathonsData = parseJsonSafely(props?.hackathons_details);
  console.log("Hackathons data in Home component:", hackathonsData);
  const activityData = parseJsonSafely(props?.activity_details);
  // const mediaData = parseJsonSafely(props?.media_details);
  // const communityData = parseJsonSafely(props?.community_details);
  // const communityMemberData = parseJsonSafely(props?.communityMember_details);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="mx-auto relative sm:bg-fixed overflow-hidden" style={{backgroundImage: "url('/tintin-bg.png')"}}>
      <Heads />
      <Header />
      <main className="lg:px-10 xl:px-20 relative px-5 pt-24 mx-auto">
        <section className="backdrop-blur-sm bg-white/60 w-full rounded-2xl py-10 px-5 md:px-10">
          <h1 className="text-2xl md:text-4xl xl:text-6xl">
            <div>A Global Web3.0 Developer Community</div>
            <div>for Builders, Entrepreneurs</div>
            <div>and Enthusiasts</div>
          </h1>
          <p className="mt-10 text-xs md:text-sm">
            <div>{t("赋能下一代开发者")}</div>
            <div>{t("通过聚集、培育、输送开发者到各开放网络，共同定义并构建未来")}</div>
          </p>
        </section>
        <Course data={courseInfo} />
        <Hackathons data={hackathonsData} />
        <Activity data={activityData} />
      </main>
       <section className="relative">
        {/* <Media data={mediaData} /> */}
        {/* <Community data={communityData} /> */}
      </section>
      {/* <section className="lg:px-10 xl:px-20 relative px-5 mx-auto">
        <AboutUs />
      </section>
      <section className="lg:px-10 xl:px-20 relative px-5 pt-16 mx-auto">
        <CommunityMember data={communityMemberData} />
      </section>
      <Loading/>
      <Tail/>  */}
    </div>
  );
};

export default Home;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer', 'header'])),
  },
});