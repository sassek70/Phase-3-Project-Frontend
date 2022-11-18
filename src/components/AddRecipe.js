import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const AddRecipe = ({baseUrl}) => {
    const {id}  = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState ({
        name: "",
        cuisine: "",
        times_cooked: 0,
        instructions: "",
        user_id: id
        })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((formData) => ({...formData, [name]: value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
  
        fetch(`${baseUrl}user/${id}/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(navigate('/Users'))
        
        setFormData({
            name: "",
            cuisine: "",
            times_cooked: 0,
            instructions: "",
            user_id: id
            })
        }

    return (
        <form onSubmit={handleSubmit}>
            <label>Recipe Name:</label>
            <input type="text" value={formData.name} name="name" placeholder="Recipe Name" onChange={handleChange}></input>
            
            <label>Cuisine:</label>
            <input type="text" value={formData.quantity} name="cuisine" placeholder="Cuisine" onChange={handleChange}></input>

            <label>Instructions:</label>
            <input type="textbox" value={formData.instructions} name="instructions" placeholder="Instructions" onChange={handleChange}></input>
            
            <button type="submit">Add Recipe</button>

        </form>
    )
}
    
export default AddRecipe