import React, {Component} from 'react'
import Car from './Car'

class Test2 extends Component {
    state = {
        cars: [{name: 'Ford'},{name: 'Audi'},{name: 'Mazda'},]
    }

    goToHomePage = () => {
        this.props.history.push({
            pathname: '/'
        })
    }

    render() {
        return(
            <div style={{
                background: '#ccc',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button onClick={this.goToHomePage}>Go home</button>
                <ul>
                    { this.state.cars.map((car, i) => <Car key={i} name={car.name} />) }
                </ul>
            </div>
        )
    }
}

export default Test2