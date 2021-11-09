import React from "react";
import './ContestantPill.css';

class ContestantPill extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };

    this.removeContestant = this.removeContestant.bind(this);
    this.updateContestant = this.updateContestant.bind(this);
  }

  removeContestant(){
    this.props.removeContestant(this.props.contestant)
  }

  updateContestant(){
    this.props.updateContestant(this.props.contestant);
  }


  render(){
    let elements = [];
    elements.push(
      <div class="pill-body">
        <button label='update' class='update-button' onClick={this.updateContestant}>+</button>
        <div class="pill-contents">
            <div class='name-text'>{this.props.contestant.name}</div>
            {
                Object.keys(this.props.contestant).map(detail => {
                    if(detail === 'id' || detail === 'name'){
                        return '';
                    }else if(this.props.contestant[detail] !== ''){ 
                        let detailType = '';
                        if(detail === 'teamPreference'){
                            detailType = 'Team Preference';
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
