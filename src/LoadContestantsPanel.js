import React from "react";
import './LoadContestantsPanel.css';
import InputBox from './InputBox';
import {getSavedGroups, addSavedGroup} from './StorageHelper_SaveContestants';

class LoadContestantsPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            savedGroupsToDisplay: getSavedGroups()
        };
        
        this.loadContestants = this.loadContestants.bind(this);
        this.closePanel = this.closePanel.bind(this);
        this.getGroupsDisplay = this.getGroupsDisplay.bind(this);
        
    }

    loadContestants(event){
        let clickedGroup = event.currentTarget.id;
        let contestants = this.state.savedGroupsToDisplay[clickedGroup];
        this.props.loadContestants(contestants);
        
        //Show some save message
        this.closePanel();
        //Save in the following format
        // name:[
        //     {contestant},
        //     {contestant}
        // ]
    }

    closePanel(){
        this.props.closePanel();
    }

    getGroupsDisplay(){
        if(!this.state.savedGroupsToDisplay){
            return (<div>You have no saved groups</div>);
        }
        let groupsToDisplay = this.state.savedGroupsToDisplay;

        let display = Object.keys(groupsToDisplay).map(groupName => {
            let groupSize = groupsToDisplay[groupName].length;
            return (<div key={groupName} id={groupName} className="selectable-group" onClick={this.loadContestants}>
                <div class="selectable-group-name">
                    {groupName}
                </div>
                <div className="selectable-group-count">{groupSize}</div>
            </div>);
        });
        return display;
    }

  render(){
    return (
        <div className="setting-container">
            {this.getGroupsDisplay()}
     
            <div class="panel-button-container">
                {/* <button label='save-contestants' class='standout-button' onClick={this.saveContestants}>Save</button> */}
                <button label='cancel-settings' class='cancel-button' onClick={this.closePanel}>Cancel</button>
            </div>
        </div>
            
    );
  }
}

export default LoadContestantsPanel;
