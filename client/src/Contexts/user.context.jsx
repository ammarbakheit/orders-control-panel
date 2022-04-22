import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const UserContext = createContext(null);

export const UserProvider = (props) => {
    const [users, setUsers] = useState([]);

    const getAllUsers = () => {
        axios.get(`${BASE_URL}/api/me/all`).then(res => {
            const allUsers = res.data;

            setUsers([...allUsers]);
        })
    }

    useEffect(() => {
        // console.log("ss");
        getAllUsers()
    }, [])
    return (
        <UserContext.Provider value={{ users }} {...props} />
    )
}

export const useUser = () => useContext(UserContext);