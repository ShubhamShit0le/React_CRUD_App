import { Typography } from '@mui/material'
import React from 'react'

const Home = (props) => {
    props.funcNav(false);
    return (
        <Typography variant='h1' style={{textAlign:"center",marginTop:"20%"}}>
            Welcome User
        </Typography>
    )
}

export default Home
