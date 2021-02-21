import './App.css';
import WordForm from './components/WordForm/WordForm';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      signed : false,
      route: 'home',
      input: '',
      submitted: false,
      text: {
        language: ''
      }
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({route: 'home'});
      this.setState({signed: false});
    } else if (route === 'signed') {
      this.setState({signed: true});
      this.setState({route: 'signed'});
      this.setState({submitted: false});
    } else if (route === 'signin') {
      this.setState({route: 'signin'});
    } else if (route === 'register') {
      this.setState({route : 'register'});
    } else {
      this.setState({route: route});
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonClick = () => {
    this.setState({submitted: true});
    fetch('https://whispering-beach-94356.herokuapp.com:3000/detect', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        text: this.state.input
      })
    })
    .then(response => response.json())
    .then(l => {
      this.setState(Object.assign(this.state.text, {language: l}));
    })
   }

  render() {
    return (
      <div>
      <Navigation onRouteChange={this.onRouteChange} signed={this.state.signed}/>
      <div className="area" >
        <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>  
        </div>
        { this.state.route === 'home' ? 
            <div className="context ">
              <h1>...so I know what language you speak!</h1>
            </div> :
            (this.state.route === 'signed' ? 
            <WordForm submitted={this.state.submitted} language={this.state.text.language} onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}/> : 
            (this.state.route === 'register' ? 
            <Register onRouteChange={this.onRouteChange}/> :
            <SignIn onRouteChange={this.onRouteChange}/>))
        }
    </div>
    );
  }
  
}

export default App;
