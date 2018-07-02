import React, {Component} from "react"
import ReactDom from "react-dom"
import {Provider, connect} from "react-redux"
import {createStore} from "redux"
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {widgetReducer} from './reducers/widgetReducer'
import {App} from './containers/widgetList'
import {Jumbotron} from 'reactstrap'

let store = createStore(widgetReducer)

ReactDom.render(
    <div>
        <Jumbotron>
    <Provider store={store}>
    <App/>
    </Provider>
        </Jumbotron>
    </div>,
    document.getElementById('root')
);
