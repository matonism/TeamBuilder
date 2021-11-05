import React from "react";
import InputBox from './InputBox'

class ContestantInputGenerator extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let combinedHTML = [];
        for(let i = 0; i < this.props.numberOfContestants; i++){
            combinedHTML[i] = (<InputBox name={i} placeholder="Contestant Name..." class="contestant-box"></InputBox>);
        }
        return combinedHTML;
    }
}

export default ContestantInputGenerator;