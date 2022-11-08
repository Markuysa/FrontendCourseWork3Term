import React from "react";
import classes from './MeditationsSelect.module.css'

const MeditationsSelect = ({options,defaultValue,value,onChange})=>{
    return(
        <select className={classes.meditations_select_class}
            value= {value}
            onChange= {event => onChange(event.target.value) }
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value} className={classes.optionSelect}>
                    {option.name}
                </option>
            )}
            
        </select>

        //     <div className={classes.select_box}>
        // <div className={classes.select_box__current} tabindex="1">
        //     <div className={classes.select_box__value}><input className={classes.select_box__input} type="radio" id="4" value="5" name="Ben" />
        //         <p className={classes.select_box__input_text}>{defaultValue}</p>
        //     </div><img className={classes.select_box__icon} src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria_hidden="true" />
        // </div>
        // <ul className={classes.select_box__list} value= {value} onChange = {event => onChange(event.target.value)}>
        //     {options.map(option =>
        //         <li key={option.value} value={option.value} className={classes.optionSelect}>
        //             <label className={classes.select_box__option} for={option.id} aria_hidden="aria-hidden">
        //                 {option.name}
        //             </label>
        //         </li>
        //     )}
        // </ul>
    // </div>
    );
};


export default MeditationsSelect;