import React from 'react'
import { AppData } from '../Contexts/DataContext'
import Buttons from './Buttons';
import { currecny } from './Currecny';
import { HiTrash } from 'react-icons/hi2'

const Cart = () => {
      const { state, remove, increase, decrease, clearcart } = AppData()
      console.log("cart component data-------------", state.cart);


      return (
            <>
                  {
                        state.cart.map((object) => {
                              console.log(object);
                              let { item, quantity } = object
                              return (
                                    <>
                                          <h4>{item.name}</h4>
                                          <h5> {item.slug} </h5>

                                          <p>{currecny(item.price)}</p>
                                          <p>total: {currecny(item.price)} x{quantity} = {currecny(item.price * quantity)}</p>
                                          {/* redice item count */}
                                          <div className='increment'>

                                                <span className='incrementer inc_btn' onClick={() => decrease(item)} > - </span>
                                                <span className='incrementer'>{quantity}</span>
                                                <span className='incrementer inc_btn' onClick={() => increase(item)}> + </span>
                                          </div>


                                          {/* remove this item */}
                                          {/* <Buttons
                                    name={"remove item"}
                                    button_type={"reg_btn"}
                                    onClick={() => remove(item)} /> */}
                                          <HiTrash onClick={() => remove(item)} />





                                    </>
                              )
                        })
                  }
                  <Buttons name={"remove all"} button_type={"reg_btn"} onClick={() => clearcart()} />
                  <Buttons name={"remove all"} button_type={"reg_btn"} where={"/checkout"} />
            </>
      )
}

export default Cart