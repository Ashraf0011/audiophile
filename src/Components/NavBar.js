import React, { useEffect, useRef, useState } from 'react'
import { IconContext } from 'react-icons'
import { GrCart, GrMenu } from 'react-icons/gr'




import Buttons from './Utils/Buttons'
import CatagoryThumb from './CatagoryThumb'
import Logo from './Utils/Logo'
import { AppData } from './Contexts/DataContext'


const NavBar = ({ width, setShowcart }) => {

      let { state } = AppData()
      let { cart } = state;
      console.log("cart length", cart.length);
      let productquantity = cart.length

      let [show, setShow] = useState(false);
      let navBtnref = useRef()
      useEffect(() => {
            const outside = (e) => {
                  if (!navBtnref.current.contains(e.target)) {
                        setShow(false)
                  }
            }
            document.body.addEventListener('click', outside)
            return () => document.body.removeEventListener('click', outside)
      }, [])
      console.log("currentvalue in nav setShow", show);



      let cartBtnref = useRef()
      useEffect(() => {
            const outside = (e) => {
                  if (!cartBtnref.current.contains(e.target)) {
                        setShowcart(false)
                  }
            }
            document.body.addEventListener('click', outside)
            return () => document.body.removeEventListener('click', outside)
      }, [setShowcart])



      let quantity = productquantity


      return (
            width <= 1199 ?
                  <>
                        <div className='nav_bar'>
                              <div className="nav_icons_top">
                                    <div ref={navBtnref} onClick={() => setShow(show => !show)}>
                                          <IconContext.Provider value={{ style: { className: "nav_icon" } }}>
                                                <GrMenu className='nav_icon' />
                                          </IconContext.Provider>
                                    </div>
                                    <Logo />
                                    <div ref={cartBtnref} className='cart_icon_container'>
                                          <GrCart className='nav_icon' onClick={() => {
                                                if (cart.length === 0) {
                                                      setShowcart(false)
                                                } else setShowcart((prev) => !prev)
                                          }} />
                                          {
                                                quantity ? <span className="quantity">{quantity}</span> : <></>
                                          }
                                    </div>
                              </div>
                              {
                                    show === true ?
                                          <div className='navBar_catagory'>
                                                <CatagoryThumb setShow={setShow} />
                                          </div>
                                          :
                                          <></>
                              }
                        </div>

                  </>
                  :
                  <>
                        <div ref={navBtnref} className='navMenu_desktop'>
                              <Logo />
                              <div className='navLinks'>
                                    <Buttons className="nav_btn" name={"Home"} button_type={"nav_btn"} where={"/"} />
                                    <Buttons className="nav_btn" name={"Headphones"} button_type={"nav_btn"} where={"/headphones"} />
                                    <Buttons className="nav_btn" name={"Speakers"} button_type={"nav_btn"} where={"/speakers"} />
                                    <Buttons className="nav_btn" name={"Earphones"} button_type={"nav_btn"} where={"/earphones"} />
                              </div>
                              <div ref={cartBtnref} className='cart_icon_container'>
                                    <GrCart className='nav_icon' onClick={() => {
                                          if (cart.length === 0) {
                                                setShowcart(false)
                                          } else setShowcart((prev) => !prev)
                                    }} />
                                    {
                                          quantity ? <span className="quantity">{quantity}</span> : <></>
                                    }
                              </div>
                        </div>
                  </>
      )
}

export default NavBar