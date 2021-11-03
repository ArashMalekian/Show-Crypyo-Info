import React from 'react'
// //style
// import styles from "./Item.module.css"
//material
import { Avatar, Grid, Typography } from '@mui/material';




export const Item = (props) => {

    const {image , name , symbol , current_price , market_cap , high_24h , low_24h} = props.data
    
    return (
        <Grid container alignSelf="center" border={3} borderColor="gold" borderRadius={2} display="flex" justifyContent="space-around" alignItems="center" m={2} p={2} >
            <Grid item alignSelf="center" display="flex"  xs={7} md={10} lg={2} justifyContent="space-around"  >
            <Typography variant="h5" color="secondary.light" fontWeight="bold"    >{symbol.toUpperCase()}</Typography>
            <Avatar  src={image} alt="imagec"   />
            </Grid>
            <Grid item  xs={6} md={3} lg={2} >
            <Typography variant="h5" color="#fefefe"   >{name}</Typography  >
            </Grid>
            <Grid item  xs={6} md={3} lg={2} >
            <Typography color="gold"   > $ {current_price.toLocaleString()} </Typography >
            </Grid>
            <Grid item  xs={6} md={3} lg={2} >
            <Typography color="#fefefe"  fontWeight="bold"   >{market_cap.toLocaleString() } MC</Typography  >
            </Grid>
            <Grid item xs={6} md={3} lg={2} >
            <Typography  color="red"  fontWeight="bolder" >$ {high_24h} &#8593; </Typography>
            <Typography color="green" fontWeight="bolder" >$ {low_24h} &#8595;</Typography>
            </Grid >
        </Grid>

    )
}
