import React, { createContext, useContext, useReducer } from 'react';

// Create the data layer
export const StateContext = createContext();

// Build a provider to wrap around the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom hook to use the StateContext
export const UseStateValue = () => {
  return useContext(StateContext)
 }
  
