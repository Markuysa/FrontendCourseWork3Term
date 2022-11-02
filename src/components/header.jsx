import { Component } from 'react';
import '../css/header.css'
const HeaderMain = () => {
    return (
        <header className="header">
            <div className="header_logo">
                <p>WISH</p>
            </div>
            <div className="header_options_list">
                <ul className="options_list">
                    <a href='#'><li className="options_list_item">Meditate</li></a>
                    <a href='#'><li className="options_list_item">About us</li></a>
                    <a href='#'><li className="options_list_item">Blog</li></a>
                </ul>
            </div>
            <div className="header_account">
                <a><span className="icon">Account</span></a>
            </div>
        </header>
    );

}
export default HeaderMain;