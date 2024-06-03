'use client'
import { useGetValor } from '@/queries/numero';
import React from 'react';
import { useQuery } from '@tanstack/react-query';


const ComponentName: React.FC = () => {
    const { data: valor, isLoading, isError } = useQuery(useGetValor);
    console.log(valor?.valor);
    return (
        <div>
            {valor?.valor}
            <button>Actualizar</button>
        </div>
    );
};

export default ComponentName;