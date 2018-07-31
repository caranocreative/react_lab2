import React, {Component} from 'react';
// {Componenet} desctructing --> es6
//now we have Component in  variable, otherwise we would have to do 
// React.Component


//look up controled components -state is keeping track of our components

class Login extends Component {
	constructor(){
		//calling super lets you use this inside constructor
		super();

		this.state = {
			username: '',
			password: ''
		}
	}
	handleChange = (e) => {
		// e.target.value, e.target.name 
		// arrow functions allow you to use this
		// which you will have to for this.setState
		// to check this - console.log(this.state, ' this is state') before the return
		
		// es6 computed properties
		// old way -- var someObject = {}
		//            someObject[username] = e.target.username
		this.setState({[e.target.name]: e.target.value});
		
	}
	handleSubmit = (e) => {
		e.preventDefault(); //this will stop the form from submitting a request,
		//and refereshing the page
		//console.log('handleSubmit is working');

		// we are calling the login function that we created in App.js, and
		//we sent down as props n order to lift out state
		this.props.login(this.state.username);

	}
	render(){
		//console.log(this.state, ' this state')
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' name='username' onChange={this.handleChange} value={this.state.username} placeholder='username'/>
				<input type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='password'/>
				<input type='submit' value='Submit'/>
			</form>
		)
	}
};


export default Login;