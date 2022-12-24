import { createContext, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);
export const CartContextWrapper = ({ children }) => {
      const initialState = {
            cart: [],
            total_quantity: 0,
            numberOF_total_items: 0
      }
      const reducer = (state, action) => {
            switch (action.type) {
                  case "ADD_TO_CART": {
                        let { item_id, quantity } = action.payload
                        if (state.cart.find((obj) => obj.item.id === item_id) === null) {
                              return { ...state, cart: [...state.cart, { item_id, quantity }] }
                        } else {
                              return state.cart.map((obj) => {
                                    if (obj.item_id === item_id) {
                                          return { ...state, cart: [...state.cart, { quantity: quantity + 1 }] }
                                    } else return obj
                              })
                        }
                        // console.log("add item object", item, quantity);
                        // return { ...state, cart: [...state.cart, { item: item, quantity: quantity }] }
                  }
                  case "CART_INC":
                        return state;
                  case "CART_DEC":
                        return state;
                  case "CART_REMOVE":
                        return state;
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
                  default:
                        throw new Error(`${action.type} is not allowed!!`);

            }
      }

      return (
            <CartContext.Provider>

            </CartContext.Provider>
      )
}