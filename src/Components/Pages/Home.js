import React from 'react';
import CatagoryThumb from '../Utils/CatagoryThumb';
import { Outlet } from 'react-router-dom';
import { TopBanner } from '../Utils/TopBanner';
import { CuirculedBanner } from '../Utils/CuirculedBanner';

const Home = () => {

      return (
            <>
                  <TopBanner />
                  <CatagoryThumb />
                  <CuirculedBanner />
                  <Outlet />

            </>
      )
}

export default Home