import React from "react";
import './InputBox.css';

class InputBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            type: this.props.type ? this.props.type : 'text'
        };
        this.valueChangedCallback = this.valueChangedCallback.bind(this);
    }

    render(){
        return (<input class={this.props.class} type={this.state.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} value={this.state.value} autocomplete="off" onChange={this.valueChangedCallback}></input>)
    }

    valueChangedCallback(event){
        this.setState({value: event.target.value});
        if(this.props.valueChangedCallback){
            this.props.valueChangedCallback(event);
        }
        
    }
}

export default InputBox;