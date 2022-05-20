import React from 'react';
import './Button.css';

const Button = ( {children, acao} ) => {
    return <button className="add-task-button" onClick={acao}> 
        {children} 
    </button>;
}
 
export default Button;