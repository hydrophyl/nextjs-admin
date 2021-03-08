import Head from 'next/head';
import { Fragment } from 'react';
import NoPlastic from '../components/noplastic/NoPlastic';
import NoElectronicsTrash from '../components/noelectronicstrash/NoElectronicsTrash';

const Home = () => {
  return (
    <Fragment>
      <div className="announcement">nothing here, get out but in red</div>
      <NoPlastic />
      <NoElectronicsTrash />
    </Fragment>
  );
};

export default Home;
