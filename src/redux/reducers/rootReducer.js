import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";
import patientReducer from "./patientReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "authReducer",
    "patientReducer",
  ],
};

const reducers = combineReducers({
  authReducer,
  patientReducer,
});

export default persistReducer(persistConfig, reducers);