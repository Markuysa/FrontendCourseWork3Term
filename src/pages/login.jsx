import '../css/login_page.css'
import Button from '../UI/Blackbutton/BlackButton';
import InputField from '../UI/InputField/InputFiels';
import WhiteButton from '../UI/whiteButton/WhiteButton';
const Login = () =>{

    return(
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


    );

}

export default Login;
