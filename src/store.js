import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducer from "./reducer/rootreducer";

let store;

function initStore() {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
}
store = initStore();
export default store;   