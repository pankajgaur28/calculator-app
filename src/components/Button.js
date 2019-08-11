import React from 'react';

function Button(props) {

    return(
        <div className="btn" onClick={props.click} key="hell" operation={props.operation}>
            <div className="sign">{props.sign}</div>
            <div className="label">{props.label}</div>
        </div>
    )
}

export default Button;