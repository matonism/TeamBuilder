import React from "react";
import './Panel.css';
import cancelIcon from './images/cancel-icon.png';


class Panel extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        this.closePanel = this.closePanel.bind(this);
    }

    closePanel(){
        this.props.closePanel();
    }

    render(){
        return (
            <div className="Panel" class="panel-background"> 
                <div class="panel"> 

                    <div class="panel-header">
                        <div></div>
                        <div class="header-text">{this.props.headerText}</div>
                        <div class="close-button-container"><img class="close-button" src={cancelIcon} onClick={this.closePanel}></img></div>
                    </div>
                    
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Panel;
