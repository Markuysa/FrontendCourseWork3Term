import '../../css/meditation_card.css'
import React from 'react';
const Meditation = (props)=>{
    return(
        <li className="meditation-card-wrapper">
              <a href="#" className="meditation">
                    <div className="meditation-card__image">
                        <img src={props.meditation.img} alt="" />
                    </div>
                    <div className="meditation-card__textContent">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, error aut? Ab error adipisci officiis officia </p>
                        <div className="meditation-card__textContent__readMore">
                            <span className="icon"><a href="">read more</a></span>
                            <span className='textContent__rating'>{props.meditation.rating}</span>
                        </div>
                    </div>
                    <div className="like_button">
                        <div className="content">
                            <img className ="heart" src="/img/icons8-червы-18.png" alt=""></img>
                        </div>
                    </div>
                </a> 
            </li>
        )
}
export default Meditation;