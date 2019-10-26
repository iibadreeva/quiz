import React from 'react'
import {withRouter} from 'react-router-dom'

const Car = (props) => {
    return(
        <li
            onClick={() => props.history.push('/test2/'+props.name.toLowerCase())}
        >
            {props.name}
        </li>
    )
}

export default withRouter(Car)