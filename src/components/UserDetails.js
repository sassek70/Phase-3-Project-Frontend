import { useState } from "react"
import { NavLink } from "react-router-dom"


const UserDetails = ({id, name, baseUrl}) => {
    const [userRecipes, setUserRecipes] = useState([])
    const [userIngredients, setUserIngredients] = useState([])
    const [showUserPantry, setShowUserPantry] = useState(false)
    const [showUserCookbook, setShowUserCookbook] = useState(false)
    const [showDetails, setShowDetails] = useState(false)


    const getUserRecipes = (e) => {
        e.stopPropagation()
        setShowUserCookbook((showUserCookbook) => !showUserCookbook)
        setShowUserPantry(false)

        fetch(`${baseUrl}user/${id}/recipes`)
        .then(res => res.json())
        .then((userRecipesList) => setUserRecipes(userRecipesList))
    }

    
    const getUserIngredients = (e) => {
        e.stopPropagation()
        setShowUserPantry((showUserPantry) => !showUserPantry)
        setShowUserCookbook(false)

        fetch(`${baseUrl}user/${id}/ingredients`)
        .then(res => res.json())
        .then((userIngredientsList) => setUserIngredients(userIngredientsList))
    }

    const expandDetails = () => {
        setShowDetails((showDetails) => !showDetails)
        setShowUserPantry(false)
        setShowUserCookbook(false)

    }

    const displayIngredients = userIngredients.map((ingredient) => <div key={ingredient.id}>{ingredient.name}</div>)
    const displayRecipes = userRecipes.map((recipe) => <div key={recipe.id}>{recipe.name} {recipe.cuisine}</div>)
    
    console.log(userRecipes)

    return(
        <>
        <div onClick={expandDetails}>
            <h2>{name}</h2>
            {showDetails ?
            <>
            <button onClick={getUserRecipes}>Recipe List</button>
            <button onClick={getUserIngredients}>Ingredient List</button>
            </>
            :
            <></>
            }   
        </div>
        <div>
            {showUserPantry ? 
            <div>
                <h4>{name}'s ingredients:</h4>
                {displayIngredients}
                <NavLink to={`/addIngredient`} name="New Ingredient">Add Ingredient</NavLink>
            </div>
            :
            <></>
            }    
        </div>
        <div>
            {showUserCookbook ? 
            <>
                <h4>{name}'s recipes:</h4>
                {displayRecipes}
                <NavLink to={`/addRecipe`} name="New Recipe">Add Recipe</NavLink>
            </>
            :
             <></>
            }    
        </div>
        </>
    )
}

export default UserDetails


