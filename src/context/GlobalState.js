import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    users: []
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //ACTIONS
    //delete user
    const removeUser = (id) => {
        dispatch({ type: 'REMOVE_USER', payload: id })
    }
    //ADD USER
    const addUser = (user) => {
        dispatch({ type: 'ADD_USER', payload: user })
    }
    //UPDATE USER IE EDIT
    const editUser = (user) => {
        dispatch({ type: 'EDIT_USER', payload: user })
    }
    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}