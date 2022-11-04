import '../css/meditation_card.css'
import React from 'react';
const Meditation = (props)=>{
    return(
        <li className="meditation-card-wrapper">
            <span className="meditation-card__title">{props.meditation.title}</span>
            <img className="meditation-card__image" src={props.meditation.img} alt="" />
            <span className='meditation-card__rating'>{props.meditation.rating}</span>
        </li>
    );
}
export default Meditation;