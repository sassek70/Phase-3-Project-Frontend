import { useEffect, useState } from "react"
import uuid from "react-uuid"
import RecipeDetails from "./RecipeDetails"
import { Card, Grid } from 'semantic-ui-react'


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
        return (
            <Grid.Column>
                <RecipeDetails key={id} id={id} name={name} times_cooked={times_cooked} instructions={instructions} cuisine_id={cuisine_id} baseUrl={baseUrl}/>
            </Grid.Column>
        )
    })

    // const displayRecipes = recipeList.map((recipe) => {
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
        <Card.Group>
        <div style={{paddingTop: "50px"}}>
            <Grid relaxed columns={3} padded="horizontally">
                {displayRecipes}
            </Grid>
        </div>
        </Card.Group>
    )
}

export default Recipes
