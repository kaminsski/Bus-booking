
const tripReducer = (state={tripRx:null},action) =>{
    switch (action.type) {
        case "GET_TRIPS":
            return {
                tripRx: action.payload
            }
        
        case "LOAD_DATA":
            const storedData = JSON.parse(localStorage.getItem("trips"));
            return {
                ...state,
                tripRx: storedData
          }; 
            
        case "NULL":
            return {
                tripRx: [...state.brands ,action.payload]
            
            }    
        case "DELETE_BRAND":
            return {
                tripRx: [...state.brands.filter((post) => post._id !== action.payload)]
            
            }   

        case "UPDATE_BRAND":
            return {
                tripRx: [...state.brands.map(brand => brand._id === action.payload._id ? action.payload : brand)]
            
            }   
            
    
        default:
            return state;
    }
}

export default tripReducer