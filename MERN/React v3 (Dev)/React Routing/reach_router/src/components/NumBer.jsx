import React from 'react';

const numBer = props => {
    var msg = '';
    isNaN(+props.num) ? msg=`The word is ${props.num}` : msg=`The number is ${props.num}`
    return(
        <div style={{padding: '100px'}}>            
            <b>{msg}</b>
        </div>
    )
}

export default numBer;