import { useEffect, useState } from "react"


const Ingredients = ({baseUrl}) => {
    const [allIngredients, setAllIngredients] = useState([])
    
    useEffect(() => {
        fetch(`${baseUrl}ingredients`) 
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