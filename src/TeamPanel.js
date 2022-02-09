import React from "react";
import './TeamPanel.css';
import TeamDisplay from "./TeamDisplay";


class TeamPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
                    
            <TeamDisplay teams={this.props.teams}></TeamDisplay>

        );
    }
}

export default TeamPanel;
