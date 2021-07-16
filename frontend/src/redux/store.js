import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import {
   noteCreateReducer,
   noteDeleteReducer,
   noteListReducer,
   noteUpdateReducer,
} from "./reducers/notesReducer";

const userInfoFromStorage = localStorage.getItem("userInfo")
   ? JSON.parse(localStorage.getItem("userInfo"))
   : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const reducers = combineReducers({
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   noteList: noteListReducer,
   noteCreate: noteCreateReducer,
   noteUpdate: noteUpdateReducer,
   noteDelete: noteDeleteReducer,
});
const middleware = [thunk];

const store = createStore(
   reducers,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
