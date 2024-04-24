
const tripReducer = (state={tripRx:null},action) =>{
    switch (action.type) {
        case "GET_TRIPS":
            return {
                tripRx: action.payload
            }
        case "GET_TRIPS_ALL":
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
                tripRx: action.payload
            
            }    
 
            
    
        default:
            return state;
    }
}

export default tripReducer