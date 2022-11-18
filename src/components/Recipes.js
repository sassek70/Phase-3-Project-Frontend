import { useEffect, useState } from "react"

const Recipes = ({baseUrl}) => {
    const [recipeList, setRecipelist] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/recipes") 
        .then(res => res.json())
        .then((users) => setRecipelist(users))
    },[])
    


    const displayRecipes = recipeList.map((recipe) => <h2 key={recipe.id}>{recipe.name}</h2>)
    

    return(
        <div>
            {displayRecipes}
        </div>
    )
}

export default Recipes
