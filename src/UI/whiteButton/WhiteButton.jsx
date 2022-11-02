import React from "react";
import classes from "./WhiteButton_styles.module.css"
const WhiteButton = ({children, ...props})=>{

    return (
        <button {...props} className={classes.button} type="submit"> 
            <span className = {classes.icon}>{children}</span>
        </button>
    );

};

export default WhiteButton;