import React from 'react';
// import recipeOfTheDay from '../data/recipeOfTheDay';

// class Ingredient extends Component {
//     renderIngredient(){
        
//     }
// }
const Ingredient = (props) =>{
    const ingredient = props.ingredient;
    return(
        <div>
            <p>{ingredient.ingredient}</p>
            <p>{ingredient.amount}</p>
        </div>
    )
}

export default Ingredient ;
