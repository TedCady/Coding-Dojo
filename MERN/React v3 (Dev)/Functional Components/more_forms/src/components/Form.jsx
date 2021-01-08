import React, {useState} from 'react';

const Form = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");

    const valFN = () => {
        if(firstName.length < 2){return "First name must be at least 2 characters";}
        else{return "";}
    }
    const valLN = () => {
        if(lastName.length < 2){return "Last name must be at least 2 characters";}
        else{return "";}        
    }
    const valEm = () => {
        if(email.length < 2){return "Email must be at least 2 characters";}
        else{return "";}        
    }
    const valPWLen = () => {
        if(password.length < 8){return "Password must be at least 8 characters";}
        else{return "";}        
    }
    const valPWMatch = () => {
        if(password != confirmPW){return "Passwords must match";}
        else{return "";}        
    }  
    return(
        <div>
            <table>
                <tr>
                    <td>
                        First Name:
                    </td>
                    <td>
                        <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </td>    
                    <td>{valFN()}</td>
                </tr>
                <tr>
                    <td>
                        Last Name:
                    </td>
                    <td>
                        <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                    </td>
                    <td>{valLN()}</td>
                </tr>
                <tr>
                    <td>
                        Email:
                    </td>
                    <td>
                        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </td>
                    <td>{valEm()}</td>
                </tr>
                <tr>
                    <td>
                        Password:
                    </td>
                    <td>
                        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </td>
                    <td>{valPWLen()}</td>
                </tr>
                <tr>
                    <td>
                        Confirm PW:
                    </td>
                    <td>
                        <input type="text" value={confirmPW} onChange={(e)=>{setConfirmPW(e.target.value)}}/>
                    </td>
                    <td>{valPWMatch()}</td>
                </tr>                                                               
            </table>
        </div>
    )
}
export default Form;