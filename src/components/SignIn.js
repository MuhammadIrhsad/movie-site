import logo from '../Assets/logo.jpg'
import { Cred } from '../Credential'
import {useState} from 'react'
const SignIn = (Prop) => {
    
    const [myEmail, setmyEmail] = useState('');
    const [myPassword, setmyPassword] = useState('');
    const RemoveProperty = (e) => {
        e.preventDefault();
        alert(`The name you entered was: ${myEmail} and ${Cred[0].email}`);
        if (Cred[0].email === myEmail && Cred[0].password === myPassword) {
            alert(
                'matched'
            )
            Prop.ChangeLogIn();
        }
        else {
            alert('Invalid')
        }
        // setmyEmail('');
        setmyPassword('');

    }
    const emailChange = (event) => {
        const value = event.target.value;
        setmyEmail(value);
    }
    const passwordChange = (event) => {
        const value = event.target.value;
        setmyPassword(value);
    }
    return <>
        <div className="form-container  d-flex align-items-center justify-content-center">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-6">
                    
                    <form className='border' onSubmit={RemoveProperty}>
                        <div className="imgcontainer">
                            <img src={logo} alt="Avatar" className="avatar" />
                        </div>
                        <div className="container">
                            <label htmlFor="email"><b>Email</b></label>
                            <input type="email" value={myEmail} onChange={emailChange} placeholder="Enter Username" name="email" required />
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" value={myPassword} onChange={passwordChange} placeholder="Enter Password" name="psw" required />
                            <button className='mx-auto my-5  text-center btn btn-primary rounded' onClick={Prop.ChangeLog} >Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </>
}
export default SignIn