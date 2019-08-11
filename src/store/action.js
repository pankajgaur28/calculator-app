export const SUBTRACT = 'SUBTRACT';
export const ADD = 'ADD';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const SET_VAL1 = 'SET_VAL1';
export const SET_VAL2 = 'SET_VAL2';

//action to set the value of both the input field for calculator
export const setValue = (val,field)=>{
    return{
        type : field,
        val : val
    }
}

//action to initiate operation like add/subtract
export const performOperation = (operation)=>{
    return {
        type : operation
    }
}