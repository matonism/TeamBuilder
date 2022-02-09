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

class FullSetupMode extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        contestants: [],
        teams: [],
        nextId: 0,
        numberOfTeams: 2,
        playersPerTeam: 2,
        generatorMode: GENERATOR_MODE_NUMBER_OF_GROUPS,
        playersPerTeamOption: 'Round Up'
    };
    this.removeContestant = this.removeContestant.bind(this);
    this.updateContestant = this.updateContestant.bind(this);
    this.setNumberOfTeams = this.setNumberOfTeams.bind(this);
    this.generateTeams = this.generateTeams.bind(this);
    this.addContestants = this.addContestants.bind(this);
    this.setPlayersPerTeam = this.setPlayersPerTeam.bind(this);
    this.setPlayersPerTeamOption = this.setPlayersPerTeamOption.bind(this);
    this.handleGeneratorModeChange = this.handleGeneratorModeChange.bind(this);
    
  }

  setNumberOfTeams(event){
    this.setState({'numberOfTeams': event.target.value});
  }

  setPlayersPerTeam(event){
    this.setState({'playersPerTeam': event.target.value});
  }

  setPlayersPerTeamOption(option){
    this.setState({'playersPerTeamOption': option});
  }

  handleGeneratorModeChange(generatorMode){
    this.setState({generatorMode: generatorMode});
  }

  addContestants(event, newContestants){
    let currentContestants = this.state.contestants;

    let contestantKeys = Object.keys(newContestants);
    let nextId = this.state.nextId;
    contestantKeys.forEach((key, index) => {
        
        let contestantObject = {
            id: 'contestant-' + (nextId),
            name: newContestants[key],
            teamPreference: '1',
            ranking: ''
        }
        currentContestants.push(contestantObject)
        nextId++;
    });

    this.setState({contestants: currentContestants});
    this.setState({nextId: nextId});
}

updateContestant(updatedContestant){
    let currentContestants = this.state.contestants;
    currentContestants = currentContestants.map(contestant => {
        if(contestant.id === updatedContestant.id){
            contestant = updatedContestant;
        }
        return contestant;
    });

    this.setState({contestants: currentContestants});
}

removeContestant(updatedContestant){
    let currentContestants = this.state.contestants;
    currentContestants = currentContestants.filter(contestant => {
        return contestant.id !== updatedContestant.id;
    });
    this.setState({contestants: currentContestants});
}

generateTeams(){
    let contestantValues = Object.values(this.state.contestants);
    let teams = [];
    contestantValues = this.shuffle([...contestantValues]);

    if(this.state.generatorMode === GENERATOR_MODE_PLAYERS_PER_GROUP){
        if(this.state.playersPerTeamOption === 'Round Down'){
            teams = getTeamsForPlayersPerTeamRoundDown(contestantValues, this.state.playersPerTeam);
        }else if(this.state.playersPerTeamOption === 'Odd Man Out'){
            teams = getTeamsForPlayersPerTeamRoundOddManOut(contestantValues, this.state.playersPerTeam);
        }else{
            teams = getTeamsForPlayersPerTeamRoundUp(contestantValues, this.state.playersPerTeam);
        }
    }else{
        teams = getTeamsForNumberOfTeams(contestantValues, this.state.numberOfTeams);
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

    let contestants = this.state.contestants.sort((a, b) => {
        if(a.name < b.name){
            return -1;
        }else if(a.name > b.name){
            return 1;
        }else{
            return 0;
        }
    });

    let teamSizeInputOption = (
        <div class="number-of-teams">
            <div class="label-text">Number of Teams</div>
            <InputBox name='numberOfTeams' placeholder='# of Teams...' class='styled-input' type="number" value={this.state.numberOfTeams} valueChangedCallback={this.setNumberOfTeams}></InputBox>
        </div>
    )

    if(this.state.generatorMode === GENERATOR_MODE_PLAYERS_PER_GROUP){
        teamSizeInputOption = (
            <div class='players-per-team-settings'>
                <div class="players-per-team">
                    <div class="label-text">Players per Team</div>
                    <InputBox name='playersPerTeam' placeholder='Player per Team...' class='styled-input' type="number" value={this.state.playersPerTeam} valueChangedCallback={this.setPlayersPerTeam}></InputBox>
                </div>
                <TogglePill options={PLAYERS_PER_TEAM_OPTIONS} setOption={this.setPlayersPerTeamOption}></TogglePill>
            </div>
        )
    }

    return (
      <div className="FullSetupMode" class="main-container"> 
        <div className="page-divider">
            <div class='contestant-input'>

                <div>
                    <div class="team-generator-mode">     
                        <TogglePill options={[GENERATOR_MODE_NUMBER_OF_GROUPS, GENERATOR_MODE_PLAYERS_PER_GROUP, GENERATOR_MODE_SCHEDULER]} setOption={this.handleGeneratorModeChange}></TogglePill>
                    </div>
                    {teamSizeInputOption}
                </div>
                <ContestantInputRaw numberOfContestants={this.state.numberOfContestants} addAllContestants={this.addContestants} onFinalizedContestants={this.generateTeams} clearOnSubmit='true'></ContestantInputRaw>               
            </div>
            <div class='right-divide'>
                <div class="contestant-count">Contestant Count: {contestants.length}</div>
                <div class='pill-container'>
                    {
                        contestants.map(contestant => {
                            return <ContestantPill key={contestant.id} contestant={contestant} updateContestant={this.updateContestant} removeContestant={this.removeContestant}></ContestantPill>
                        })
                    } 
                </div>

            </div>

        </div>

        <TeamDisplay teams={this.state.teams}></TeamDisplay>
      </div>
    );
  }
}

export default FullSetupMode;
