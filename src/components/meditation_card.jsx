import '../css/meditation_card.css'
import React from 'react';
const Meditation = (props)=>{
    return(
        <li className="meditation-card-wrapper">
            <img className="meditation-card__image" src={props.meditation.img} alt="" />
            <div className="meditation-card__textContent">
                <span className="textContent__title">{props.meditation.title}</span>
                <span className='textContent__rating'>{props.meditation.rating}</span>
            </div>
        </li>
    );
}
export default Meditation;