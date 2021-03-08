import DashBoard from '../../components/dashboard/DashBoard';
import Head from 'next/head';
import React from 'react';

const CatsPage = () => {
  return (
    <div>
      <Head>
        <title>CatsPage</title>
      </Head>
      <DashBoard />
    </div>
  );
};

export default CatsPage;
