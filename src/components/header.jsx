import { Component } from 'react';
import '../css/header.css'
const HeaderMain = () => {
    const onAccountClick=()=>{

        let aside = document.querySelector(".header_account__asideMenu");
        aside.classList.add('active')
    }
    return (
        <header className="header">
            <div className="header_logo">
                <p>WISH</p>
            </div>
            <div className="header_options_list">
                <ul className="options_list">
                    <a href='/meditations'><li className="options_list_item">Meditate</li></a>
                    <a href='/login'><li className="options_list_item">About us</li></a>
                    <a href='#'><li className="options_list_item">Blog</li></a>
                </ul>
            </div>
            <div className="header_account">
                <a onClick={onAccountClick}><span className="icon">Account</span></a>
                {/* <div className="header_account__dropdownMenu">
                    <div><p>Signed in as <a href="">Markuysa</a></p></div>
                    <ul>
                        <li>Your profile</li>
                        <li>Your meditations</li>
                        <li>Upgrade Pro</li>
                        <li>Sign out</li>
                    </ul>
                </div> */}
            </div>
            <div className="header_account__asideMenu">
                <ul>
                    <li>Your profile</li>
                    <li>Your meditations</li>
                    <li>Upgrade Pro</li>
                    <li>Sign out</li>
                </ul>
            </div>
        </header>
    );

}
export default HeaderMain;