import React from 'react';
import classes from './Butt1.module.css'
const Butt1 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn1}>
            {children}
        </button>
    );
};

export default Butt1;