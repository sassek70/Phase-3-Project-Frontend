import { useEffect, useState } from "react"
import UserDetails from "./UserDetails"
import { Card, Grid } from 'semantic-ui-react'


const Users = ({baseUrl}) => {
    const [userList, setUserlist] = useState([])
    const [chosenUserId, setChosenUserId] = useState()
    // const [displayUserDetails, setDisplayUserDetails] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9292/user") 
        .then(res => res.json())
        .then((users) => setUserlist(users))
    },[])


    const displayedUsers = userList.map((user) => {
        const {id, name} = user
        return (
                <Grid.Column key={id}>
                    <UserDetails key={id} id={id} name={name} baseUrl={baseUrl} />
                </Grid.Column>
        )
    })
    

    return(
        <Card.Group>
        <div style={{paddingTop: "50px"}}>
            <Grid relaxed columns={3} padded="horizontally">
                {displayedUsers}
            </Grid>
        </div>
        </Card.Group>
    )
}

export default Users