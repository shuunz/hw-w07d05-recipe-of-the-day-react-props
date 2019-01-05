import React, {Component} from 'react';
import recipeOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';

class RecipeOfTheDay extends Component {
    renderIngredients(){
        const ingredientsElements = recipeOfTheDay.ingredients.map((ingredient,index) => {
            return(
                <Ingredient ingredient={ingredient} key = {index}/>
            )
        })
        return ingredientsElements;
      }

    render(){
        return(
            <div>
            <h4>{recipeOfTheDay.name}</h4>
            <h4>{recipeOfTheDay.description}</h4>
            {this.renderIngredients()}
            </div>
        )
    }
   
}

            
export default RecipeOfTheDay;