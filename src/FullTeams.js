import React from "react";
import './FullTeams.css';
import InputBox from './InputBox'
import TeamDisplay from './TeamDisplay'
import ContestantInputGenerator from './ContestantInputGenerator'
import ContestantCount from './ContestantCount';

class FullTeams extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      numberOfTeams: 3,
      numberOfContestants: 2,
      teams: []
    };
    this.setNumberOfContestants = this.setNumberOfContestants.bind(this);
    this.setNumberOfTeams = this.setNumberOfTeams.bind(this);
    this.generateTeams = this.generateTeams.bind(this);
  }

  setNumberOfContestants(value){
    this.setState({'numberOfContestants': value});
  }

  setNumberOfTeams(event){
    this.setState({'numberOfTeams': event.target.value});
  }

  generateTeams(event, contestants){
    let contestantValues = Object.values(contestants);
    let teams = [];
    let numberOfContestants = this.state.numberOfContestants;

    contestantValues = this.shuffle([...contestantValues]);
    let playersPerTeam = numberOfContestants / this.state.numberOfTeams;
    let numberOfTeamsWithExtraPlayer = numberOfContestants % this.state.numberOfTeams;

    for(let i = 0; i < this.state.numberOfTeams; i++){
      teams[i] = contestantValues.splice(0, playersPerTeam);
      if(i < numberOfTeamsWithExtraPlayer){
        teams[i] = teams[i].concat(contestantValues.splice(0,1));
      }
    }

    this.setState({'teams': teams});

  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  render(){
    return (
      <div className="FullTeams" class="main-container">
        <ContestantCount numberOfContestants={this.state.numberOfContestants} onsubmit={this.setNumberOfContestants}></ContestantCount>
        <ContestantInputGenerator numberOfContestants={this.state.numberOfContestants} updateNumberOfContestants={this.setNumberOfContestants} onFinalizedContestants={this.generateTeams}></ContestantInputGenerator>
        <InputBox name='numberOfTeams' placeholder='# of Teams...' class='styled-input' type="number" value={this.state.numberOfContestants} valueChangedCallback={this.setNumberOfTeams}></InputBox>
        <TeamDisplay teams={this.state.teams}></TeamDisplay>
      </div>
    );
  }
}

export default FullTeams;
