import React from 'react'

//style
import styles from "./Nav.module.css"

export const Nav = (props) => {
    return (
        <div className={styles.container} >
            <h2 className={styles.title} >Crypto Currencies Information</h2>
            <span>
            {props.input}
            </span>
        </div>
    )
}
