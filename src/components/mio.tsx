'use client'
import { getValor } from '@/queries/numero';
import React from 'react';
import { useQuery } from 'react-query';

interface Props {
    // Define the props for your component here
}

const ComponentName: React.FC<Props> = () => {
    // Implement your component logic here
    const { data: valor, isLoading, isError } = useQuery(getValor);

    return (
        <div>
            {/* Render your component UI here */}
        </div>
    );
};

export default ComponentName;