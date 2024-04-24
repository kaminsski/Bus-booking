const langReducer = (state = { lang: true }, action) => {
  switch (action.type) {
    case "LANG": 
      return { lang: action.payload };

    default:
      return state;
  }
};
export default langReducer;
