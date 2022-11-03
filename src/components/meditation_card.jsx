import '../css/meditation_card.css'
import React from 'react';
const Meditation = (props)=>{
    let path = "../img/meditation_image.png"
    return(
        <div className="card_wrapper">
            <div className="card">
                <div className="card_image">
                    <img src={require("../img/meditation_image.png")} alt="" />
                </div>
                <div className="card_title">
                    <h2>{props.meditation.title}</h2>
                </div>
                <div className="fav_button">
                    
                </div>
            </div>
        </div>
    );
}
export default Meditation;