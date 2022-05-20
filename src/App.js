import React from "react";
import './App.css';
import GenerateTeams from "./GenerateTeams";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      //setupType: 'Other'
    };
    // this.setQuickSetup = this.setQuickSetup.bind(this);
    // this.setFullSetup = this.setFullSetup.bind(this);
    // this.setHome = this.setHome.bind(this);
    // this.setSetupType = this.setSetupType.bind(this);
  }

  // setQuickSetup(){
  //   this.setSetupType('Quick');
  // }

  // setFullSetup(){
  //   this.setSetupType('Full');
  // }

  // setHome(){
  //   this.setSetupType('Home');
  // }

  // setSetupType(setupType){
  //   this.setState({setupType: setupType});
  // }

  render(){
    return (
      <div className="App" class="main-container">
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
        <GenerateTeams></GenerateTeams>
      </div>
    );
  }
}

export default App;
