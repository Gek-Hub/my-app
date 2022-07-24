import React from 'react';
import classes from './Input1.module.css'

const Input1 = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.input1} {...props}/>
    );
});

export default Input1;