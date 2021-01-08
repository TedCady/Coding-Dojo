import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password};
        console.log("Welcome", firstName, lastName, email, password, confirmPW)
    };

    return(
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>                
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>                
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>                
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e)=>setPassword(e.target.value)}/>                
                </div>
                <div>
                    <label>Confirm PW: </label>
                    <input type="text" onChange={(e)=>setConfirmPW(e.target.value)}/>                
                </div>
                <input type="submit" value="Submit"/>    
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm PW: {confirmPW}</p>                                            
            </form>

        </div>
    )
}

export default UserForm;