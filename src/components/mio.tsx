'use client'
import { useGetValor, incrementValor } from '@/queries/numero';
import React from 'react';
import { useQuery } from '@tanstack/react-query';


const ComponentName: React.FC = () => {
    const { data: valor} = useQuery(useGetValor);
    console.log(valor?.valor);
    const {mutate: increment} = incrementValor();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        increment();
    };
    return (
        <div>
            {valor?.valor}
            <button onClick={handleClick}>
            Increment
        </button>
        </div>
    );
};


export default ComponentName;