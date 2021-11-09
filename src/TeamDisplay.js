import React from "react";
import "./TeamDisplay.css";

class TeamDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let elements = [];
        this.props.teams.forEach((team, index) => {
            elements[index] = (
                <div class="team-list"> 
                    <div class='team-title'>Team {index + 1}</div>
                    {team.map(member => {
                        return (<div class='member-name'>{member.name}</div>)
                    })}
                </div>
            )
        });
        return (<div class="team-lists">{elements}</div>);
    }

}

export default TeamDisplay;