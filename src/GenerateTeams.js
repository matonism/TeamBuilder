import React from "react";
import './GenerateTeams.css';
import TeamDisplay from './TeamDisplay';
import {createTeamSetupObject} from "./TeamSetupObject";
import ContestantList from "./ContestantList";
import ContestantObject from "./ContestantObject";

import addIcon from "./images/add-icon.png";
import generateIcon from "./images/generate-icon.png";
import settingsIcon from "./images/settingsIcon.png";

import SetupPanel from "./SetupPanel";
import AddContestantPanel from "./AddContestantPanel";
import TeamPanel from './TeamPanel';
import Panel from './Panel';

let DEFAULT_GROUP_GENERATOR_MODE = 'Number of Groups';

class GenerateTeams extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            teamSetup: createTeamSetupObject(DEFAULT_GROUP_GENERATOR_MODE, 2, 2, 'Round Up', []),
            contestants: [],
            displaySetup: false,
            displayAddContestant: false,
            displayTeams: false
        };

        this.removeContestant = this.removeContestant.bind(this);
        this.updateContestant = this.updateContestant.bind(this);
        this.addContestants = this.addContestants.bind(this);

        this.closeSettings = this.closeSettings.bind(this);
        this.saveSettings = this.saveSettings.bind(this);
        this.openSettings = this.openSettings.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.getSetupDisplay = this.getSetupDisplay.bind(this);

        this.openContestantPanel = this.openContestantPanel.bind(this);
        this.closeContestantPanel = this.closeContestantPanel.bind(this);

        this.generateTeams = this.generateTeams.bind(this);
        this.closeTeamDisplay = this.closeTeamDisplay.bind(this);
        this.getTeamDisplay = this.getTeamDisplay.bind(this);
        
    }


    addContestants(event, newContestants){
        let currentContestants = this.state.contestants;

        let teamSetup = this.state.teamSetup;
        let nextId = teamSetup.nextId;
        let contestantKeys = Object.keys(newContestants);

        contestantKeys.forEach((key, index) => {
            currentContestants.push(new ContestantObject('contestant-' + nextId, newContestants[key]));
            nextId++;
        });

        this.setState({"contestants": currentContestants});        
        teamSetup.setNextId(nextId);
        this.setState({"teamSetup": teamSetup});
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
        let teamSetup = this.state.teamSetup;
        let contestants = this.sortContestants(this.state.contestants);
        teamSetup.generateTeams(contestants);
        this.setState({"teamSetup": teamSetup});
        this.setState({"displayTeams": true});
    }

    closeTeamDisplay(){
        this.setState({"displayTeams": false});
    }

    sortContestants(contestants){
        return contestants.sort((a, b) => {
            return (a.name <= b.name) ? -1 : 1;
        });
    }


    openSettings(){
        this.setState({"displaySetup": true});
    }

    closeSettings(){
        this.setState({"displaySetup": false});
    }

    saveSettings(teamSetup){
        this.setState({"teamSetup": teamSetup});
        this.closeSettings();
    }

    toggleSettings(){
        if(this.state.displaySetup){
            this.closeSettings();
        }else{
            this.openSettings();
        }
    }


    openContestantPanel(){
        this.setState({"displayAddContestant": true});
    }

    closeContestantPanel(){
        this.setState({"displayAddContestant": false});
    }

    getSetupDisplay(){
        let panelContent = (<SetupPanel teamSetup={this.state.teamSetup} saveSettings={this.saveSettings} closePanel={this.closeSettings}></SetupPanel>)
        if(this.state.displaySetup){
            return (<Panel headerText="Setup" content={panelContent} closePanel={this.closeSettings} ></Panel>)
        }else{
            return (<div></div>);
        }
    }

    getAddContestantDisplay(){
        let panelContent = (<AddContestantPanel quickAddContestants={this.addContestants} closePanel={this.closeContestantPanel} ></AddContestantPanel>)
        if(this.state.displayAddContestant){
            return (<Panel headerText="Add Contestants" content={panelContent} closePanel={this.closeContestantPanel} ></Panel>)
        }else{
            return (<div></div>);
        }
    }

    getTeamDisplay(){
        let panelContent = (<TeamPanel teams={this.state.teamSetup.teams}></TeamPanel>);
        if(this.state.displayTeams){
            return (<Panel headerText="Groups" content={panelContent} closePanel={this.closeTeamDisplay} ></Panel>)
        }else{
            return (<div></div>);
        }
    }



  render(){
    return (
        <div>
            {this.getSetupDisplay()}
            {this.getAddContestantDisplay()}
            {this.getTeamDisplay()}

            <div class="header">
                <div class="masthead"></div>
                <div class="actions">
                    <div class="generate-icon-container"><img class="generate-icon" src={generateIcon} onClick={this.generateTeams}></img></div>
                    <div class="add-icon-container"><img class="add-icon" src={addIcon} onClick={this.openContestantPanel}></img></div>
                    <div class="settings-icon-container"><img class="settings-icon" src={settingsIcon} onClick={this.toggleSettings}></img></div>
                </div>
            </div>
            <div class="contestant-section">
                <ContestantList contestants={this.state.contestants} removeContestant={this.removeContestant} updateContestant={this.updateContestant} teamSetup={this.state.teamSetup}></ContestantList>
            </div>
            <div class="footer">
                
            </div>
        </div>
    );
    
  }
}

export default GenerateTeams;
