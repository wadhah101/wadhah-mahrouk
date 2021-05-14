import React from 'react';

import { NextPage } from 'next';

import * as Home from '../components/Home/exports';
import { Meta } from '../layout/Meta';

const Index: NextPage = () => (
  <div>
    <Meta title="Wadhah Mahrouk" description="Wadhah Mahrouk, Resume" />
    <div>
      <Home.Title />
      <Home.Skills />
    </div>
  </div>
);

export default Index;
