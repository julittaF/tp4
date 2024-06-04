'use client'
import { useGetValor, incrementValor } from '@/queries/numero';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
const ComponentName: React.FC = () => {
    const { data: valor } = useQuery(useGetValor);
    console.log(valor?.valor);
    const { mutate: increment } = incrementValor();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        increment();
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '98vh', backgroundColor: '#f0f0f0' }}>
    <div style={{ fontSize: '2em', color: '#333', marginBottom: '0.5em' }}>
        {valor?.valor}
    </div>
    <button style={{ padding: '0.5em 1em', fontSize: '1em', color: '#fff', backgroundColor: '#2d2525', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleClick}>
        Increment
    </button>
</div>
    );
};


export default ComponentName;