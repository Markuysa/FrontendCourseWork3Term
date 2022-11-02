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
                    <li className="options_list_item">Equipment</li>
                    <li className="options_list_item">About us</li>
                    <li className="options_list_item">Blog</li>
                </ul>
            </div>
            <div className="header_account">
                <span className="icon">Account</span>
            </div>
        </header>
    );

}
export default HeaderMain;