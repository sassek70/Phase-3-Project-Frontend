import { useState } from "react"

const UserDetails = ({id, name, baseUrl}) => {
    const [userRecipes, setUserRecipes] = useState([])
    const [userIngredients, setUserIngredients] = useState([])
    const [userPantry, setUserPantry] = useState(false)
    const [userCookbook, setUserCookbook] = useState(false)


    const getUserRecipes = () => {
        console.log("recipes")
        setUserCookbook((userCookbook) => !userCookbook)

        fetch(`${baseUrl}user/${id}/recipes`)
        .then(res => res.json)
        .then((userRecipesList) => setUserRecipes(userRecipesList))
    }

    
    const getUserIngredients = () => {
        console.log("ingredients")
        setUserPantry((userPantry) => !userPantry)

        fetch(`${baseUrl}user/${id}/ingredients`)
        .then(res => res.json)
        .then((userIngredientsList) => setUserIngredients(userIngredientsList))
    }

    const displayPantry = () => {
        const displayIngredients = userIngredients.map((ingredient) => <div>{ingredient.name} quantity: {ingredient.quantity}</div>)

    }

    return(
        <>
        <div>
            <h2>{name}</h2>
            <button onClick={getUserRecipes}>Recipe List</button>
            <button onClick={getUserIngredients}>Ingredient List</button>
        </div>
        <div>
            {userPantry ? 
                displayPantry
            :
             <span>You have no ingredients</span>
            }    
        </div>
        </>
    )
}

export default UserDetails