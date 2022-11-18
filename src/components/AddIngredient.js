import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form } from 'semantic-ui-react'



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
  
        fetch(`${baseUrl}user/${id}/ingredients`, {
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
            quantity: 0,
            user_id: id
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
            <label>Ingredient:</label>
            <input type="text" value={formData.name} name="name" placeholder="Ingredient Name" onChange={handleChange}></input>
            </Form.Field>
            <Form.Field>
            <label>Quantity:</label>
            <input type="number" value={formData.quantity} name="quantity" placeholder="Quantity" onChange={handleChange}></input>
            </Form.Field>
            <Button inverted color='green' type='submit'>Add Ingredient</Button>
        </Form>
    )
}

export default AddIngredient