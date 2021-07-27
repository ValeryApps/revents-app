import { createStore } from "redux"
import testReducer from "../sandBox/testReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const configStore = ()=>{
   return createStore(testReducer, devToolsEnhancer());
}

export default configStore;