export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET': 
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // Add other action types as needed
    default:
      return state;
  }
};

export default reducer;
