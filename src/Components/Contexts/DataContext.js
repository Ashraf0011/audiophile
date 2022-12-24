import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";



const AppContext = createContext();
export const AppData = () => useContext(AppContext);


export const ContextWrapper = ({ children }) => {
    const [allData, setData] = useState(null)
    let initialState = {
        earphones: [],
        headphones: [],
        speakers: [],
        loading: false,
        cart: [],
        total_quantity: 0,
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "FIND_CATEGORY": {
                let headphones = action.payload.filter((item) => item.category === "headphones");
                console.log("reduced to headphones:", headphones);
                let earphones = action.payload.filter((item) => item.category === "earphones")
                console.log("reduced to earphones:", earphones);
                let speakers = action.payload.filter((item) => item.category === "speakers");
                console.log("reduced to speakers:", speakers);

                return { ...state, headphones, earphones, speakers }
            }
            case "ADD_TO_CART": {
                console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
                console.log("cart preview", state.cart);
                console.log("recieved item", action.payload.item);
                console.log("recieved quantity", action.payload.quantity);
                let { item, quantity } = action.payload

                const existing = state.cart.find((obj) => obj.item.slug === item.slug)
                console.log("exiting----------------", existing);
                if (existing) {
                    const newitem = state.cart.map((cartObj) =>
                        cartObj.item.slug === item.slug ? { ...existing, quantity: existing.quantity + quantity } : cartObj)
                    console.log("toatly new --- cart --- is:--->", newitem);
                    let cart = newitem
                    return { ...state, cart };
                } else {
                    let cart = [...state.cart, { item, quantity }]
                    console.log("let cart after setting==================", cart);
                    return { ...state, cart }
                }

            }
            case "CART_INC":
                return state;
            case "CART_DEC":
                return state;
            case "CART_REMOVE": {
                console.log("----------------------------Remove------------------------------");
                console.log("cart preview", state.cart);
                console.log("recieved item", action.payload.item);
                let { item } = action.payload

                const existing = state.cart.find((obj) => obj.item.slug === item.slug)
                console.log("exiting----------------", existing);
                if (existing) {
                    const newitem = state.cart.filter((iot) => iot.item.slug !== existing.item.slug)
                    console.log("filtered------========-------->>>>>>> item", newitem);
                    let cart = newitem
                    return { ...state, cart };
                } else {
                    throw new Error("can not perfom this action:", action.type)
                }
            }

            case "CART_CLEAR":
                return state;
            case "GRAND_TOTAL":
                // console.log("length", state.cart.length);                    
                let { grand_total, quantity } = state.cart.reduce((accum,
                    item) => {
                    // Get the quantity of the current item                     
                    let quantity = state.cart.filter((obj) => obj.slug === item.slug).length;

                    // must be to pure function                                 
                    // Multiply the price of the current item by its quantity    and add it to the   accumulator                                                                 
                    function calcAccum(price, quantity) {
                        let item_total = price * quantity;
                        return {
                            grand_total: item_total,
                            quantity: quantity
                        }
                    }
                    let res = calcAccum(item.price, quantity);
                    accum = res
                    return accum;
                }, { grand_total: 0, quantity: 0 });

                return { ...state, grand_total, quantity };


            case "LOADING":
                return { ...state, lodaing: action.payload }

            default:
                throw new Error(`${action.type} is not allowed!!`);
        }
    }





    let [state, dispatch] = useReducer(reducer, initialState);

    const addtocart = (item, quantity) => { dispatch({ type: "ADD_TO_CART", payload: { item: item, quantity: quantity } }) }
    const remove = (item) => { dispatch({ type: "CART_REMOVE", payload: item }) }
    const increase = (id) => { dispatch({ type: "CART_INC", payload: id }) }
    const decrease = (id) => { dispatch({ type: "CART_DEC", payload: id }) }
    const clearcart = () => { dispatch({ type: "CART_CLEAR" }) }



    const url = "http://localhost:5555/api/allproducts";


    /* 
      ┌─────────────────────────────────────────────────────────────────────────────┐
      │             const getData = async () => {                                   │
      │             let response = await fetch(url);                                │
      │             let data = await response.json();                               │
      │             setAllData(data);                                               │
      │                                                                             │
      │             let earphone = await data.filter((item) => item.category ==     │
      │ "earphones")                                                                │
      │             let headphone = await data.filter((item) => item.category ==    │
      │ "headphones")                                                               │
      │             let speaker = await data.filter((item) => item.category ==      │
      │ "speakers")                                                                 │
      │             setloading(false);                                              │
      │         }                                                                   │
      └─────────────────────────────────────────────────────────────────────────────┘
     */


    useEffect(() => {

        const getData = () => {
            console.log("context called");
            dispatch({ type: "LOADING", payload: true })
            axios.get(url).then(
                (response) => {
                    console.log("allData:::", response.data);
                    setData(response.data)
                    dispatch({ type: "FIND_CATEGORY", payload: response.data })
                    dispatch({ type: "LOADING", payload: false })
                }
            )
                .catch((e) => { console.log("axiosError::", e) })
        }
        getData()
    }, []);

    // useEffect(() => {
    //     dispatch({ type: "GRAND_TOTAL", payload: state.cart })
    // }, [state.cart])




    return (
        <AppContext.Provider value={{ state, addtocart, increase, decrease, remove, clearcart }}>
            {children}
        </AppContext.Provider>
    )
}