export const INCREMENT_DATA = "ENCREMENT";
export const DECREMENT_DATA = "DECREMENT";


export const incrementAction = (payload)=>{
   return {
      type:INCREMENT_DATA,
      payload
   }
}
export const decrementAction = (payload)=>{
   return {
      type:DECREMENT_DATA,
      payload
   }
}
const initialState = {
  data: 100,
};

const testReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT_DATA:
      return {
        ...state,
        data: state.data + payload,
      };
    case DECREMENT_DATA:
      return {
        ...state,
        data: state.data - payload,
      };
    default:
      return state;
  }
};
export default testReducer;
