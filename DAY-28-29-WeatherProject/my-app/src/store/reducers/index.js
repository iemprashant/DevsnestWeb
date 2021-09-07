
import { combineReducers } from "redux";
import PlaceDataReducer from "./placeDataReducer";
import PlaceReducer from "./placeReducer";
const rootReducer = combineReducers({ place:PlaceReducer,placedata:PlaceDataReducer });
export default rootReducer;