import React from 'react';
import Aux from '../../../hoc/Auxi';

const ordarsummary=(props)=>{
    const ingredientsummary=Object.keys(props.ingredients)
    .map(igkey=>{
        return <li key={igkey}>{igkey} : {props.ingredients[igkey]}</li>
    });
    return (
        <div >
            <Aux>
                <button onClick={props.close}>X</button>
                <h3>Your Order</h3>
                <p>A delecious Burger with the following ingredients :</p>
                <ul>
                    {ingredientsummary}
                </ul>
                <p>Total Price : <strong>{props.price}</strong></p>
                <p>Continue for check out ?</p>
                <button  onClick={props.close}>CANCEL</button>
                <button onClick={props.continue}>CONTINUE</button>
            </Aux>
        </div>
    )
}
export default ordarsummary;