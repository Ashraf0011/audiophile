import { Route, Routes } from "react-router-dom";
import Product from "./Components/Pages/Product";
import ProductDetails from './Components/Pages/ProductDetails';
import NavBar from "./Components/Utils/NavBar";


import { memo, useEffect, useState } from "react";
import Home from "./Components/Pages/Home";
import { AppData } from "./Components/Contexts/DataContext";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import Cart from "./Components/Utils/Cart";
import Checkout from "./Components/Pages/Checkout";


function App() {

    let { state, loading } = AppData();
    let [showcart, setShowcart] = useState(false)
    let { cart } = state;
    console.log("appjs LOADING value", loading);



    // console.log("app data context============> cart", cart);
    let [width, setWidth] = useState(window.innerWidth);

    const resized = () => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
    }

    useEffect(() => {
        resized()
    }, [width])
    return (


        loading === true ? <h2> DataLoading </h2> :
            <div>
                <ScrollToTop />
                <NavBar width={width} setShowcart={setShowcart} />
                <div className="App">
                    {
                        showcart && cart.length !== 0 ? <Cart setShowcart={setShowcart} /> : <></>
                    }


                    <Routes>
                        <Route path="/" index element={<Home />} />
                        <Route path="headphones" element={<Product />} />
                        <Route path="headphones/:slug" element={<ProductDetails />} />
                        <Route path="earphones" element={<Product />} />
                        <Route path="earphones/:slug" element={<ProductDetails />} />
                        <Route path="speakers" element={<Product />} />
                        <Route path="speakers/:slug" element={<ProductDetails />} />
                        {/* Child component is outlate  */}
                        {/* Outlate imports child comp inside parent if child route is inside <Route></Route>*/}
                        <Route path="checkout" element={<Checkout />} />
                    </Routes>


                    {/* <Outlet /> */}

                </div>
            </div>

    );
}

export default memo(App);
