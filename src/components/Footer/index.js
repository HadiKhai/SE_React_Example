import React, {useEffect, useState} from 'react';
import {Grid, Typography, Button} from "@mui/material";
import {useSelector} from "react-redux";

const Footer = () => {

    const count = useSelector(state => state.counter.value)

    const [countPlusTwo,setCountPlusTwo] = useState(0)

    useEffect(() => {
        setCountPlusTwo(count+2)
    },[count])

    return (
        <Grid container style={{background:'grey',height:'200px'}}>
            <Grid item xs>
                <Typography textAlign={"center"} variant={"h1"} color={"white"}>
                    {count}
                </Typography>
                <Typography textAlign={"center"} variant={"h1"} color={"white"}>
                    {countPlusTwo}
                </Typography>
                <Button variant={"contained"}>
                    Footer Button
                </Button>
            </Grid>
        </Grid>
    );
};

export default Footer;