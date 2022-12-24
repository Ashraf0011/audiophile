import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { AppData } from '../Contexts/DataContext';
import Buttons from '../Utils/Buttons';
import { currecny } from '../Utils/Currecny';
import ImageLoader from '../Utils/ImageLoader';


const ProductDetails = () => {
      console.log("pd called");
      let { state, addtocart } = AppData();
      let { headphones, speakers, earphones, grand_total } = state;
      console.log("pd state cart", state.cart);

      let [quantity, setquantity] = useState(1)

      let productname = []

      let { slug } = useParams()
      console.log("slug:", slug);
      const location = useLocation()
      let path = location.pathname
      console.log("path", path);

      let clicked_on_path = path.split('/')

      let category = clicked_on_path[1]
      console.log("category", category);

      let slug_val = clicked_on_path[2]
      console.log("val_slug", slug_val);

      console.log("PDN before", productname);
      if (category === "headphones") {
            // setPord(headphones)
            productname = headphones
            console.log("productname name inide:", productname);

      } else if (category === "earphones") {
            // setPord(earphones)
            productname = earphones
            console.log("productname inside:", productname);
      } else if (category === "speakers") {
            // setPord(speakers)
            productname = speakers

            console.log("productname inside:", productname)
      }

      let selected_Item = productname.filter((it) => it.slug === slug_val ? it : null)[0]
      console.log("Selected Item showing from", selected_Item);

      console.log("gt", grand_total);


      const handDEC = () => setquantity((prev) => prev - 1);

      const handINC = () => setquantity((prev) => prev + 1);




      return (
            <div className='selected_item' key={selected_Item.id}>
                  <ImageLoader sml={`.${selected_Item.image.mobile}`} mid={`.${selected_Item.image.tablet}`} lrg={`.${selected_Item.image.desktop}`} alt={`${selected_Item.name}`} />
                  {selected_Item.new ? <h4 className='over_line'>new product </h4> : <></>}
                  <h2>{selected_Item.name}</h2>
                  <p className='description'>{selected_Item.description}</p>
                  <p> {currecny(selected_Item.price)}</p>

                  <div className='increment'>
                        <span className='incrementer inc_btn' onClick={() => handDEC()} > - </span>
                        <span className='incrementer'>{quantity}</span>
                        <span className='incrementer inc_btn' onClick={() => handINC()}> + </span>
                  </div>
                  <Buttons className="filled_btn" name={"Add to cart"} button_type={"filled_btn"} onClick={() => addtocart(selected_Item, quantity)} />

                  <h4>Features</h4>
                  <p className='selected_item_features'> {selected_Item.features} </p>
                  <h4>Includes</h4>
                  {
                        selected_Item.includes.map((included, index) =>
                              <p key={index} >{included.quantity} --- {included.item}</p>
                        )

                  }

                  <div className='selected_item_gallery'>
                        <h5>gallery</h5>
                        {
                              Object.entries(selected_Item.gallery).map(([key, value]) => {
                                    return (<div key={key}>
                                          <ImageLoader sml={`.${value.mobile}`} mid={`.${value.tablet}`} lrg={`.${value.desktop}`} alt={value} />
                                    </div>)
                              })
                        }
                  </div>

                  <h3>You may also like</h3>
                  {
                        selected_Item.others.map((item, index) =>
                              <div key={item.name + index} className='others'>
                                    <h4>{item.name}</h4>

                              </div>

                        )
                  }

                  {/* item.image.map((imgs) => {
                        <ImageLoader sml={`${imgs.mobile}`} mid={`${imgs.tablet}`} lrg={`${imgs.desktop}`} />
                  })
                                    Object.key((f_s_t) => {
                        console.log("obj keys", f_s_t)
                  }) */}
            </div>
      )
}

export default ProductDetails