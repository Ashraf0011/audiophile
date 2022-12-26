import React from 'react'
import { useLocation } from 'react-router-dom'
import { AppData } from '../Contexts/DataContext'

import Buttons from '../Utils/Buttons'
import ImageLoader from '../Utils/ImageLoader'
// import CatagoryThumb from './CatagoryThumb';


const Product = () => {
    let { state } = AppData();
    let { loading, headphones, earphones, speakers } = state;
    console.log("correnty loading?", loading);
    const location = useLocation()
    let path = location.pathname
    let clicked_on_path = path.split('/')
    let val = clicked_on_path[1]
    console.log("current path is", val);
    let productname = [];
    if (val === "headphones") {
        productname = headphones;
    } else if (val === "speakers") {
        productname = speakers;
    } else {
        productname = earphones;
    }
    console.log("current product is:", productname);
    /* 
      ┌─────────────────────────────────────────────────────────────────────────────┐
      │     headphone.map((item) => {                                               │
      │         console.log("head comp", item);                                     │
      │         return (                                                            │
      │             < div className='headphones_collection' >                       │
      │                 <h2> headphones </h2>                                       │
      │                 <h3> {item.name} </h3>                                      │
      │             </div >                                                         │
      │                                                                             │
      │         )                                                                   │
      │     })                                                                      │
      └─────────────────────────────────────────────────────────────────────────────┘
      onClick={() => addtocart(item)}
     */

    console.log("correnty loading?", loading);
    return (
        loading === true ? <h3>please wait loading</h3> :
            (<div className='product_list' >
                {/* <h4> {productname ? productname[0].category : loading} </h4> */}
                <h4>{val} </h4>
                < div className='product_collection'  >
                    {
                        productname.map((item) => <>
                            <div className='product_card_container' key={item.id} id={`${item.id}`}>
                                <ImageLoader className="product_card_image" sml={`.${item.image.mobile}`} mid={`.${item.image.tablet}`} lrg={`.${item.image.desktop}`} />
                                {item.new ? <p className='over_line'>new product</p> : <></>}
                                <h3 className='product_card_heading' > {item.name} </h3>
                                <p className='product_card_description'>{item.description}</p>
                                <Buttons button_type="filled_btn" name={"see product"} where={`/${item.category}/${item.slug}`} />
                            </div>
                        </>
                        )
                    }
                </div >
            </div>)
    )

}

export default Product