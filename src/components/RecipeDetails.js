import { useState } from "react"
import { Card, Button} from 'semantic-ui-react'

const RecipeDetails = ({id, name, times_cooked, instructions, cuisine_id, baseUrl}) => {
    const [showDetails, setShowDetails] = useState(false)
    const [timesCooked, setTimesCooked] = useState(times_cooked)

    const expandDetails = () => {
        
        setShowDetails((showDetails) => !showDetails)
    }

    const handleClick = (e) => {
        e.stopPropagation()
        updateCookedCount()
       
    }

    const updateCookedCount = () => {
        fetch(`${baseUrl}/recipes/${id}/cook`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        .then(res => res.json())
        .then((updatedRecipe) => setTimesCooked(updatedRecipe.times_cooked))
    }

    return (
        <div onClick={expandDetails}>
            <Card>
                <Card.Header>
                    {name}
                </Card.Header>
                {showDetails ?
                    <>
                    <Card.Content>
                        <Card.Meta>
                            <span className='date'>This recipe has been cooked {timesCooked} tims</span>
                        </Card.Meta>
                        <Card.Description>
                                Cooking instructions: {instructions}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button inverted color='green' onClick={handleClick}>
                                <Button.Content visible>Cook Recipe</Button.Content>
                            </Button>
                    </Card.Content>
                  </>
            :
            <></>
        }
        </Card>
    </div>







        //     <h2>{name}</h2>
        //     {showDetails ?
        //     <div>
        //         <h4>This recipe has been cooked {timesCooked} times</h4>
        //         <p>Cooking instructions: <em>{instructions}</em></p>
        //         <button onClick={handleClick}>Cook Recipe</button>
        //     </div>  
        //     :
        //     <></>
        // }
        // </div>
    )
}

export default RecipeDetails