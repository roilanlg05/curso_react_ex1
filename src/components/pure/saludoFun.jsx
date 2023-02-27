import React, {useState} from 'react';
import PropTypes from 'prop-types';


const SaludoFun = (props) => {

    const [age, setage] = useState(20);
    const birthday = ()=>{
        setage(age +1)
    }
    return (
        <div>
            <h1>
                    Hola {props.name} desdencomponente funcional!
                </h1>
                <h2>
                    tu edad es de : {age}
                </h2>
                <div>
                    <button onClick={birthday}>
                        cumplir Ano
                    </button>
                </div>
        </div>
    );
    
};


SaludoFun.propTypes = {
    name : PropTypes.string,
};


export default SaludoFun;
