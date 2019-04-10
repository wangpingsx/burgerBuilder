import React from 'react';
import Aux from '../../../hoc/Aux';


const OrderSummary = (props)=> {
    return (<Aux>
        <h3>Your Order</h3>
        <p>detail order:</p>
        <ul>
            {Object.keys(props.ingredients).map((ing)=> {
                return (<li key={ing} style={{textTransform:'capitalize'}}>{ing} : {props.ingredients[ing]} </li>);
            })}
        </ul>
    </Aux>);
};

export default OrderSummary;
