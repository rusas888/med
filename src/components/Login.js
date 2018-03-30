import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authActions from '../actions/AuthActions'

class Login extends Component {
	constructor(props) {
		super(props)

	}

	login(){
		this.props.authActions.login(this.refs.email.value, this.refs.password.value)
	}

	render() {

		return (
			<div>
				<input type='text' placeholder='Enter email..' ref='email'/>
				<input type='text' placeholder='Enter password..' ref='password'/>
				<button onClick={::this.login}>Login</button>
			</div>
		)
	}
}

// function mapStateToProps(state) {
//    return {
//       auth: state.auth
//    }
// }

function mapDispatchToProps(dispatch) {
   return {
      authActions: bindActionCreators(authActions, dispatch)
   }
}

export default connect(null, mapDispatchToProps)(Login)