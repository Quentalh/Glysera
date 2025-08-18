import CPFField from "./CPFField";
import LoginButton from "./LoginButton";
import PasswordField from "./PasswordField";


function LoginForm(){
    return(
        <div>
            <h2>Login</h2>
            <CPFField/>
            <PasswordField/>
            <LoginButton/>
        </div>
    );

}

export default LoginForm