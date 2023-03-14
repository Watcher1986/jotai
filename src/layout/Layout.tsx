import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import './styles.css';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default memo(AppLayout);
