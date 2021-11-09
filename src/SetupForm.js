import React from "react";

class InputBox extends React.Component {
    constructor(props){
        super(props);
        this.sendValueChangedEvent = this.sendValueChangedEvent.bind(this);
    }

    render(){
        return (<input class={this.props.class} type="text" name={this.props.name} id="search-term" placeholder={this.props.placeholder} autocomplete="off" onKeyUp={this.sendValueChangedEvent}></input>)
    }

    sendValueChangedEvent(event){
        this.props.valueChangedCallback(event);
        // let newValue = event.target.value;
        // let valueChangedEvent = new CustomEvent('valuechange', {
        //     detail: {
        //         value: newValue
        //     }
        // });
        // this.dispatchEvent(valueChangedEvent);
        
    }
}

export default InputBox;