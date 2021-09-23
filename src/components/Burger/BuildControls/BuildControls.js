import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';
const controls=[
    {lable:'Meat',type:'meat'},
    {lable:'Cheese',type:'cheese'},
    {lable:'Salad',type:'salad'},
    {lable:'Bacon',type:'bacon'}
]
const buildcontrols=(props)=>{
    
    return(

        <div className={classes.BuildControls}>
            <p>Current price =<strong> {props.price.toFixed(2)}</strong></p>
            {
                controls.map((ctrl)=>{
                    return(
                        <BuildControl key={ctrl.lable+"12"}
                         label={ctrl.lable} 
                         remove={()=>{props.removeingredient(ctrl.type)}} 
                         added={()=>{props.addedingredients(ctrl.type)}}
                         
                         
                         />
                    )
                })
            }
            <button className={classes.OrderButton} onClick={props.ordered} >ORDER NOW</button>
        </div>
    )
}
export default buildcontrols;