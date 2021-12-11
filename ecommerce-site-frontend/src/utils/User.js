import { useEffect, useState } from "react";

let setUser;
let user;

export const getUser = () =>{
    const [_user, _setUser] = useState({})
    user = _user;
    setUser = _setUser;
    
    useEffect(() => {
        const localUser = getUserData();
        setUser(localUser);
    },[])
    
    return Object.values(user);
}

const getUserData = () =>{
    const localUser = JSON.parse(localStorage.getItem("userData")) || {};
    
    return localUser;
}

export const login = async (email, password) =>{
    const res = await fetch('/loginsuccess', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    });

    const {
        success,
        user,
        token
    } = await res.json()

    if(success === true)
    {
        setUser(user);
        localStorage.setItem('userToken', token)
    }
}