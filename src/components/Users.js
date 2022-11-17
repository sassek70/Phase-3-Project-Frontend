import { useEffect, useState } from "react"

const Users = () => {
    const [userList, setUserlist] = useState([])
    const [chosenUserId, setChosenUserId] = useState()

    useEffect(() => {
        fetch("http://localhost:9292/user") 
        .then(res => res.json())
        .then((users) => setUserlist(users))
    },[])
    const handleClick = (userId) => {
        setChosenUserId(userId)
    }
    
    console.log(chosenUserId)

    const displayedUsers = userList.map((user) => {
        const {id, name} = user
        return (<h2 key={id} onClick={() => handleClick(id)}>{name}</h2>)
    })
    

    return(
        <div>
            {displayedUsers}
        </div>
    )
}

export default Users