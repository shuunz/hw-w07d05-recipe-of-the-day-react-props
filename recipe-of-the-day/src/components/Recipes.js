import React , {Component} from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';

class Recipes extends Component {
renderRecipes(){
    const recipeElements = recipes.map((recipe,index)=>{
        return(
        <Recipe recipe = {recipe} key = {index}/>
        )
    })
    return recipeElements;
    
    }
render(){
    return(
        <div>
            {this.renderRecipes()}
        </div>
    )
}
}

export default Recipes ;