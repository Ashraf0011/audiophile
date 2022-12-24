import { Route, Routes } from "react-router-dom";
import Product from "./Components/Pages/Product";
import ProductDetails from './Components/Pages/ProductDetails';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import BestGears from './Components/BestGears';
import CatagoryThumb from './Components/CatagoryThumb';
import { useEffect, useState } from "react";
import Home from "./Components/Pages/Home";
import { AppData, ContextWrapper } from "./Components/Contexts/DataContext";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import Cart from "./Components/Utils/Cart";

function App() {
  const [loading, setloading] = useState(false)
  let [showcart, setShowcart] = useState(false)

  let { state } = AppData();
  let { cart } = state;
  console.log("app data context============> cart", cart);

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


    loading ? <h2> DataLoading </h2> :
      <div className="App">

        <ScrollToTop />
        <NavBar width={width} setShowcart={setShowcart} />
        {
          showcart && cart.length !== 0 ? <Cart /> : <></>
        }
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="headphones" element={<Product />} />
          <Route path="headphones/:slug" element={<ProductDetails />} />

          <Route path="earphones" element={<Product />} />
          <Route path="earphones/:slug" element={<ProductDetails />} />

          <Route path="speakers" element={<Product />} />
          <Route path="speakers/:slug" element={<ProductDetails />} />

        </Routes>
        <CatagoryThumb />
        <BestGears />
        <Footer />
      </div>




  );
}

export default App;
