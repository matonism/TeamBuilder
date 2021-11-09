import React from "react";
import InputBox from './InputBox'
import "./ContestantInputGenerator.css"

class ContestantInputGenerator extends React.Component {
    constructor(props){
        super(props);
        this.state = {contestantNames : {}};
        this.saveContestantName = this.saveContestantName.bind(this);
        this.addContestant = this.addContestant.bind(this);
        this.removeContestant = this.removeContestant.bind(this);
        this.finalizeContestants = this.finalizeContestants.bind(this);
    }

    render(){
        let combinedHTML = [];
        for(let i = 0; i < this.props.numberOfContestants; i++){
            let contestantName = 'Contestant-' + i;
            combinedHTML[i] = (<InputBox name={contestantName} placeholder="Contestant Name..." class="contestant-box" valueChangedCallback={this.saveContestantName}></InputBox>);
        }
        combinedHTML.unshift(
            (<div>
                <button label='Add' class='add-button' onClick={this.addContestant}>Add</button>)
                <button label='Remove' class='remove-button' onClick={this.removeContestant}>Remove</button>)
            </div>)
        );
        combinedHTML.push((<div><button label='submit' class='submit-button' onClick={this.finalizeContestants}>Generate Teams</button></div>));
        return combinedHTML;
    }

    saveContestantName(event){
        let currentContestants = this.state.contestantNames;
        currentContestants[event.target.name] = event.target.value;
        this.setState({'contestantNames': currentContestants});
    }

    addContestant(event){
        this.props.updateNumberOfContestants(parseInt(this.props.numberOfContestants) + 1);
    }

    removeContestant(event){
        this.props.updateNumberOfContestants(parseInt(this.props.numberOfContestants) - 1);
    }

    finalizeContestants(event){
        this.props.onFinalizedContestants(event, this.state.contestantNames);
    }

    
}

export default ContestantInputGenerator;