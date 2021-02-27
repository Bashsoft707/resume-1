import React from 'react';
import { Card } from '../card-component/card-component';
import '../card-list-component/card-list.css';

export const CardList = props => (
    <div className='card-list'>
        {props.cops.map(cop => ( 
            <Card key={cop.id} cop={cop} />
        ))}
    </div>
);