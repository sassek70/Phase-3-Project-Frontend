import { useEffect, useState } from "react"
import uuid from "react-uuid"
import RecipeDetails from "./RecipeDetails"

const Recipes = ({baseUrl}) => {
    const [recipeList, setRecipelist] = useState([])
    const [chosenRecipe, setChosenRecipe] = useState()



    useEffect(() => {
        fetch("http://localhost:9292/recipes") 
        .then(res => res.json())
        .then((users) => {
            setRecipelist(users)
        })
    },[])


    

    const displayRecipes = recipeList.map((recipe) => {
        const {id, name, times_cooked, instructions, cuisine_id} = recipe
        return (<RecipeDetails key={id} id={id} name={name} times_cooked={times_cooked} instructions={instructions} cuisine_id={cuisine_id} baseUrl={baseUrl}/>)
    })

    // const displayRecipes = recipeList.map((recipe) => {
    //     console.log(recipe)
    //     return (
    //         <div key={recipe.id} onClick={handleClick}>
    //             <h2>{recipe.name}</h2>
    //             <div>
    //                 <h4>{recipe.times_cooked}</h4>
    //                 <p>{recipe.instructions}</p>
    //             </div>
    //             <h2>{recipe.name}</h2>
    //         </div>
    //         )
    //     })
    

    return(
        <div>
            {displayRecipes}
        </div>
    )
}

export default Recipes
