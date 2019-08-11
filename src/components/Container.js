import React from 'react';
import InputContainer from './InputContainer';
import BtnContainer from './BtnContainer';
/**
 * 
 * @param {*} props main container, hold the complete calculater functionality except header.
 */
function Container(props) {

    return(
        <div className="main-container">
            <InputContainer />
            <BtnContainer />
        </div>
    )
}

export default Container;