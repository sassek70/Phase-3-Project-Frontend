import { useState } from "react"
import { NavLink } from "react-router-dom"
import uuid from "react-uuid"


const UserDetails = ({id, name, baseUrl}) => {
    const [userRecipes, setUserRecipes] = useState([])
    const [userIngredients, setUserIngredients] = useState([])
    const [showUserPantry, setShowUserPantry] = useState(false)
    const [showUserCookbook, setShowUserCookbook] = useState(false)
    const [showDetails, setShowDetails] = useState(false)


    const fetchRecipes = () => {
        fetch(`${baseUrl}user/${id}/recipes`)
        .then(res => res.json())
        .then((userRecipesList) => setUserRecipes(userRecipesList))
    }

    const fetchIngredients = () => {
        fetch(`${baseUrl}user/${id}/ingredients`)
        .then(res => res.json())
        .then((userIngredientsList) => setUserIngredients(userIngredientsList))
    }
    const getUserRecipes = (e) => {
        e.stopPropagation()
        setShowUserCookbook((showUserCookbook) => !showUserCookbook)
        setShowUserPantry(false)
        fetchRecipes()
        }

    
    const getUserIngredients = (e) => {
        e.stopPropagation()
        setShowUserPantry((showUserPantry) => !showUserPantry)
        setShowUserCookbook(false)
        fetchIngredients()
    }

    const expandDetails = () => {
        setShowDetails((showDetails) => !showDetails)
        setShowUserPantry(false)
        setShowUserCookbook(false)
    }

    const handleDeleteIngredient = (ingredient) => {
        console.log(ingredient)
        fetch(`${baseUrl}user/${id}/ingredients/${ingredient.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(res => res.json)
        .then(fetchIngredients)
    }

    const handleDeleteRecipe = (recipe) => {
        console.log(recipe)
        fetch(`${baseUrl}user/${id}/recipes/${recipe.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(res => res.json)
        .then(fetchRecipes)
    }

    const displayIngredients = userIngredients.map(({ingredient, quantity}) => {
        return(
            <div key={uuid()}>    
                <div>
                    {ingredient.name} quantity: {quantity}
                    <button onClick={()=>handleDeleteIngredient(ingredient)}>X</button>
                </div>
            </div>
            )
        })
            

    
    
    const displayRecipes = userRecipes.map(({recipe, cuisine}) => {
        return (
            <div key={uuid()}>
                <NavLink to={`/Recipes/${recipe.id}`}>{recipe.name}   {cuisine.name}</NavLink>
                <button onClick={()=>handleDeleteRecipe(recipe)}>X</button>
            </div>
                )
            })
    

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
                <NavLink to={`/addIngredient/${id}`} name="New Ingredient">Add Ingredient</NavLink>
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
                <NavLink to={{pathname: `/addRecipe/${id}`}} state={{id}} name="New Recipe">Add Recipe</NavLink>
            </>
            :
             <></>
            }    
        </div>
        </>
    )
}

export default UserDetails


