import React from 'react';
import classes from './Burger.module.css';
import BurgerIngrediants from './BurgerIngrediants/BurgerIngrediants';
const burger =(props)=>{
    const transformedingrediants=Object.keys(props.ingrediant) 
    .map(igkey=>{
        return [...Array(props.ingrediant[igkey])].map((_,i)=>{
            return <BurgerIngrediants key={igkey+i} type={igkey} />
        });
    })
    return (
        <div className={classes.Burger}>
            <BurgerIngrediants type="bread-top"/>
                {transformedingrediants}
            <BurgerIngrediants type="bread-bottom"/>
        </div>

    )
}
export default burger;