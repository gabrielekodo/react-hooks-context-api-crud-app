import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { UserList } from './UserList'
const Home = () => {
    const { users } = useContext(GlobalContext)

    // const [users, setUsers] = useState([])


    //setting local storage
    useEffect(() => {
        localStorage.setItem('usersData', JSON.stringify(users))
    }, [users])

    return (
        <div className="card ml-3 mr-3">
            <div className="card-header text-center">
                <button className=" btn bg-warning">{users.length}</button>
                <h4>Registered Users</h4>



            </div>
            <div className="card-body">
                <UserList />
            </div>
        </div>
    )
}

export default Home
