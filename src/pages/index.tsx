import type { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import Home from './home';
import Heads from '../components/head';
import { https } from '../constants';

const IndexPage: NextPage = (props) => {
  const { t } = useTranslation('common');

  return (
    <main>
      <Heads />
      <Home props={props} />
    </main>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = { locale };

  // Helper function to fetch and extract data safely
  const fetchData = async (url: string, errorMessage: string) => {
    try {
      const response = await fetch(`${https}${url}?value=no-cache`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result.res?.project_details || [];
    } catch (error) {
      console.error(`${errorMessage}: ${error}`);
      return [];
    }
  };

  const [
    course_details,
    hackathons_details,
    activity_details,
    media_details,
    community_details,
    communityMember_details,
  ] = await Promise.all([
    fetchData('/v1/Course/GetCourseAllDetails', 'Failed to fetch course details'),
    fetchData('/v1/Hackathons/GetHackathonsDetails', 'Failed to fetch hackathon details'),
    fetchData('/v1/Activity/GetActivityAllDetails', 'Failed to fetch activity details'),
    fetchData('/v1/Media/GetMediaDetails', 'Failed to fetch media details'),
    fetchData('/v1/Community/GetCommunity', 'Failed to fetch community details'),
    fetchData('/v1/CommunityMember/GetCommunityMemberDetails', 'Failed to fetch community member details'),
  ]);

  return {
    props: {
      course_details,
      media_details,
      community_details,
      communityMember_details,
      hackathons_details,
      activity_details,
      ...await serverSideTranslations(locale, ['common', 'footer', 'header']),
    },
  };
};

const parseJsonSafely = (jsonString: string | undefined, defaultValue: any[] = []) => {
  if (!jsonString) return defaultValue;
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return defaultValue;
  }
};

