import React from 'react';
import './Register.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitButton = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
       .then(response => response.json())
       .then(user => {
            if (user.id) {
                this.props.onRouteChange('signed');
            }
         })
   }

    render() {
        return (
            <div className="pa4 black-80 context new-top">
                <div className="measure center">
                    <fieldset id="log_in" className="ba b--transparent ph0 mh0"/>
                    <legend className="f2 fw6 ph0 mh0 new-top">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5 new-top" htmlFor="name">Name</label>
                        <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent white w-100" type="text" name="name"  id="name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5 new-top" htmlFor="email-address">Email</label>
                        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5 new-top" htmlFor="password">Password</label>
                        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent white w-100" type="password" name="password"  id="password"/>
                    </div>
                    <div className="">
                        <input onClick={this.onSubmitButton} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib new-top" type="submit" value="Register"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;