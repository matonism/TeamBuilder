import React from "react";
import './FullSetupMode.css';
import InputBox from './InputBox';
import TeamDisplay from './TeamDisplay';
import ContestantInputRaw from './ContestantInputRaw';
import ContestantPill from './ContestantPill';
import { getTeamsForNumberOfTeams, getTeamsForPlayersPerTeamRoundUp, getTeamsForPlayersPerTeamRoundDown, getTeamsForPlayersPerTeamRoundOddManOut } from './TeamGeneratorHelpers.js';
import TogglePill from "./TogglePill";

let GENERATOR_MODE_PLAYERS_PER_GROUP = 'Players per Team';
let GENERATOR_MODE_NUMBER_OF_GROUPS = 'Number of Teams';
let GENERATOR_MODE_SCHEDULER = 'Scheduler';
let PLAYERS_PER_TEAM_OPTIONS = ['Round Up', 'Round Down', 'Odd Man Out'];

class SchedulerForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        teams: [],
        games: [],
        numberOfRounds: 6,
        teamsPerGame: 4,
        teamsPerGameOption: 'Round Up'
    };
    this.setNumberOfTeams = this.setNumberOfTeams.bind(this);
    this.generateTeams = this.generateTeams.bind(this);
    this.addContestants = this.addContestants.bind(this);
    this.setTeamsPerGame = this.setTeamsPerGame.bind(this);
    this.setTeamsPerGameOption = this.setTeamsPerGameOption.bind(this);
    this.handleGeneratorModeChange = this.handleGeneratorModeChange.bind(this);
    
  }

setNumberOfTeams(event){
    this.setState({'numberOfTeams': event.target.value});
}

setTeamsPerGame(event){
    this.setState({'teamsPerGame': event.target.value});
}

setTeamsPerGameOption(option){
    this.setState({'teamsPerGameOption': option});
}


addContestants(event, newContestants){
    this.props.addContestants(event, newContestants);
}

//schedule: [
//    [ --- Week One ----
//      ['Michael','Ashley','Luke','Becca'],
//      ['Nick','Rachel','Austin','Ryan']
//    ],
//    [ --- Week Two ----
//      ['Michael', 'Nick', 'Richie', 'Brian'],
//      []
//    ]
//
//]

//opponents: {
//     Ashley: {0: ['Michael', 'Luke', 'Becca'], 1: ['Dan', 'Richie']}
//     Michael: {0: ['Ashley', 'Luke', 'Becca'], 1: ['Dan', 'Richie']}
// }
generateSchedule(){
    let contestantValues = Object.values(this.props.contestants);
    let schedule = [];
    contestantValues = this.shuffle([...contestantValues]);

    // if(this.state.teamsPerGameOption === 'Round Down'){
    //     teams = getTeamsForPlayersPerTeamRoundDown(contestantValues, this.state.teamsPerGame);
    // }else if(this.state.teamsPerGameOption === 'Odd Man Out'){
    //     teams = getTeamsForPlayersPerTeamRoundOddManOut(contestantValues, this.state.teamsPerGame);
    // }else{
    //     teams = getTeamsForPlayersPerTeamRoundUp(contestantValues, this.state.teamsPerGame);
    // }

    get

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

    let contestants = this.state.contestants.sort((a, b) => {
        if(a.name < b.name){
            return -1;
        }else if(a.name > b.name){
            return 1;
        }else{
            return 0;
        }
    });

    let gameSizeInputOption = (
        <div class='teams-per-game-settings'>
            <div class="teams-per-game">
                <div class="label-text">Teams per Game</div>
                <InputBox name='teamsPerGame' placeholder='Teams per Game...' class='styled-input' type="number" value={this.state.teamsPerGame} valueChangedCallback={this.setTeamsPerGame}></InputBox>
            </div>
            <TogglePill options={PLAYERS_PER_TEAM_OPTIONS} setOption={this.setTeamsPerGameOption}></TogglePill>
        </div>
    )

    let numberOfRoundsInputOption = (
        <div class='number-of-rounds-settings'>
            <div class="number-of-rounds">
                <div class="label-text">Number of Rounds</div>
                <InputBox name='numberOfRounds' placeholder='Number of Rounds...' class='styled-input' type="number" value={this.state.numberOfRounds} valueChangedCallback={this.setNumberOfRounds}></InputBox>
            </div>
        </div>
    )
    

    return (
        <div>
            <div>
                {gameSizeInputOption}
                {numberOfRoundsInputOption}
            </div>
            <ContestantInputRaw numberOfContestants={this.state.numberOfContestants} addAllContestants={this.addContestants} onFinalizedContestants={this.generateTeams} clearOnSubmit='true'></ContestantInputRaw>
        </div>
    );
  }
}

export default SchedulerForm;
