import React from 'react'
import { AppData } from '../Contexts/DataContext'
import Buttons from '../Utils/Buttons';
import { currecny } from '../Utils/Currecny';


const Checkout = () => {

      const { state, increase, decrease, clearcart } = AppData()
      console.log("||--------------------->>state in checkout", state.cart.length);
      const { grand_total } = state
      console.log("cart component data-------------", state.cart);
      return (
            state.cart.length < 1 ?
                  <div className='emptyCheckpagePage'>
                        <h2> Cart is epmty </h2>
                        <h4 className='over_line'>Forgetting Something</h4>
                        <h6>Help is here</h6>
                        <Buttons name={"back to bome page"} where={"/"} button_type={"bordered_btn"} />
                  </div>
                  :
                  <>
                        <div className='cart_page'>
                              <div className='cart_container'>

                                    <div className='cart_grp_one'>
                                          <h6>Cart ({state.cart.length})</h6>
                                          <p className="btn_clear_cart" onClick={() => clearcart()}> Remove All</p>
                                    </div>

                                    {
                                          state.cart.map((object) => {
                                                console.log(object);
                                                let { item, quantity } = object
                                                return (
                                                      <div className='cart_grp_two' key={`${object.item._id}`}>
                                                            <div className='grp_item_image'>
                                                                  {/* image */}
                                                                  {/* <ImageLoader sml={`.${item.categoryImage.mobile}`} mid={`.${item.categoryImage.tablet}`} lrg={`.${item.categoryImage.desktop}`} /> */}
                                                                  <img src={`.${item.categoryImage.mobile}`} alt={`${item.slug}`} />
                                                            </div>
                                                            <div className='grp_item_title'>
                                                                  <p className='item_name'>{item.name}</p>
                                                                  <p className='item_price'>{currecny(item.price)}</p>
                                                            </div>
                                                            <div className='grp_item_actions increment'>
                                                                  {/* <HiTrash onClick={() => remove(item)} /> */}
                                                                  <span className='incrementer inc_btn' onClick={() => decrease(item)} > - </span>
                                                                  <span className='incrementNumber'>{quantity}</span>
                                                                  <span className='incrementer inc_btn' onClick={() => increase(item)}> + </span>
                                                            </div>
                                                            {/* item price */}
                                                            {/* <div className='grp_item_total'>
                                                      <p className='uppercase'>total</p>
                                                      <p>{currecny(item.price * quantity)}</p>
                                                </div> */}

                                                            {/* remove this item */}
                                                            {/* <Buttons
                                                      name={"remove item"}
                                                      button_type={"reg_btn"}
                                                      onClick={() => remove(item)} /> */}
                                                      </div>
                                                )
                                          })
                                    }
                                    <div className='cart_grp_three  grp_item_total'>
                                          <p className='uppercase'>total</p>
                                          <p className='currency'>{currecny(grand_total)}</p>
                                    </div>

                              </div>
                        </div>
                  </>

      )
}

export default Checkout