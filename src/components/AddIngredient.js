import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const AddIngredient = ({baseUrl}) => {
    const {id}  = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        quantity: 0,
        user_id: id
        })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((formData) => ({...formData, [name]: value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        console.log(`${baseUrl}user/${id}/ingredients`)
  
        fetch(`${baseUrl}user/${id}/ingredients`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((newIngredient) => {
            console.log(newIngredient)
            navigate('/Users')
        })
        
        setFormData({
            name: "",
            quantity: 0,
            user_id: id
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Ingredient:</label>
            <input type="text" value={formData.name} name="name" placeholder="Ingredient Name" onChange={handleChange}></input>
            
            <label>Quantity:</label>
            <input type="number" value={formData.quantity} name="quantity" placeholder="Quantity" onChange={handleChange}></input>
            
            <button type="submit">Add Ingredient</button>

        </form>
    )
}

export default AddIngredient