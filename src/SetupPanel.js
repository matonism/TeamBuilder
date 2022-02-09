import React from "react";
import './SetupPanel.css';
import InputBox from './InputBox';
import TogglePill from "./TogglePill";

let GENERATOR_MODE_PLAYERS_PER_GROUP = 'Players per Group';
let GENERATOR_MODE_NUMBER_OF_GROUPS = 'Number of Groups';
let GENERATOR_MODE_SCHEDULER = 'Scheduler';
let PLAYERS_PER_TEAM_OPTIONS = ['Round Up', 'Round Down', 'Odd Man Out'];

class SetupPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            teamSetup: this.props.teamSetup
        };
        
        this.saveSettings = this.saveSettings.bind(this);
        this.closePanel = this.closePanel.bind(this);
        this.setNumberOfTeams = this.setNumberOfTeams.bind(this);
        this.setPlayersPerTeam = this.setPlayersPerTeam.bind(this);
        this.setPlayersPerTeamOption = this.setPlayersPerTeamOption.bind(this);
        this.handleGeneratorModeChange = this.handleGeneratorModeChange.bind(this);
        
    }

    setNumberOfTeams(event){
        let teamSetup = this.state.teamSetup;
        teamSetup.setNumberOfTeams(event.target.value);
        this.setState({'teamSetup': teamSetup});
    }

    setPlayersPerTeam(event){
        let teamSetup = this.state.teamSetup;
        teamSetup.setPlayersPerTeam(event.target.value);
        this.setState({'teamSetup': teamSetup});
    }

    setPlayersPerTeamOption(option){
        let teamSetup = this.state.teamSetup;
        teamSetup.setPlayersPerTeamOption(option);
        this.setState({'teamSetup': teamSetup});
    }

    handleGeneratorModeChange(generatorMode){
        let teamSetup = this.state.teamSetup;
        teamSetup.setGeneratorMode(generatorMode);
        this.setState({'teamSetup': teamSetup});
    }

    saveSettings(){
        this.props.saveSettings(this.state.teamSetup);
    }

    closePanel(){
        this.props.closePanel();
    }


  render(){

    let teamSizeInputOption = (<div class="number-of-teams">
            <div class="label-text">Number of Groups</div>
            <InputBox name='numberOfTeams' placeholder='# of Groups...' class='styled-input' type="number" value={this.state.teamSetup.numberOfTeams} valueChangedCallback={this.setNumberOfTeams}></InputBox>
        </div>
    )

    if(this.state.teamSetup.generatorMode === GENERATOR_MODE_PLAYERS_PER_GROUP){
        teamSizeInputOption = (
            <div class='players-per-team-settings'>
                <div class="players-per-team">
                    <div class="label-text">Players per Team</div>
                    <InputBox name='playersPerTeam' placeholder='Player per Group...' class='styled-input' type="number" value={this.state.teamSetup.playersPerTeam} valueChangedCallback={this.setPlayersPerTeam}></InputBox>
                </div>
                <div class="players-per-team-pill">
                    <TogglePill options={PLAYERS_PER_TEAM_OPTIONS} setOption={this.setPlayersPerTeamOption} value={this.state.teamSetup.playersPerTeamOption}></TogglePill>
                </div>
            </div>
        )
    }

    return (
        <div className="setting-container">
            <div class='setup-input'>
                <div>
                    <div class="team-generator-mode">     
                        <TogglePill options={[GENERATOR_MODE_NUMBER_OF_GROUPS, GENERATOR_MODE_PLAYERS_PER_GROUP]} setOption={this.handleGeneratorModeChange}  value={this.state.teamSetup.generatorMode}></TogglePill>
                    </div>
                    {teamSizeInputOption}
                </div>
            </div>
            <div class="panel-button-container">
                <button label='save-settings' class='standout-button' onClick={this.saveSettings}>Save Settings</button>
                {/* <button label='cancel-settings' class='cancel-button' onClick={this.closePanel}>Cancel</button> */}
            </div>
        </div>
            
    );
  }
}

export default SetupPanel;
