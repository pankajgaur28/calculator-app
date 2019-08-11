import React from 'react';
import Button from './Button';
import * as actionCreators from '../store/action';
import {connect} from 'react-redux';


function BtnContainer(props) {
    function btnClick(event){
        props.performOperation(event.currentTarget.getAttribute("operation"));
    }
    /**
     * creating button json array to create element in loop
     * label : text to be shown on button
     * sign : icon
     * operation : to dispactch the respective action.
     */
        
    var btns = [
        {
            label : 'Add',
            sign : "+",
            operation : actionCreators.ADD
        },
        {
            label : 'Substract',
            sign : "-",
            operation : actionCreators.SUBTRACT
        },
        {
            label : 'Multiply',
            sign : "X",
            operation : actionCreators.MULTIPLY
        },
        {
            label : 'Divide',
            sign : "/",
            operation : actionCreators.DIVIDE
        }
    ];
    btns = btns.map((item,index)=>{
        //no deletion ar adition in the list, so can use index as key.
        return (<Button key={index} click={btnClick} operation={item.operation} label={item.label} sign={item.sign}/>)
    })
    var result = props.result.toString();
    return(
        <div className="btn-container">
            <div className="btns">
                {btns}
            </div>
            <div className={"result-section"+ (props.isError?" error":"")+(result.length?' show':' hide')}>
                <span className="label">Result </span><span className="label error">Error </span><span className="result">{props.result}</span>
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        result: state.result,
        isError :state.isError
    }
};

const mapDispatchToProps = dispatch => {
    return {
        performOperation : (operation) => dispatch(actionCreators.performOperation(operation))
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnContainer);