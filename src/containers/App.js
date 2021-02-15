import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation';
import Main from '../components/Main';
import Landing from '../components/Landing';
import 'tachyons';

const initialState = {
  user: {
    pseudo: '',
    email: ''
  },
  mode: 'add',
  isSignedIn: false
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  changeMode = () => {
    this.setState({
      mode: this.state.mode === 'add' ? 'liste' : 'add'
    })
  }
  render() {
    const derniermode = this.state.mode;
    console.log(derniermode);
    return (
      <div className="App">
        <Navigation changeMode={this.changeMode} />
        {
          this.state.isSignedIn ?
            <Landing />
            : (
              <div>
                <Main mode={this.state.mode} />
              </div>
            )

        }

      </div>
    );
  }

}

export default App;
