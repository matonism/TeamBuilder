import logo from './logo.svg';
import React from "react";
import './App.css';
import InputBox from './InputBox'
import ContestantInputGenerator from './ContestantInputGenerator'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {numberOfContestants: 0};
    this.setNumberOfContestants = this.setNumberOfContestants.bind(this);
  }

  setNumberOfContestants(event){
    this.setState({'numberOfContestants': event.target.value});
  }

  render(){
    return (
      <div className="App">
        <InputBox name='numberOfContestants' placeholder='5' class='input-box' valueChangedCallback={this.setNumberOfContestants}></InputBox>
        <ContestantInputGenerator numberOfContestants={this.state.numberOfContestants}></ContestantInputGenerator>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload mkay?
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
