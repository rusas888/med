import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as calcActions from '../actions/CalcActions'
class Calc extends Component {
	render() {
		console.log('this.props')
		console.log(this.props)
		return (
			<div>
				<input type='text' ref='n1'/>
				<input type='text' ref='n2'/>
				<button onClick={() => this.props.calcActions.sum(this.refs.n1.value, this.refs.n2.value)}>Calculate</button>
				{ 
					this.props.calc.map((value, index) => {
						return <div>#{index} : {value}</div>
					})
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		calc: state.calc
	}
}


function mapDispatchToProps(dispatch) {
   return {
      calcActions: bindActionCreators(calcActions, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc)
