import ReactDom from 'react-dom';
import React  from 'react';

import { Provider } from "react-redux";
import {store} from "./app/store"
import AppRouter from "./AppRouter";

ReactDom.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById("root"));