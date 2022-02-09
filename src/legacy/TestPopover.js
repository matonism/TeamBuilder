import React from "react";
import './TestPopover.css';

class TestPopover extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            visibile: false
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    render(){
        let refComp = this.props.referenceComponent;
        let location = {top: refComp.heightOfReference, left: refComp.xPosOfReference}; // for bottom left
        let popover = (<div class="popover" style={location}>
            {this.props.content}
        </div>);

        return popover;
    }

    open(){
        this.setState({visible: true});
    }

    close(){
        this.setState({visible: false});
    }
}

  export default TestPopover;