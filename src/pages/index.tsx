/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import * as fsp from 'fs/promises';

import React from 'react';

import { GetStaticProps, NextPage } from 'next';

import * as Home from '../components/Home/exports';
import { Meta } from '../layout/Meta';

interface IndexProps {
  skills : string[]
}

const Index: NextPage<IndexProps> = ({ skills }) => (
  <div>
    <Meta title="Wadhah Mahrouk" description="Wadhah Mahrouk, Resume" />
    <div className="py-4 bg-white shadow mt-14 c-container">
      <Home.Title />
      <div>
        <Home.Profile />
      </div>

      <div className="mt-12">
        <Home.Skills data={skills} />
      </div>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const skillsBuffwe = (await fsp.readFile('src/data/skills.md'));
  // TODO replace with regex
  const skills = skillsBuffwe.toString().split('##').slice(1).map((e) => `## ${e}`);

  return ({
    props: {
      skills,
    },
  });
};

export default Index;
