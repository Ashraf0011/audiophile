import React from 'react';
import CatagoryThumb from '../Utils/CatagoryThumb';
import { Outlet } from 'react-router-dom';
import { TopBanner } from '../Utils/Banners/TopBanner';
import { CuirculedBanner } from '../Utils/Banners/CuirculedBanner';
import ThiredBanner from '../Utils/Banners/ThiredBanner';
import FourthBanner from '../Utils/Banners/FourthBanner';

const Home = () => {

      return (
            <>
                  <TopBanner />
                  <CatagoryThumb />
                  <CuirculedBanner />
                  <ThiredBanner />
                  <FourthBanner />
                  <Outlet />

            </>
      )
}

export default Home