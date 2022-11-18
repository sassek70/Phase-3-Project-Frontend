import { useEffect, useState } from "react"
import UserDetails from "./UserDetails"

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
        return (<UserDetails key={id} id={id} name={name} baseUrl={baseUrl} />)
    })
    

    return(
        <div>
            {displayedUsers}
        </div>
    )
}

export default Users