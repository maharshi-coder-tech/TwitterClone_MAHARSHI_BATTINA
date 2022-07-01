 import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {StateProvider} from "./StateProvider";
import reducer,{initialState} from "./reducer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StateProvider initialState={initialState} reducer = {reducer} >
    <App />
    </StateProvider>
    ,
  rootElement
);
