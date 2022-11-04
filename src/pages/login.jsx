import '../css/login_page.css'
import Button from '../UI/Blackbutton/BlackButton';
import InputField from '../UI/InputField/InputFiels';
import WhiteButton from '../UI/whiteButton/WhiteButton';
const Login = () =>{

    return(
        <div className="login-wrapper">
            <div className="login-container">
                <h1>Welcome <br/> Back</h1>
                <form action="post" className="form">
                    <div className="form__inputFields">
                        <section>
                            <label htmlFor="email">Email</label> 
                            <InputField type="text" name='email' placeholder="Email"/>
                        </section>
                        <br />
                        <section>
                            <label htmlFor="password">Password</label> 
                            <InputField type="password" name='Password' placeholder="Password"/>
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
                        <WhiteButton>Sign in with Google</WhiteButton>
                    </div>
                </form>
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
