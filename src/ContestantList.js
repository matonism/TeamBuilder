import React from "react";
import './ContestantList.css';
import ContestantPill from './ContestantPill';

let GENERATOR_MODE_PLAYERS_PER_GROUP = 'Players per Group';
let GENERATOR_MODE_NUMBER_OF_GROUPS = 'Number of Groups';
let GENERATOR_MODE_SCHEDULER = 'Scheduler';
let PLAYERS_PER_TEAM_OPTIONS = ['Round Up', 'Round Down', 'Odd Man Out'];

class ContestantList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            orderedContestants: this.props.contestants.sort((a,b) => {
                if(a.name < b.name){
                    return -1
                }else{
                    return 1;
                }
            })
        };       
    }

    displayInfoHud(){
        let elements = [(<div class="contestant-count"># of Players: {this.props.contestants.length}</div>)];
        if(this.props.teamSetup.generatorMode == GENERATOR_MODE_NUMBER_OF_GROUPS){
            elements.push((<div class="contestant-count"># of Groups: {this.props.teamSetup.numberOfTeams}</div>));

        }else if(this.props.teamSetup.generatorMode == GENERATOR_MODE_PLAYERS_PER_GROUP){
            elements.push(<div class="contestant-count">Players per Group: {this.props.teamSetup.playersPerTeam}</div>);
            elements.push(<div class="contestant-count">Handle Excess: {this.props.teamSetup.playersPerTeamOption}</div>);

        }
        return elements;
    }

    render(){

        return (
        <div className="ContestantList" class="contestant-container"> 
            <div class="hud-settings">
                {this.displayInfoHud()}
            </div>
            <div class='pill-container'>
                {
                    this.props.contestants.map(contestant => {
                        return <ContestantPill key={contestant.id} contestant={contestant} updateContestant={this.props.updateContestant} removeContestant={this.props.removeContestant}></ContestantPill>
                    })
                } 
            </div>
        </div>
        );
    }
}

export default ContestantList;
