import React from "react";
import './SaveContestantsPanel.css';
import InputBox from './InputBox';
import {getSavedGroups, addSavedGroup} from './StorageHelper_SaveContestants';

class SaveContestantsPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            groupName: ''
        };
        
        this.saveContestants = this.saveContestants.bind(this);
        this.setContestantGroupName = this.setContestantGroupName.bind(this);
        this.closePanel = this.closePanel.bind(this);
        
    }

    setContestantGroupName(event){
        let groupName = event.target.value;
        this.setState({groupName: groupName});
    }

    saveContestants(){
        let savedGroups = getSavedGroups();
        if(savedGroups){
            if(savedGroups[this.state.groupName]){
                console.log('this group already exists');
                return;
            }
        }

        addSavedGroup(this.state.groupName, this.props.contestants);
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


  render(){


    return (
        <div className="setting-container">
            <div class="save-group-input">
                <div class="label-text label-with-pad">Name this Group</div>
                <InputBox name='groupName' placeholder='Group Name...' class='styled-input' value={this.state.groupName} valueChangedCallback={this.setContestantGroupName}></InputBox>
            </div>
     
            <div class="panel-button-container">
                <button label='save-contestants' class='standout-button' onClick={this.saveContestants}>Save</button>
                {/* <button label='cancel-settings' class='cancel-button' onClick={this.closePanel}>Cancel</button> */}
            </div>
        </div>
            
    );
  }
}

export default SaveContestantsPanel;
