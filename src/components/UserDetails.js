import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Card, Button} from 'semantic-ui-react'
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

        fetch(`${baseUrl}user/${id}/ingredients/${ingredient.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(res => res.json())
        .then(fetchIngredients)
    }

    const handleDeleteRecipe = (recipe) => {

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
                <Card>
                  <Card.Content>
                    <Card.Header>{ingredient.name}</Card.Header>
                    <Card.Meta>
                      <span className='date'>Quantity: {quantity}</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                  <Button inverted color='red' onClick={()=>handleDeleteIngredient(ingredient)}>
                    <Button.Content  visible>Delete</Button.Content>
                  </Button>
                  </Card.Content>
                </Card>
            </div>
            )
        })
            

    
    
    const displayRecipes = userRecipes.map(({recipe, cuisine}) => {
        return (
            <div key={uuid()}>
                <Card>
                  <Card.Content>
                    <Card.Header>{recipe.name}</Card.Header>
                    <Card.Meta>
                      <span className='date'>{cuisine.name}</span>
                    </Card.Meta>
                    <Card.Description>
                      {recipe.instructions}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                  <Button inverted color='red' onClick={()=>handleDeleteRecipe(recipe)}>
                    <Button.Content visible>Delete</Button.Content>
                  </Button>
                  </Card.Content>
                </Card>
            </div>
                )
            })
    

    return(
        <>
                <Card onClick={expandDetails}>
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        {showDetails ? 
                        <>
                            <Button onClick={getUserRecipes}>
                                <Button.Content visible>Recipe List</Button.Content>
                            </Button>  
                            <Button onClick={getUserIngredients}>
                              <Button.Content visible>Ingredients List</Button.Content>
                            </Button>  
                        </>
                        :
                        <></>
                    }
                        <Card.Description>
                            {showUserPantry ? 
                            <>
                                <h4>{name}'s ingredients:</h4>
                                    <div>
                                        {displayIngredients}
                                        <NavLink to={`/addIngredient/${id}`} name="New Ingredient">Add Ingredient</NavLink>
                                    </div>
                            </>
                            :
                            <></>
                            }
                            {showUserCookbook ? 
                            <>
                                <h4>{name}'s recipes:</h4>
                                {displayRecipes}
                                <NavLink to={`/addRecipe/${id}`} name="New Recipe">Add Recipe</NavLink>
                            </>
                        :
                         <></>
                        }   
                        </Card.Description>
                    </Card.Content>
                </Card>
        </>
    )
}




{/* <Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>{recipe.name}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">{cuisine.name}</Card.Subtitle>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Card.Link href="`/Recipes/${recipe.id}`">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card> */}

export default UserDetails


