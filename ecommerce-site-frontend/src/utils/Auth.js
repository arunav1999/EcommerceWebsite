import { useEffect, useState } from "react";

let setUser = (userInfo) => {
    user = userInfo;
};
let user = null;

export const useAuth = () =>{
    const [_user, _setUser] = useState(user)
    user = _user;
    setUser = _setUser;

    useEffect(async () => {
        if(user === null)
        {
            const localUser = await getUserData();
            _setUser(localUser);
        }
    },[])
    
    return _user;
}

const getUserData = async () =>{
    const token = localStorage.getItem('userToken');
    if(!token)
    {
        return null;
    }
    const res = await fetch('/api/userinfo' , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            token
        }
    });
    const {
        success,
        user_info
    } = await res.json()

    if(success)
    { 
        return {...user_info, token};
    }
    return null;
}

export const login = async (email, password, isAdmin = false) =>{
    let url = '/api/login'

    if(isAdmin)
    {
        url = '/api/adminlogin'
    }
    const res = await fetch(url , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    
    const {
        success,
        user_info,
        token
    } = await res.json()

    if(success === true)
    {
        setUser({...user_info, token});
        localStorage.setItem('userToken', token)
        return true;
    }
    return false;
}

export const signup = async (userInfo) =>{
    let url = '/api/register'
    
    const res = await fetch(url , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });
    
    const {
        success
    } = await res.json()

    if(success === true)
    {
        return await login(userInfo.email, userInfo.password)
    }
    return false;
}