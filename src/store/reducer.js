import * as actionType from './action';

//default state
const INITIAL_STATE = {
    val1 : '',
    val2 : '',
    result : '',
    isError : false
}


var reducer = (state = INITIAL_STATE,action) =>{
    var result = '',
    msg = validateIfBothInputPresent(state),//checking for error in start.
    isError = msg?true:false;
    switch (action.type){
        case actionType.SUBTRACT :
            result = isError?msg:Number(state.val1) - state.val2;
            return {
                ...state,
                result : result,
                isError : isError
            }

        case actionType.ADD :
            result = isError?msg:Number(state.val1) + Number(state.val2);
            return {
                ...state,
                result : result,
                isError : isError
            }

        case actionType.MULTIPLY :
            result = isError?msg:Number(state.val1) * Number(state.val2);
            return {
                ...state,
                result : result,
                isError : isError
            }

        case actionType.DIVIDE :
            if(isError){
                result = msg
            }else if(!Number(state.val2)){//checking for divide by zero case.
                result = "Number can not be divided by ZERO";
                isError = true;
            }else{
                result = state.val1/state.val2;
            }
            return {
                ...state,
                result : result,
                isError : isError
            }

        case actionType.SET_VAL1 :
            return {
                ...state,
                val1 : action.val
            }

        case actionType.SET_VAL2 :
            return {
                ...state,
                val2 : action.val
            }

        default : 
            return state;
    }
}

//checks if both inputs has value.
function validateIfBothInputPresent(state){
    var msg = "";
    if(!state.val1){
        msg = "Please provide value 1"
    }
    if(!state.val2){
        msg += msg.length? "and value 2" : "Please provide value 2"
    }
    return msg;
}

export default reducer;