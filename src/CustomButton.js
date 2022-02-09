import React from "react";
import './CustomButton.css';

class CustomButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return (<button label={this.props.label} class={this.props.class} onClick={this.props.onClick}>{this.props.label}</button>);
    }

}

export default CustomButton;