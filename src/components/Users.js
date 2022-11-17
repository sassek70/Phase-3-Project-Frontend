import { useEffect, useState } from "react"

const Users = () => {
    const [userList, setUserlist] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/user") 
        .then(res => res.json())
        .then((users) => setUserlist(users))
    },[])
    


    const displayedUsers = userList.map((user) => <h2>{user.name}</h2>)
    

    return(
        <div>
            {displayedUsers}
        </div>
    )
}

export default Users