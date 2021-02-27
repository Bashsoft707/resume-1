import React from 'react';
import '../card-component/card.css';

export const Card = props => (  
        <div className="card-container">
            <img src={`https://robohash.org/${props.cop.id}?set=set2`} alt="cop" />
            <h2>{props.cop.name}</h2>
            <h2>{props.cop.email}</h2>
        </div>
    )