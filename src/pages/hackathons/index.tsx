import React from "react";
import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Tail from "../../components/tail";
import Heads from "../../components/head";
import { Hackathons_detail } from "../../jotai";
import { https } from "../../constants";


const Hackathons = ({ hackathons_details }) => {
  const { t } = useTranslation('common');
  const [hackathonsData] = useAtom(Hackathons_detail);

  return (
    <div className="mx-auto relative bg-fixed overflow-hidden bg-[url('/tintin-bg.png')]">
      <Heads />
      <div className="lg:px-10 xl:px-20 relative px-5 pt-24 mx-auto">
        {/* Hero section */}
        <div className="p-10 rounded-xl bg-left md:bg-cover overflow-hidden bg-[url('/黑客松_bg.png')]">
          {/* ... existing hero content ... */}
        </div>

        {/* Hackathons list */}
        <div>
          <h2 className="text-indigo-700 text-xl mt-10">Explore Hackathons</h2>
          <div className="mt-5 mb-20 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {hackathonsData.length > 0 ? (
              hackathonsData.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.text}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{t('date')}: {item.time}</span>
                    <Link href={`/hackathons/${item.id}`}>
                      <a className="text-blue-500 hover:text-blue-700">{t('learnMore')}</a>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No hackathons available at the moment.</p>
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
  const data = { locale };
  const hackathons_ret = await fetch(`${https}/v1/Hackathons/GetHackathonsDetails?value=no-cache`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const hackathons_result = await hackathons_ret.json();
  const hackathons_details = JSON.stringify(hackathons_result.res.project_details);

  return {
    props: {
      hackathons_details,
      ...(await serverSideTranslations(locale, ['common', 'footer', 'header'])),
    }
  };
}
