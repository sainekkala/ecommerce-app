import React from 'react';

class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            value: this.state.value + 1
        });
    }

    decrement() {
        this.setState({
            value: this.state.value - 1
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h2>Counter: {this.state.value}</h2>
                            <button className="btn btn-success me-2" onClick={this.increment}>Increment</button>
                            <button className="btn btn-warning" onClick={this.decrement}>Decrement</button>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </React.Fragment>
        )
    }

}

export default CounterComponent;