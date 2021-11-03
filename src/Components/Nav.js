import React from 'react'

// //style
// import styles from "./Nav.module.css"

//material
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';



export const Nav = (props) => {
    return (
        <Grid container justifyContent="space-around" alignItems="center" borderBottom={3} marginBottom={7} borderColor="gold" p={2}  >
                <Grid xs={7} md={5}>
                    <Typography variant="h5" color="secondary.light" fontWeight="bold" margin={1}  >Crypto Currencies</Typography>
                </Grid>
                <Grid xs={7} md={5} >
                    {props.input}
                </Grid>
        </Grid>
    )
}
