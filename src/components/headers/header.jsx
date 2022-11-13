import { Component, useEffect } from 'react';
import '../../css/header.css'
import BurgerButton from '../../UI/BurgerButton/burgerButton';
import Logotype from '../../UI/Logotype/Logotype';
const HeaderMain = () => {
    const onAccountClick=()=>{
        let counter=0
        let aside = document.querySelector(".header_account__dropdownMenu");
        if (counter%2==0){
            aside.style.visibility = "visible"
            aside.style.opacity = "1"
            aside.style.transition = "1s";
            counter++
        }
        else {
            aside.style.visibility = "collapse"
            aside.style.opacity = "0"
            aside.style.transition = "1s";
            counter++
        }
    }
    useEffect(()=>{
        let icon = document.querySelector(".icon")
        icon.addEventListener('click',onAccountClick);
    })
    useEffect(() => {
        let burgerButton = document.querySelector('.mainHeaderBurger')    
        let menu = document.querySelector('.header__navigation__list_hidden')
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
        <div className="headerWrapper">
            <header className="header">
                <div className="header_logo">
                    <p>WISH</p>
                </div>
                <div className="header_options_list">
                    <ul className="options_list">
                        <a href='/meditations'><li className="options_list_item">Meditate</li></a>
                        <a href='/errorPage'><li className="options_list_item">About us</li></a>
                        <a href='/errorPage'><li className="options_list_item">Blog</li></a>
                    </ul>
                </div>
                <div className="mainHeaderBurger">
                    <BurgerButton />
                </div>
                <div className="hiddenLogotype">
                    <p>WISH</p>
                </div>
                <div>
                <div className="header_account_drop">
                    <div className="header_account">
                        <span className="icon" onClick={onAccountClick}>Account</span>
                    </div>
                </div>
                    <div className="header_account__dropdownMenu">
                        <div><p>Signed in as <a href="">Markuysa</a></p></div>
                        <ul>
                            <li>Your profile</li>
                            <li>Your meditations</li>
                            <li>Upgrade Pro</li>
                            <li>Sign out</li>
                        </ul>
                    </div>
                </div>
            </header>
            <ul className="header__navigation__list_hidden">
                <a href="/meditations"><li>Meditate</li></a>
                <a href=""><li>About us</li></a>
                <a href=""><li>Blog</li></a>
                <span className="close_button">X</span>
            </ul>
        </div>
    );

}
export default HeaderMain;