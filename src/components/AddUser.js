import React, { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'
import uuid from 'uuid'
const AddUser = () => {
    useEffect(() => {
        if (localStorage.getItem('usersData')) {
            const people = JSON.parse(localStorage.getItem('usersData'))
            console.log(people);

        }
    }, [])
    const { addUser } = useContext(GlobalContext)
    const history = useHistory()
    const [name, setName] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: uuid(),
            name
        }

        if (name === '') {
            alert("Please enter name")
        }
        else {
            addUser(newUser)

        }
        history.push('/')
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit}>

                <div className="form-group mt-3 mb-3">
                    <label >Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control"
                        placeholder="Enter name...."
                        required
                        autoFocus />
                </div>
                <button type="submit" className="btn btn-secondary">Add User</button>
                <Link to="/" className="btn btn-danger ml-3">Cancel</Link >

            </form>
        </div>
    )
}

export default AddUser;
