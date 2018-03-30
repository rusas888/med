import React, { Component } from 'react'
import { Route, Switch } from 'react-router' 


import Login from '../components/Login'
export default class Auth extends Component {
	render() {
      // const { user, mood } = this.props
      // const { setMood, setDate } = this.props.moodActions
		return (
			<div>
				AUTH PAGE
				<Switch>
					<Route path='/auth/login' component={Login}/>
				</Switch>
			</div>
		)
	}
}


