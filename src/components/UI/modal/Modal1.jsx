import React from 'react';
import cl from './Modal1.module.css'
const Modal1 = ({children, visibile, setVisible}) => {

    const rootClasses = [cl.Modal1]

    // if (visibile) {
    //     rootClasses.push(cl.active);
    // }

    return (    
        <div className={rootClasses.join(' ')}>
            <div className={cl.modal1Content}>
                {children}
            </div>
        </div>
    );
};

export default Modal1;