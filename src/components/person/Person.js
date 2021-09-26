import React from 'react';
import './Person.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Person = (props) => {
    // console.log(props.person)
    const { name, country, salary, language, position, img } = props.person;
    return (
        <div className="container">
            <div className="person">
                <img className="person-img" src={img} alt="" />
                <h4>{name}</h4>
                <h5>Country : {country}</h5>
                <h5>Salary : {salary}</h5>
                <p>Language : {language}</p>
                <p>{position}</p>
                <button onClick={() => props.handelAddPerson(props.person)} className="btn-regular btn-dark">{<FontAwesomeIcon icon={faShoppingCart} />
                }   Hire</button>
            </div>
        </div>
    );
};

export default Person;