import React from 'react';
import './CustomButton.css';

const CustomButton = (props) => {
    return (
        <button className="CustomButton">
            {props.text}    
        </button>
    );
};

export default CustomButton;