import '../css/login_page.css'
import Button from '../UI/Blackbutton/BlackButton';
import InputField from '../UI/InputField/InputFiels';
import InputFieldForm from '../UI/InputFieldForm/InputFieldForm';
import Logotype from '../UI/Logotype/Logotype';
import TransparentButton from '../UI/transparentButton/TransparentButton';
const Login = () =>{

    return(
        <div className="login-wrapper">
            <div className="login-logotype">
                <Logotype />
            </ div>
            <div className="login-background"></div>
            <div className="login-container">
                <h1>Welcome Back</h1>
                <form action="post" className="form">
                    <div className="form__inputFields">
                        <section>
                            <label htmlFor="email">Email</label> 
                            <InputFieldForm type="text" name='email' placeholder="Email"/>
                        </section>
                        <br />
                        <section>
                            <label htmlFor="password">Password</label> 
                            <InputFieldForm type="password" name='Password' placeholder="Password"/>
                        </section>
                    </div>
                    <div className="form__additionalFeatures">
                        <section>
                            <label htmlFor="checkbox">Remember me</label> 
                            <input type="checkbox" />
                        </section>
                        <a href="#"><span>Forgot password</span></a>
                    </div>
                    <div className="form__buttonsBlock">
                        <Button>Sign in</Button>
                        <p>or</p>
                        <TransparentButton>Sign in with Google</TransparentButton>
                    </div>
                </form>
                <span>Don't fave an account? <a href='/signUp'>Sign up here</a></span>
            </div>
            <footer className="login-footer">
                <section className='footer_media'>
                    <a href="#"><span>wish_meditate</span></a>
                    <a href="#"><span>wish_meditate</span></a>
                </section>
                <section className='footer_signUp'>
                    <a href="#"><span>wish_meditate</span></a>
                </section>
            </footer>
        </div>
        

    );

}

export default Login;
