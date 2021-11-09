import React from "react";
import './ContestantInputRaw.css';

class ContestantInputRaw extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rawContestantNames : '',
            contestantNames : {},
            contestantCount: 0
        };
        this.saveContestantName = this.saveContestantName.bind(this);
        this.addAllContestants = this.addAllContestants.bind(this);
        this.finalizeContestants = this.finalizeContestants.bind(this);
    }

    render(){

        // let contestantCountText = 'Contestant Count: ' + this.state.contestantCount;
        let combinedHTML = [
            (
            <div>
                <div class="contestant-count">Type names separated by new lines</div>
                <textarea name="contestant-names" value={this.state.rawContestantNames} class="contestant-box" placeholder="Contestant Names separated by space..." rows="8" cols="50" onChange={this.saveContestantName}></textarea>
            </div>
            )
        ];

        let addButton = '';
        if(this.props.addAllContestants){
            addButton = (<button label='add-all-contestants' class='submit-button' onClick={this.addAllContestants}>Add Contestants</button>)
        }

        let buttons = (
            <div class="submit-button-container">
                {addButton}
                <button label='submit' class='submit-button' onClick={this.finalizeContestants}>Generate Teams</button>
            </div>
        )

        combinedHTML.push(buttons);
        return combinedHTML;
    }

    saveContestantName(event){
        this.setState({rawContestantNames: event.target.value});
        let currentContestants = event.target.value.split("\n");
        let objectContestants = {};
        currentContestants.forEach((contestant, index) => {
            if(contestant !== ''){
                objectContestants['contestant' + index] = contestant;
            }
        });
        this.setState({
            'contestantNames': objectContestants,
            'contestantCount': Object.keys(objectContestants).length
        });
    }

    addAllContestants(event){
        this.props.addAllContestants(event, this.state.contestantNames);
        if(this.props.clearOnSubmit){
            this.setState({rawContestantNames: ''});
            this.setState({contestantNames: {}});
        }
    }

    finalizeContestants(event){
        this.props.onFinalizedContestants(event, this.state.contestantNames);
    }

    
}

export default ContestantInputRaw;