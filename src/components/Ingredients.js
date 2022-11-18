import { useEffect, useState } from "react"
import { Card, Grid } from 'semantic-ui-react'
import uuid from "react-uuid"


const Ingredients = ({baseUrl}) => {
    const [allIngredients, setAllIngredients] = useState([])
    
    useEffect(() => {
        fetch(`${baseUrl}ingredients`) 
        .then(res => res.json())
        .then((ingredients) => setAllIngredients(ingredients))
    },[])


    const displayIngredients = allIngredients.map((ingredient) => {
    return (
        <div key={uuid()}>
            <Grid.Column>
                <Card>
                  <Card.Content>
                    <Card.Header>{ingredient.name}</Card.Header>
                  </Card.Content>
                </Card>
            </Grid.Column>    
        </div>
        )
    })

    return (
        <Card.Group>
            <div style={{paddingTop: "50px"}}>
                <Grid relaxed columns={3} padded="horizontally">
                    {displayIngredients}
                </Grid>
            </div>
        </Card.Group>
    )
}

export default Ingredients