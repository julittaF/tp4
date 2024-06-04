'use client'
import {getContador, incrementContador} from '@/services/numero'
import { queryOptions, useMutation, useQueryClient } from '@tanstack/react-query'


export const useGetValor = queryOptions({
    queryKey: ['valor'], //clave de la query
    queryFn: () => getContador(), //queryFn se usa para obtener datos
    // staleTime: Infinity,

})

export const incrementValor = () => {
    const queryClient = useQueryClient();
    return useMutation( {
        mutationKey : ['increment'],
        mutationFn: async () => {  //mutation se usa para modificar datos
            return incrementContador() //incrementa el valor
        },
        onSuccess: () => {
            queryClient.invalidateQueries(useGetValor) //invalida la query para que se vuelva a hacer? idk, eso entendí
        },
    })
}