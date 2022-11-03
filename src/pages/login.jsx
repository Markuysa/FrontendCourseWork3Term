import '../css/login_page.css'
import Button from '../UI/Blackbutton/BlackButton';
import InputField from '../UI/InputField/InputFiels';
import WhiteButton from '../UI/whiteButton/WhiteButton';
const Login = () =>{

    return(
        <div className="l_wrapper">
            {/* <div class="container">
                    <svg viewBox="0 0 500 500"
                        preserveAspectRatio="xMinYMin meet">
                        <path d="M0, -900 C150, 900 350,
                            0 500, 900 L500, 00 L0, 0 Z"
                        >
                        </path>
                    </svg>
                </div> */}
            <div className="login_wrapper">
                <h1>Welcome <br/> Back</h1>
                <form action="post" className="form">
                    <div className="input_fields">
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
                    <div className="additional_features">
                        <section>
                            <label htmlFor="checkbox">Remember me</label> 
                            <input type="checkbox" />
                        </section>
                        <a href="#"><span>Forgot password</span></a>
                    </div>
                    <div className="buttons_block">
                        <Button>Sign in</Button>
                        <p>or</p>
                        <WhiteButton>Sign in with Google</WhiteButton>
                    </div>
                </form>
            </div>
            <footer className="footer">
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
