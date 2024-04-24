import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from "@redux-devtools/extension"
import {thunk} from "redux-thunk"
import authReducer from "./reducers/auth"
import langReducer from "./reducers/lang"
import tripReducer from "./reducers/trip"
import loaderReducer from "./reducers/loader"
const intialState = {

}

const reducers = combineReducers({
    auth :authReducer,
    lang: langReducer,
    loader: loaderReducer,

    tripRx : tripReducer,


   

})
const store = createStore(reducers, intialState, composeWithDevTools(applyMiddleware(thunk)))

export default store