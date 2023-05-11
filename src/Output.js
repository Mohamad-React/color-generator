import React from 'react';

import styles from "./ColorGenerator.module.css";

const Output = ({veri,hori,spread,blur,color}) => {
    return (
        <div className={styles.Outputcontainer} style={{boxShadow:`${hori}px ${veri}px ${blur}px ${spread}px ${color} `}}>
            <div >
                 <p >box shdow: {hori}px {veri}px {blur}px {spread}px {color} </p>
            </div>
           
        </div>
    );
};

export default Output;