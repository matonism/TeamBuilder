import React from "react";
import './AddContestantPanel.css';
import ContestantInputRaw from "./ContestantInputRaw";


class AddContestantPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            teamPreference: 0,
            ranking: 0
        };

        this.addContestants = this.addContestants.bind(this);
        this.closePanel = this.closePanel.bind(this);
        
    }

    closePanel(){
        this.props.closePanel();
    }

    addContestants(event, newContestants){
        this.props.quickAddContestants(event, newContestants);
    }

    render(){
        return (
            <div>
                <div class="contestant-input-container">
                    <ContestantInputRaw addAllContestants={this.addContestants} clearOnSubmit='true'></ContestantInputRaw> 
                </div>              
                
                <div class="panel-button-container">
                    <button label='cancel-settings' class='cancel-button' onClick={this.closePanel}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default AddContestantPanel;
