import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 0,
        showSummary: false
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

    showHideSummary = ()=> {
        this.setState({showSummary:!this.state.showSummary});
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
                <Modal showSummary={this.state.showSummary}>
                    <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                {/*<div>control</div>*/}
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientRemovedButtonDisabled={buttonDisableStatus}
                    totalPrice={this.state.totalPrice}
                    showHideSummary={this.showHideSummary}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
