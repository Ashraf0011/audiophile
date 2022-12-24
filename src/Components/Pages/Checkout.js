import React from 'react'
import { AppData } from '../Contexts/DataContext'

const Checkout = () => {
      const { state } = AppData()
      console.log("---------------------state in checkout", state.cart.length);

      return (
            <div>Checkout</div>
      )
}

export default Checkout