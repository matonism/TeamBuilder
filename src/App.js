import React from "react";
import './App.css';
import QuickTeams from './QuickTeams';
import GeneratorSetup from "./GeneratorSetup";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      setupType: ''
    };
    this.setQuickSetup = this.setQuickSetup.bind(this);
    this.setFullSetup = this.setFullSetup.bind(this);
    this.setHome = this.setHome.bind(this);
    this.setSetupType = this.setSetupType.bind(this);
  }

  setQuickSetup(){
    this.setSetupType('Quick');
  }

  setFullSetup(){
    this.setSetupType('Full');
  }

  setHome(){
    this.setSetupType('');
  }

  setSetupType(setupType){
    this.setState({setupType: setupType});
  }

  render(){
    let elements = [];
    elements.push(
      <div class="masthead">
        <div class='title-text'>Team Generator</div>
        <button label='Home' class='home-button teams-button' onClick={this.setHome}>Home</button>
      </div>
      )
    if(this.state.setupType === 'Quick'){
      elements.push((<QuickTeams></QuickTeams>));
    }else if(this.state.setupType === 'Full'){
      elements.push((<GeneratorSetup></GeneratorSetup>));
    }else{
      elements.push(
        (
        <div class="button-container">
          <button label='Quick' class='quick-button teams-button' onClick={this.setQuickSetup}>Quick</button>
          <button label='Full' class='full-button teams-button' onClick={this.setFullSetup}>Full</button>
        </div>
        )
      )
    }
    return (
      <div className="App" class="main-container">
        {elements}
      </div>
    );
  }
}

export default App;
