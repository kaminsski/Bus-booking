const loaderReducer = (state = { loader: true }, action) => {
  switch (action.type) {
    case "LOADER": 
      return { loader: action.payload };

    default:
      return state;
  }
};
export default loaderReducer;
