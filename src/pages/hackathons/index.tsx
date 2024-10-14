import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "../../components/header";
import Tail from "../../components/tail";
import Heads from "../../components/head";
import { Hackathons_detail } from "../../jotai";
import { https } from "../../constants";
import HackathonsState from "../../components/state";


const Hackathons = ({ hackathons_details }) => {
  const { t } = useTranslation('common')
  const [hackathonsData, setHackathonsData] = useAtom(Hackathons_detail)

  useEffect(() => {
    console.log("Received hackathons_details:", hackathons_details);
    console.log(typeof hackathons_details);
    
    if (Array.isArray(hackathons_details)) {
      if (hackathons_details.length > 0) {
        console.log("Hackathons details is a non-empty array. Setting data...");
        setHackathonsData(hackathons_details);
      } else {
        console.warn("Hackathons details is an empty array");
      }
    } else {
      console.error("Hackathons details is not an array:", typeof hackathons_details);
    }
  }, [hackathons_details, setHackathonsData]);

  return (
    <div className="mx-auto relative bg-fixed overflow-hidden bg-[url('/tintin-bg.png')]">
      <Heads />
      <Header />
      <div className="lg:px-10 xl:px-20 relative px-5 pt-24 mx-auto">
        {/* Hero section */}
        <div className="p-10 rounded-xl bg-left md:bg-cover overflow-hidden bg-[url('/images/hackathon_bg.png')]">
          <div className="text-[#5448AE] text-xl mb-5">{t('hackathons')}</div>
          <div className="text-4xl mb-5">
            <div className="mb-2">{t('建立与全球开发者的联系')}</div>
            <div>{t('一起组队玩转黑客松')}</div>
          </div>
          <div className="text-xl">
            {t('用区块链技术创建 Web3 世界')}<br/>
            {t('协助开发者创建团队，提供技术指导，引入投资')}
          </div>
        </div>

        {/* Hackathons list */}
        <div>
          <h2 className="text-indigo-700 text-xl mt-10">{t('exploreHackathons')}</h2>
          <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {hackathonsData.length > 0 ? (
              hackathonsData.map((item, index) => (
                <div key={`hackathon-${item.id || index}`} className="rounded-2xl relative">
                  <div className={`${HackathonsState[item.state]} flex justify-end right-4 mt-5 rounded-full px-3 py-1 absolute`}>
                    {item.state}
                  </div>
                  <img className="rounded-t-2xl w-full md:h-60 2xl:h-80" src={item.img} alt="" />
                  <div className="px-10 py-8 bg-white rounded-b-2xl">
                    <h3 className="mt-2 line-clamp-2 h-14 font-semibold">{item.name}</h3>
                    <p className="text-sm mt-2">{item.time}</p>
                    <p className="line-clamp-4 h-20 text-sm text-[#000000] mt-2">{item.text}</p>
                    <div className="flex mt-5">
                      {(item.state === "OnGoing" || item.state === "ComingSoon") && (
                        <Link
                          href={item.registrationLink}
                          className="text-xs 2xl:text-xl bg-black text-white rounded-full px-8 py-2.5 mr-5"
                          legacyBehavior>
                          {t('报名')}
                        </Link>
                      )}
                      <Link
                        href={item.activityLink}
                        className="text-xs 2xl:text-xl text-black border border-black rounded-full px-8 py-2.5"
                        target="_blank"
                        legacyBehavior>
                        {t('了解更多')}
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center">{t('noHackathonsAvailable')}</p>
            )}
          </div>
        </div>
      </div>
      <Tail />
    </div>
  );
};

export default Hackathons;

export async function getStaticProps({ locale }) {
  try {
    const data = { locale };
    const hackathons_ret = await fetch(`${https}/v1/Hackathons/GetHackathonsDetails?value=no-cache`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const hackathons_result = await hackathons_ret.json();
    
    console.log("API Response:", hackathons_result);

    // 直接使用 project_details，不进行额外的 JSON.stringify
    const hackathons_details = JSON.parse(hackathons_result.res.project_details) || [];

    console.log("Processed hackathons_details:", hackathons_details);

    return {
      props: {
        hackathons_details,
        ...(await serverSideTranslations(locale, ['common', 'footer', 'header'])),
      }
    };
  } catch (error) {
    console.error("Error fetching hackathons details:", error);
    return {
      props: {
        hackathons_details: [],
        ...(await serverSideTranslations(locale, ['common', 'footer', 'header'])),
      }
    };
  }
}
