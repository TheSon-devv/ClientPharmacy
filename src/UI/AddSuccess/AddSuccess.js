import React from 'react'
import classes from "./add.module.css";

const AddSuccess = (props) => {
    return (
        <div className={classes.container}>
            {props.title}
        </div>
    )
}

export default AddSuccess
