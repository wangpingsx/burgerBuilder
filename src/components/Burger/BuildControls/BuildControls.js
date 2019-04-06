import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            {controls.map( (control) => {
                return (
                    <BuildControl
                        label={control.label}
                        key={control.label}
                        add={()=> {props.ingredientAdded(control.type)}}
                        remove={()=> {props.ingredientRemoved(control.type)}}
                        removeBtnDisabled={props.ingredientRemovedButtonDisabled[control.type]}
                    />
                );
            })}
        </div>

    );
}

export default buildControls;
