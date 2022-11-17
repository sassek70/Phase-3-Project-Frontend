import { useState } from "react"

const UserDetails = ({id, name, baseUrl}) => {
    const [userRecipes, setUserRecipes] = useState([])
    const [userIngredients, setUserIngredients] = useState([])
    const [showUserPantry, setShowUserPantry] = useState(false)
    const [showUserCookbook, setShowUserCookbook] = useState(false)


    const getUserRecipes = () => {
        console.log("recipes")
        setShowUserCookbook((showUserCookbook) => !showUserCookbook)

        fetch(`${baseUrl}user/${id}/recipes`)
        .then(res => res.json())
        .then((userRecipesList) => setUserRecipes(userRecipesList))
    }

    
    const getUserIngredients = () => {
        console.log(id)
        setShowUserPantry((showUserPantry) => !showUserPantry)

        fetch(`${baseUrl}user/${id}/ingredients`)
        .then(res => res.json())
        .then((userIngredientsList) => setUserIngredients(userIngredientsList))
    }

    const displayIngredients = userIngredients.map((ingredient) => <div key={ingredient.id}>{ingredient.name}</div>)
    const displayRecipes = userRecipes.map((recipe) => <div key={recipe.id}>{recipe.name} {recipe.cuisine}</div>)
    
    console.log(userRecipes)

    return(
        <>
        <div>
            <h2>{name}</h2>
            <button onClick={getUserRecipes}>Recipe List</button>
            <button onClick={getUserIngredients}>Ingredient List</button>
        </div>
        <div>
            {showUserPantry ? 
            <>
                {displayIngredients}
            </>
            :
             <span>You have no ingredients</span>
            }    
        </div>
        <div>
            {showUserCookbook ? 
            <>
                {displayRecipes}
            </>
            :
             <span>You have no recipes</span>
            }    
        </div>
        </>
    )
}

export default UserDetails