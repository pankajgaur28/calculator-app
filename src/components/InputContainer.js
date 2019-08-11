import React from 'react';
import Input from './Input';
import * as actionCreators from '../store/action';
import {connect} from 'react-redux';

function InputContainer(props) {
    //set the value of input 1.
    function setVal1(value){
        props.handleInputVal(value,actionCreators.SET_VAL1);
    }
    //set the value of input 2.
    function setVal2(value){
        props.handleInputVal(value,actionCreators.SET_VAL2);
    }
    return(
        <div className="imput-container">
            <Input handleInputVal={setVal1} label="Enter Value 1"/>
            <Input handleInputVal={setVal2} label="Enter Value 2"/>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputVal : (val,field) => dispatch(actionCreators.setValue(val,field))
    }
};

export default connect(null, mapDispatchToProps)(InputContainer);