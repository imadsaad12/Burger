import React from 'react';
import classes from './Order.module.css';
const orders=(props)=>{
    const ingredients=[];
    for(let ingredientName in props.ingredients){
        ingredients.push({name:ingredientName,amount:props.ingredients[ingredientName]});
    }
    const ingredientoutput=ingredients.map((ig,i)=>{
        return <span key ={ig+i} style={{display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"}}> {ig.name} : {ig.amount}</span>
    })
        return(
            <div className={classes.Order}>
                <p>The ingredients : {ingredientoutput}</p>
                <p>Price :<strong> USD {props.price.toFixed(2)}</strong></p>
            </div>
        )
    
}
export default orders; 