import type { NextPage } from 'next';
import Home from "./home";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Heads from "../components/head";
import React from "react";

const IndexPage: NextPage = () => {
    const router = useRouter()
    const { t } = useTranslation('common')
    console.log(t('change-locale'))
    console.log(router.locale)

  return (
      <main>
        <div>
            <Heads/>
              <Home></Home>
        </div>
          {/*<Link*/}
          {/*    href='/'*/}
          {/*    locale={router.locale === 'en' ? 'de' : 'en'}*/}
          {/*>*/}
          {/*    <button>*/}
          {/*        {t('change-locale')}*/}
          {/*    </button>*/}
          {/*</Link>*/}
          {/*<Link href='/second'>*/}
          {/*    <button*/}
          {/*        type='button'*/}
          {/*    >*/}
          {/*        {t('to-second-page')}*/}
          {/*    </button>*/}
          {/*</Link>*/}
      </main>
  )
}

export default IndexPage

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'footer']),
    }
})
