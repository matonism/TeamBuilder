import React from "react";
import InputBox from './InputBox'
import './ContestantCount.css'

class ContestantCount extends React.Component {
    constructor(props){
        super(props);
        this.state = {numberOfContestants: this.props.numberOfContestants}
        this.setNumberOfContestants = this.setNumberOfContestants.bind(this);
        this.captureNumberOfContestants = this.captureNumberOfContestants.bind(this);
    }

    render(){
        return (
            <div>
                <InputBox name='numberOfContestants' placeholder='# of Contestants..' class='styled-input' type='number' value={this.props.numberOfContestants} valueChangedCallback={this.captureNumberOfContestants}></InputBox>
                <button label='submit' class='count-button' onClick={this.setNumberOfContestants}>submit</button>
            </div>
        )
    }

    captureNumberOfContestants(event){
        this.setState({'numberOfContestants': event.target.value });
    }

    setNumberOfContestants(){
        if(this.props.onsubmit){
            this.props.onsubmit(this.state['numberOfContestants']);
        }
    }
}

export default ContestantCount;