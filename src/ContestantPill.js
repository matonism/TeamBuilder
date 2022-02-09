import React from "react";
import './ContestantPill.css';
import { Popover, Whisper } from 'rsuite';
import CustomButton from "./CustomButton";

class ContestantPill extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };

    this.removeContestant = this.removeContestant.bind(this);
    this.updateContestant = this.updateContestant.bind(this);
    this.openUpdateContestantDialog = this.openUpdateContestantDialog.bind(this);
  }

  removeContestant(){
    this.props.removeContestant(this.props.contestant)
  }

  updateContestant(){
    this.props.updateContestant(this.props.contestant);
  }

  openUpdateContestantDialog(event){

  }


  render(){
    let elements = [];
    elements.push(
      <div class="pill-body">
        <CustomButton label='+' class='update-button' onClick={this.openUpdateContestantDialog}></CustomButton>

        <div class="pill-contents">
            <div class='name-text'>{this.props.contestant.name}</div>
            {
                Object.keys(this.props.contestant).map(detail => {
                    if(detail === 'id' || detail === 'name'){
                        return '';
                    }else if(this.props.contestant[detail] !== ''){ 
                        let detailType = '';
                        if(detail === 'teamPreference'){
                            detailType = 'Group Preference';
                        }else if(detail === 'ranking'){
                            detailType = 'Ranking';
                        }
                        let details = detailType + ': ' + this.props.contestant[detail];
                        return (<div class='contestant-details'>{details}</div>)
                    }else{
                        return '';
                    }
                })
            }
            
        </div>
        <button label='remove' class='remove-button' onClick={this.removeContestant}>x</button>
      </div>
    );
    return elements;
  }
}

export default ContestantPill;
