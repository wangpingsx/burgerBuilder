import React from 'react';
import styles from './Burger.module.css';
import BurgetIngredient from "./BurderIngredient/BurderIngredient";

const burger = (props) =>{
    const inglist = Object.keys(props.ingredients).reduce((previousValue, currentValue) => {
        const length = props.ingredients[currentValue];
        for (let i = 0 ; i <length; i++) {
            previousValue.push(currentValue);
        }
        return previousValue;
    }, []);
    console.log(inglist);
    let ingHtml = inglist.map( (ing, index) => {
        return (<BurgetIngredient type={ing} key={index}/>);
    });
    if (ingHtml.length === 0 ) {
        ingHtml = 'please start to add ingredents.';
    }
    return (
        <div className={styles.Burger}>
            <BurgetIngredient type='bread-top'/>
            {ingHtml}
            <BurgetIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;
