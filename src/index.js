import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import './styles/index.css'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import configureStore from './store/configureStore'
const store = configureStore()

import Home from './containers/Home'
import Config from './containers/Config'
import Auth from './containers/Auth'
import Calc from './containers/Calc'

import axios from 'axios'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

render(
	<Provider store={store}>
		<ConnectedRouter history={history}> 
			<div>
				<Route exact path='/' component={Home} />
				<Route path='/config' component={Config} />
				<Route path='/auth' component={Auth} />
				<Route path='/calc' component={Calc} />
			</div>
		</ConnectedRouter>
	</Provider>,
  document.getElementById('root')
)
