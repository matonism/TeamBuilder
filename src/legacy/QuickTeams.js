import React from "react";
import './QuickTeams.css';
import InputBox from './InputBox'
import TeamDisplay from './TeamDisplay'
import ContestantInputRaw from './ContestantInputRaw'

class QuickTeams extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      teams: []
    };
    this.setNumberOfTeams = this.setNumberOfTeams.bind(this);
    this.generateTeams = this.generateTeams.bind(this);
  }

  setNumberOfTeams(event){
    this.setState({'numberOfTeams': event.target.value});
  }

  generateTeams(event, contestants){
    let contestantValues = Object.values(contestants);
    let teams = [];
    let numberOfContestants = contestantValues.length;
    contestantValues = contestantValues.map(contestant => {
      return {name: contestant};
    })

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
      <div className="QuickTeams" class="main-container">              
        <div>
            <InputBox name='numberOfTeams' placeholder='# of Teams...' class='styled-input' type="number" value={this.state.numberOfContestants} valueChangedCallback={this.setNumberOfTeams}></InputBox>
        </div>
        <ContestantInputRaw numberOfContestants={this.state.numberOfContestants} onFinalizedContestants={this.generateTeams}></ContestantInputRaw>
        <TeamDisplay teams={this.state.teams}></TeamDisplay>
      </div>
    );
  }
}

export default QuickTeams;
