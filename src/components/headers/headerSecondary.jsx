
import { Collapse } from "bootstrap";
import { useEffect } from "react";
import "../../css/headerSecondary.css"
import BurgerButton from "../../UI/BurgerButton/burgerButton";
import InputField from "../../UI/InputField/InputFiels";
import Logotype from "../../UI/Logotype/Logotype";
import SearchField from "../../UI/SearchField/searchField";
import MeditationsList from "../meditationComponents/meditationsList";


const HeaderSecondary = ()=>{

    useEffect(() => {
        let burgerButton = document.querySelector('.burgerButtonStyles_burger__icon__ronxw')    
        let menu = document.querySelector('.header-secondary__navigation__list_hidden')
        const onBurgerClick = ()=>{
            menu.style.transform="translateY(0)"
        }
        let close_button = document.querySelector('.close_button')
        const onCloseClick = ()=>{
            menu.style.transform="translateY(-100%)"
        }
        burgerButton.addEventListener('click',onBurgerClick)
        close_button.addEventListener('click',onCloseClick)

        // if (burgerButton.style.visibility=="collapse")
        const style = window.getComputedStyle(burgerButton)
        const visibility = style.getPropertyValue('visibility');
        if (visibility=="collapse"){
            menu.style.transform="translateY(-100%)"
        }
      });
    return (
        <div className="header-secondary__wrapper">
            <div className="header-secondary__content">
                <div className="header-secondary__main_nav">
                    <nav className="header-secondary__navigation">
                        <ul className="header-secondary__navigation__list">
                            <a href="/"><li>To main page</li></a>
                            <a href=""><li>About us</li></a>
                            <a href=""><li>Blog</li></a>
                        </ul>
                    </nav>
                    <div className="secondaryBurger">
                        <BurgerButton />
                    </div>
                    <div className="header-secondary__logotype">
                        <Logotype />
                    </div>
                    <div className="header-secondary__account">
                        <span className="icon">Account</span>
                    </div>
                </div>
            </div>
            <ul className="header-secondary__navigation__list_hidden">
                <a href="/"><li>To main page</li></a>
                <a href=""><li>About us</li></a>
                <a href=""><li>Blog</li></a>
                <span className="close_button">X</span>
            </ul>
        </div>
        

    );

}
export default HeaderSecondary;