import React from 'react';
import classes from './Model.module.css';
import Aux from '../../../hoc/Auxi';
const modal=(props)=>{
    return (
        <Aux>
        <div className={classes.Modal}>
            {props.children}
        </div>
        </Aux>
    )
}
export default modal;