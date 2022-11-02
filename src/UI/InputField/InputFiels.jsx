import classes from './InputStyles.module.css'

const InputField= (props) => {
    
    return (
        // <input type = {props.type} class={classes.input} placeholder={props.placeholder}/>
        <input {...props} className={classes.input_field}/>
    );

}

export default InputField;