import React from 'react'

import Buttons from './Buttons'

const InputField = ({ forName, placeholder }) => {
    return (

        <div className="form_page">
            <form className='checkout'>
                <div className='infomation'>
                    <h3>Checkout </h3>
                    <p className='sub_title'>Billing details</p>
                    <div className="input_field name">
                        <label className='input_label' htmlFor="name" > Name </label>
                        <input type="text" placeholder="Alexi Ward" required />
                    </div>
                    <div className="input_field">
                        <label className='input_label' htmlFor="email" > Email </label>
                        <input type="email" placeholder="alexi@email.com" required />
                    </div>
                    <div className="input_field">
                        <label className='input_label' htmlFor="phone" > Phone Number </label>
                        <input type="tel" placeholder="+1 6100 4343 456" required />
                    </div>
                    <p className='sub_title'>Shipping Info</p>
                    <div className="input_field">
                        <label className='input_label' htmlFor="Your Address" > Your Adress </label>
                        <input type="text" placeholder="1111 Willims Avenue" required />
                    </div>
                    <div className="input_field">
                        <label className='input_label' htmlFor="Zip code" > Zip code </label>
                        <input type="text" placeholder="0000 NY" required />
                    </div>
                    <div className="input_field">
                        <label className='input_label' htmlFor="City" > New York </label>
                        <input type="text" placeholder="New York" required />
                    </div>
                    <div className="input_field">
                        <label className='input_label' htmlFor="Country" > Country </label>
                        <input type="text" placeholder="America" required />
                    </div>
                    <p className='sub_title'>Payment Details</p>
                    <div className="radio_field">
                        <input type="radio" id='e-Money"' name='payment Method' value="e-Money" />
                        <label className='input_label' htmlFor="e-Money">e-Money</label>
                    </div>
                    <div className="radio_field">
                        <input type="radio" id='Cash_on_delivery' name='payment Method' value="Cash_on_delivery" />
                        <label className='input_label' htmlFor="Cash_on_delivery" >Cash on Delivery</label>
                    </div>
                </div>

                <div className='summary'>
                    {/* for loop of cart item */}
                    <h6>Summary</h6>
                    <div className='item_container'>
                        <img className='item_image' src={'./assets/cart/image-xx59-headphones.jpg'} alt=' item no one' />
                        <div className='item_details'>
                            <h6 className='item_name'>  item name </h6>
                            <p className='item_price'>  $ 100 </p>
                        </div>
                        <p className='item_count'>  x1 </p>
                    </div>

                    <div className='item_totals'>
                        <div className='price'>
                            <p className='total'>Total</p>
                            <p className='total_amount'>$ 400</p>
                        </div>
                        <div className='price'>
                            <p className='total'>Shipping</p>
                            <p className='total_amount'>$ 30</p>
                        </div>
                        <div className='price'>
                            <p className='total'>vat (includeing)</p>
                            <p className='total_amount'>$ 70</p>
                        </div>
                        <div className=' price grand_total'>
                            <p className='total'> grand total</p>
                            <p className='grand_total_amount'>$ 8990</p>
                        </div>
                    </div>
                    <Buttons className="filled_btn pay_btn" name={"Continue & pay"} button_type={"filled_btn"} width={"100%"} />
                </div>


            </form >
        </div >
    )
}

export default InputField