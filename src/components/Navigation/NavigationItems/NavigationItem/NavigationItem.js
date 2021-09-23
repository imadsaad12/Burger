import React from 'react';
import classes from './Navigationitem.module.css';
import {NavLink} from 'react-router-dom'
const navigationitem=(props)=>(
    <li className={classes.NavigationItem}>
        <NavLink to={props.Link} className={classes.active}>{props.children}</NavLink>
        </li>
)
export default navigationitem;