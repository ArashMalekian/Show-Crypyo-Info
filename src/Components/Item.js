import React from 'react'
//style
import styles from "./Item.module.css"


export const Item = (props) => {

    const {image , name , symbol , current_price , market_cap , high_24h , low_24h} = props.data
    return (
        <div className={styles.container} >
            <h3>{symbol.toUpperCase()}</h3>
            <img src={image} alt ="imagec" />
            <h1>{name}</h1>
            <h4> $ {current_price.toLocaleString()} </h4>
            <h4>{market_cap.toLocaleString() }</h4>
            <div className={styles.pcontainer} >
            <h2 className={styles.high}  >$ {high_24h} &#8593; </h2>
            <h2 className={styles.low} >$ {low_24h} &#8595;</h2>
            </div>


        </div>
    )
}
