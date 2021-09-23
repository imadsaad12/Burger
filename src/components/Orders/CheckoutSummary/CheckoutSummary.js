import React from 'react';
import Burger from '../../Burger/Burger';
import classes from './Checkoutsummary.module.css';
const checkoutsummary=(props)=>{
    return(
        <div className={classes.Checkoutsummary}>
            <h1>We Hope It Tastes Well !</h1>
            <div style={{width:"100%",margin:"auto",height:"300px"}}>
                <Burger ingrediant={props.ingredients} />
            </div>
            <button onClick={props.onCheckoutcancel}>Cancel</button>
            <button  onClick={props.onCheckoutcontinue}>Continue</button>
        </div>
    ) 
}
export default checkoutsummary;