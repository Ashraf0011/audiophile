import React from 'react'
import { Outlet } from 'react-router-dom'
// import { AppData } from '../Context';

const Home = () => {
      // const { state } = AppData();
      // let { headphone, earphone, speaker } = state;
      return (
            <>

                  <h3>all 3  banners in here later</h3>
                  <Outlet />


            </>
      )
}

export default Home