import React from "react";
import { AppData } from '../../Contexts/DataContext';
import ImageLoader from '../ImageLoader';
import SVG from '../SVG';
import Buttons from '../Buttons';

export const CuirculedBanner = () => {

      let { state, loading } = AppData();
      let { data } = state


      let product = data.filter((item) => item.slug === "zx9-speaker" ? item : null)[0]
      console.log(product);

      return (
            loading ? <> <h3>loading data</h3> </> : <>
                  <div className='circuler_elm'>
                        <SVG name="pattern-circles" />
                        <div className='circle_banner'>
                              <div className='circle_image'>
                                    <ImageLoader sml={"../assets/home/mobile/image-speaker-zx9.png"} mid={"../assets/home/tablet/image-speaker-zx9.png"} lrg={"../assets/home/desktop/image-speaker-zx9.png"} />
                              </div>
                              <div className='new_info'>
                                    {product.new ? <p className='over_line'>New product</p> : <></>}
                                    <h2>{product.name}</h2>
                                    <p className='desc'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                                    <Buttons where={`${product.category}/${product.slug}`} name={"see prdouct"} button_type={"nav_btn"} />
                              </div>
                        </div>
                  </div>
            </>
      )
}
