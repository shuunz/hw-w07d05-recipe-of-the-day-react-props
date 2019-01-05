import React from 'react';
// import recipeOfTheDay from '../data/recipeOfTheDay';

// class Ingredient extends Component {
//     renderIngredient(){
        
//     }
// }
const Recipe = (props) =>{
    const recipe = props.recipe;
    return(
        <div>
            <ul>
                <li>{recipe.name}</li>
                <li>{recipe.servings}</li>
                <li>{recipe.category}</li>
            </ul>
        </div>
    )
}

export default Recipe ;
