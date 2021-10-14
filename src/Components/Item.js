import React from 'react'
//style
import styles from "./Item.module.css"


export const Item = (props) => {

    const {image , name , symbol , current_price , market_cap , high_24h , low_24h} = props.data
    return (
        <div className={styles.container} >
            <img src={image} alt ="imagec" />
            <h1>{name}</h1>
            <h4>{current_price.toLocaleString()} $</h4>
            <h4>{market_cap.toLocaleString() }</h4>
            <div className={styles.pcontainer} >
            <h2 className={styles.high}  >&#8593; {high_24h} $</h2>
            <h2 className={styles.low} >&#8595; {low_24h} $</h2>
            </div>


        </div>
    )
}
