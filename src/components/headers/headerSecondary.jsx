
import "../../css/headerSecondary.css"
import InputField from "../../UI/InputField/InputFiels";
import Logotype from "../../UI/Logotype/Logotype";
import SearchField from "../../UI/SearchField/searchField";
import MeditationsList from "../meditationComponents/meditationsList";


const HeaderSecondary = ()=>{

    return (
        <div className="header-secondary__content">
            <div className="header-secondary__main_nav">
                <nav className="header-secondary__navigation">
                    <ul className="header-secondary__navigation__list">
                        <a href="/"><li>To main page</li></a>
                        <a href=""><li>About us</li></a>
                        <a href=""><li>Blog</li></a>
                    </ul>
                </nav>
                <div className="header-secondary__logotype">
                    <Logotype />
                </div>
                <div className="header-secondary__account">
                    <a><span className="icon">Account</span></a>
                </div>
            </div>
        </div>
        

    );

}
export default HeaderSecondary;