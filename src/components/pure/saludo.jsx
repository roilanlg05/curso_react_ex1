import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Saludo extends Component {
     myAge = 29

    constructor(props){
        super(props);
        this.state = {
            age : this.myAge
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola {this.props.name}!
                </h1>
                <h2>
                    tu edad es de : {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        cumplir Ano
                    </button>
                </div>
            </div>
        );
    }

    birthday = ()=>{
        this.setState((prevState)=>(
            {
                age: prevState.age +1 
            })
        )
    }
}


Saludo.propTypes = {
    name : PropTypes.string,
};


export default Saludo;
