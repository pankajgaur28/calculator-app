import React, {Component} from 'react';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
     }

     onInputChange = (event) => {
        var value = event.target.value || "";
        value = value.replace(/[^0-9.]/g,"");//remove non digit and non dot values
        if(value.indexOf('.') !== value.lastIndexOf(".")){//handling for more the one dot
            value = parseFloat(value);
        }
        this.setState({value: value});
        this.props.handleInputVal(value);
     }

     render(){
         return(
             <div className="floating-label">      
                 <input className="floating-input" type="text" maxLength="10" placeholder=" " onChange={this.onInputChange} value={this.state.value} />
                 <label>{this.props.label}</label>
             </div>
         )
     }
}

export default Input;