import React from 'react';

const HelloColors = props => {
    return(
        <div style={{padding: '100px'}}>            
            <b style={{color: `${props.c1}`, backgroundColor: `${props.c2}`, padding: '40px'}}>The word is: hello</b>
        </div>
    )
}

export default HelloColors;