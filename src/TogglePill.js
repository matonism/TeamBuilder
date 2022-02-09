import React from "react";
import './TogglePill.css';

class TogglePill extends React.Component {

  constructor(props){
    super(props);
    let markedSelected = false;
    let optionObjects = this.props.options.map((option, index) => {
        let optionObject = {label: option, selected: false};
        if(option === this.props.value){
            optionObject.selected = true;
            markedSelected = true;
        }
        return optionObject;
    });
    
    if(!markedSelected){
        optionObjects[0].selected = true;
    }
    // let optionObjects = this.props.options.map((option, index) => {
    //     let optionObject = {label: option, selected: false};
    //     if(index === 0){
    //         optionObject.selected = true;
    //     }
    //     return optionObject
    // });

    this.state = {
        options: optionObjects
    };

    this.setSelectedOption = this.setSelectedOption.bind(this);
  }

  setSelectedOption(event){
    let selectedOption = event.target.innerHTML;
    let optionObjects = this.props.options.map((option, index) => {
        let optionObject = {label: option, selected: false};
        if(option === selectedOption){
            optionObject.selected = true;
        }
        return optionObject;
    });

    this.setState({options: optionObjects});
    this.props.setOption(event.target.innerHTML);
  }

  render(){
      
    let elements = [];
    
    let decisionPill = this.state.options.map((option)=>{
        let className = 'pill-option';
        if(option.selected){
            className += ' selected';
        }
        return (<div class={className}>{option.label}</div>);
    })

    elements.push(
        <div class="toggle-pill-body" onClick={this.setSelectedOption}>
            {decisionPill}
        </div>
    
    );
    return elements;
  }
}

export default TogglePill;