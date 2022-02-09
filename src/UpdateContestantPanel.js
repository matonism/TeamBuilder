import React from "react";
import './UpdateContestantPanel.css';
import InputBox from './InputBox';
import cancelIcon from './images/cancel-icon.png';


class UpdateContestantPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            teamPreference: 0,
            ranking: 0
        };
        
        this.setName = this.setName.bind(this);
        this.setTeamPreference = this.setTeamPreference.bind(this);
        this.setRanking = this.setRanking.bind(this);
        this.addContestants = this.addContestants.bind(this);
        this.closePanel = this.closePanel.bind(this);
        
    }

    setName(event){
        this.setState({'name': event.target.value});
    }

    setTeamPreference(event){
        this.setState({'teamPreference': event.target.value});
    }

    setRanking(event){
        this.setState({'ranking': event.target.value});
    }

    addContestants(event){
        let contestantRecord = {};
        contestantRecord[this.state.name] = this.state.name;
        this.props.addContestants(event, contestantRecord);
        this.props.closePanel();
    }

    closePanel(){
        this.props.closePanel();
    }


    render(){
        return (
            <div>
                                <ContestantInputRaw numberOfContestants={this.state.teamSetup.numberOfContestants} addAllContestants={this.addContestants} onFinalizedContestants={this.generateTeams} clearOnSubmit='true'></ContestantInputRaw>               

                <div class="input-container">
                    Name
                    <InputBox name='name' placeholder='Name...' class='styled-input' value={this.state.name} valueChangedCallback={this.setName}></InputBox>
                </div>
                <div class="input-container">
                    Group Preference
                    <InputBox name='teamPreference' placeholder='Group Preference' type="number" class='styled-input' value={this.state.teamPreference} valueChangedCallback={this.setTeamPreference}></InputBox>
                </div>
                <div class="input-container">
                    Ranking
                    <InputBox name='ranking' placeholder='Ranking' class='styled-input' type="number" value={this.state.ranking} valueChangedCallback={this.setRanking}></InputBox>
                </div>
                <div class="panel-button-container">
                    <button label='save-settings' class='standout-button' onClick={this.addContestants}>Add Contestant</button>
                    <button label='cancel-settings' class='cancel-button' onClick={this.closePanel}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default UpdateContestantPanel;
