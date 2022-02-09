import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
const EditUser = (props) => {

    const { users, editUser } = useContext(GlobalContext)
    const history = useHistory()
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })

    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser)

        history.push('/')

    }

    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group mt-3 mb-3">
                <label >Name</label>
                <input
                    name="name"
                    value={selectedUser.name}
                    onChange={onChange}
                    type="text" className="form-control" autoFocus />
            </div>
            <button type="submit" className="btn btn-secondary">Save changes</button>
            <Link to="/" className="btn btn-danger ml-3">Cancel</Link >
        </form>)

}

export default EditUser
