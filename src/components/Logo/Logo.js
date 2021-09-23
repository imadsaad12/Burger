import React from 'react';
import Logo from '../../assets/burger-logo.png';
import classes from './Logo.module.css';
const logo=()=>{
    return(
        <div className={classes.Logo}>
            <img src={Logo} alt="MY BURGER"/>
            </div>
    )
}
export default logo;