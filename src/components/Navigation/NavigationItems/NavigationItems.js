import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationintems=()=>(
   
            <ul className={classes.NavigationItems}>
                <NavigationItem Link="/" >
                    BurgerBuilder
                </NavigationItem>
                <NavigationItem Link="/orders">
                    Orders
                </NavigationItem>
                <NavigationItem Link="/auth">
                    Sign in
                </NavigationItem>
               
            </ul>
)
export default navigationintems;