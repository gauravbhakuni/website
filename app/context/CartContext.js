"use client";
import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_CART':
      return {
        cartItems: action.payload.cartItems,
        cartQuantities: action.payload.cartQuantities,
        cartCount: action.payload.cartQuantities.reduce((total, quantity) => total + quantity, 0),
      };
      case 'ADD_TO_CART':
        const existingProductIndex = state.cartItems.findIndex(item => item.slug === action.payload.slug);
        if (existingProductIndex !== -1) {
          const updatedQuantities = [...state.cartQuantities];
          updatedQuantities[existingProductIndex] += 1;
          return {
            ...state,
            cartQuantities: updatedQuantities,
            cartCount: state.cartCount,
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
            cartQuantities: [...state.cartQuantities, 1],
            cartCount: state.cartCount + 1,  // Correct to increment by 1 when a new product is added
          };
        }      
    case 'REMOVE_FROM_CART':
      const indexToRemove = state.cartItems.findIndex(item => item.slug === action.payload.slug);
      if (indexToRemove !== -1) {
        const updatedItems = state.cartItems.filter((_, index) => index !== indexToRemove);
        const updatedQuantities = state.cartQuantities.filter((_, index) => index !== indexToRemove);
        return {
          ...state,
          cartItems: updatedItems,
          cartQuantities: updatedQuantities,
          cartCount: state.cartCount - 1,
        };
      }
      return state;
    case 'INCREASE_QUANTITY':
      const incIndex = state.cartItems.findIndex(item => item.slug=== action.payload.slug);
      if (incIndex !== -1) {
        const updatedQuantities = [...state.cartQuantities];
        updatedQuantities[incIndex] += 1;
        return {
          ...state,
          cartQuantities: updatedQuantities,
          cartCount: state.cartCount,
        };
      }
      return state;
    case 'DECREASE_QUANTITY':
      const decIndex = state.cartItems.findIndex(item => item.slug=== action.payload.slug);
      if (decIndex !== -1 && state.cartQuantities[decIndex] > 1) {
        const updatedQuantities = [...state.cartQuantities];
        if(updatedQuantities.length > 0) {
        updatedQuantities[decIndex] -= 1;
        }
        return {
          ...state,
          cartQuantities: updatedQuantities,
          cartCount: state.cartCount,
        };
      }
      return state;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    cartQuantities: [],
    cartCount: 0,
  });

  useEffect(() => {
    const savedCartItems = JSON.parse(window.localStorage.getItem('cartItems')) || [];
    const savedCartQuantities = JSON.parse(window.localStorage.getItem('cartQuantities')) || [];
    dispatch({
      type: 'INITIALIZE_CART',
      payload: {
        cartItems: savedCartItems,
        cartQuantities: savedCartQuantities,
      },
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    window.localStorage.setItem('cartQuantities', JSON.stringify(state.cartQuantities));
  }, [state.cartItems, state.cartQuantities]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const increaseQuantity = (product) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: product });
  };

  const decreaseQuantity = (product) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: product });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
