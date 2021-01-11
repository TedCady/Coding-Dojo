import React, { useReducer } from 'react';
 
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    },    
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    function fnVal(e){
        const { firstName, value, error } = e.target;
        if(value.length < 3){
            state.firstName.error = "Min 3 chars required";
        }
        else{
            state.firstName.error = null;
        }
        dispatch({
            type: firstName,
            payload: [value, error]
        })
    }

    function lnVal(e){
        const { lastName, value, error } = e.target;
        if(value.length < 3){
            state.lastName.error = "Min 3 chars required";
        }
        else{
            state.lastName.error = null;
        }
        dispatch({
            type: lastName,
            payload: [value, error]
        })
    }

    function emVal(e) {
        const { email, value, error } = e.target;            
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value))){
            state.email.error = "Invalid email";
        }
        else{
            state.email.error = null;            
        }
        dispatch({
            type: email,
            payload: [value, error]
        })        
    }

    return (
        <div>
            <div>
                First Name: <input onBlur={fnVal}/>
                {state.firstName.error ? <span style={{color:'red'}}>{state.firstName.error}</span>: ''}
            </div>
            <div>
                Last Name: <input onBlur={lnVal}/>
                {state.lastName.error ? <span style={{color:'red'}}>{state.lastName.error}</span>: ''}
            </div>
            <div>
                Email: <input onBlur={emVal}/>
                {state.email.error ? <span style={{color:'red'}}>{state.email.error}</span>: ''} 
            </div>                           
        </div>
    );

}