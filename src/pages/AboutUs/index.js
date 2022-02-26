import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Logo from "../../assets/logo.png";
import {Button} from "@mui/material";
import {decrement} from "../../features/counter/counterSlice";
import {setUsers as setUsersAction} from "../../features/testApi/testApiSlice";

const AboutUs = () => {

    const dispatch = useDispatch()

    const [users,setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
    },[])

    const getAllUsers = () => fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((result) => {
            setUsers(result)
            dispatch(setUsersAction(result))
        })

    return (
        <div style={{height: '500px', background: 'white'}}>
            <Button variant={"contained"} onClick={() => dispatch(decrement())}>
                Decrement
            </Button>
            <Button onClick={() => getAllUsers() }>
                Fetch Users
            </Button>
            {
                users.map((e) => {
                    if(e?.email){
                       return (<div>{e.email}</div>)
                    }
                })
            }
        </div>
    );
};

export default AboutUs;