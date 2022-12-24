import React from 'react'
import { AppData } from '../Contexts/DataContext'
import { currecny } from './Currecny';

const Cart = () => {
      const { state } = AppData()
      console.log("cart component data-------------", state.cart);


      return (
            state.cart.map((object) => {
                  console.log(object);
                  let { item, quantity } = object
                  return (
                        <>
                              <h4>{item.name}</h4>
                              <h5> {item.slug} </h5>

                              <p>{currecny(item.price)}</p>
                              <p>total: {currecny(item.price)} x{quantity} = {currecny(item.price * quantity)}</p>
                        </>
                  )
            })
      )
}

export default Cart