import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter} from 'react-router-dom';
//import {Provider} from 'react-redux';
//import {createStore} from 'redux';


//import reducers from 'reducers';
import Root from 'Root';
import App from './components/App';

ReactDOM.render(
    <Root>
       <BrowserRouter>
        <Route path="/" component={App} />
       </BrowserRouter>
    </Root>
    ,document.querySelector('#root'));