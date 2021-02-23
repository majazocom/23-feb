import React from 'react';

class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            maxCount: this.props.max,
            name: "Maja"
        }
    }

    render() {

        const func = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        const changeName = (e) => {
            this.setState({
                name: e.target.value
            })
        }

        return (
            <section>
                <h1>Class component {this.props.max}</h1>
                <p>{this.state.count}</p>
                <button onClick={func} >+</button>
                <p>Insert name:</p>
                <input onChange={changeName} value={this.state.name}></input>
            </section>
        )
    }
}

export default ClassComponent;