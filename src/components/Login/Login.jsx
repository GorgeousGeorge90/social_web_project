import {Field, reduxForm} from "redux-form";
import {Input} from "../common /FormControl/FormControl";
import {maxLength, required} from "../common /validators/validators";
import {connect} from "react-redux";
import {logIn, logOut} from "../../redux/authReducer";


const Login =(props)=> {

    const logIn = (formData)=>{
        const {email,password,rememberMe} = formData
         props.logIn(email,password,rememberMe)
    }

    return (
        <div>
            Login
            <ReduxLoginForm onSubmit={logIn}/>
        </div>
    )
}

const LoginForm = (props) => {
    // const maxLength20 = maxLength(20)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name='email' placeholder='Email' validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name='password' placeholder='Password' type='password' validate={[required]}/>
            </div>
            <div>
                <Field component='input' name='Remember me' type='checkbox'/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({form:'login'})(LoginForm)



export default connect(null,{logIn,logOut})(Login)