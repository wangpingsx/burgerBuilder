import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICEs = {
    salad : 0.5,
    cheese : 0.4,
    meat: 1.3,
    bacon : 0.7
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat: 0
        },
        totalPrice: 0
    }

    addIngredientHandler = (type) => {
        const newState = {
            ingredients: {...this.state.ingredients},
            totalPrice: this.state.totalPrice
        }
        newState.ingredients[type]++;
        newState.totalPrice = newState.totalPrice + INGREDIENT_PRICEs[type];
        this.setState(newState);
    }

    removeIngredientHandler = (type) => {
        const newState = {
            ingredients: {...this.state.ingredients},
            totalPrice: this.state.totalPrice
        }
        if (newState.ingredients[type] <= 0) {
            return;
        }
        newState.ingredients[type]--;
        newState.totalPrice = newState.totalPrice - INGREDIENT_PRICEs[type];
        this.setState(newState);
    }

    render () {
        const buttonDisableStatus = {
            ...this.state.ingredients
        };
        for (var key in buttonDisableStatus) {
            buttonDisableStatus[key] = buttonDisableStatus[key]<=0;
        }
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                {/*<div>control</div>*/}
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientRemovedButtonDisabled={buttonDisableStatus}
                />
                price : {this.state.totalPrice}
            </Aux>
        );
    }
}

export default BurgerBuilder;
