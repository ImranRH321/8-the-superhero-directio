import React from 'react';
import './../person/Person'

const Sum = (props) => {
    const total = props.hair.reduce((prevSalary, currentSalary) => prevSalary + currentSalary.salary, 0)
    return (
        <div className="border m-2 p-3 bg-dark text-white shadow-lg  mb-5 bg-dark rounded">
            <h1>Added Person : {props.hair.length}</h1>
            <h3 className="text-warning">Total : {total}</h3>
            <ul>
                {
                    props.hair.map(person => <li key={person.key}>{person.name}</li>)
                }
            </ul>
        </div>

    );
};

export default Sum;