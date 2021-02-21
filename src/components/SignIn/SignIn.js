import React from 'react';
import './SignIn.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitButton = () => {
        fetch('https://whispering-beach-94356.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
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
        const {onRouteChange} = this.props;
        return (
            <div className="pa4 black-80 context new-top">
                <div className="measure center">
                    <fieldset id="log_in" className="ba b--transparent ph0 mh0"/>
                    <legend className="f2 fw6 ph0 mh0 new-top">Sign in</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f5 new-top" htmlFor="email-address">Email</label>
                        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5 new-top" htmlFor="password">Password</label>
                        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent white w-100" type="password" name="password"  id="password"/>
                    </div>
                    <div className="">
                        <input onClick={this.onSubmitButton} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib new-top" type="submit" value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')} className="f6 link dim db new-top">Register</p>
                    </div>
                </div>
        </div>
        )
    }
}

export default SignIn;