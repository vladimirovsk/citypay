import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import {BrowserRouter} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import {createStore,
        applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducers  from "./store/reducers/rootReducers";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
//import registerServiceWorker from './registerServiceWorker';


const store = createStore(
    rootReducers,
//    composeEnhancers(applyMiddleware(thunk)),
    composeWithDevTools(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
         </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
//
//registerServiceWorker();



