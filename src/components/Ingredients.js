import { useEffect, useState } from "react"


const Ingredients = () => {
    const [allIngredients, setAllIngredients] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:9292/ingredients") 
        .then(res => res.json())
        .then((ingredients) => setAllIngredients(ingredients))
    },[])


    const displayIngredients = allIngredients.map((ingredient) => <span key={ingredient.id}>{ingredient.name}</span>)

    return (
        <div>
            {displayIngredients}
        </div>
    )
}

export default Ingredients