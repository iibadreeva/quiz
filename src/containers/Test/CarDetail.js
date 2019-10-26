import React from 'react'

export default class CarDetail extends React.Component {
    render(){
        return(
            <div style={{textAlign:'center', background: '#aaa'}}>
                <button onClick={() => this.props.history.goBack()}>go back</button>
                <h1>{this.props.match.params.name}</h1>
            </div>
        )
    }
}