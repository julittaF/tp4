'use client'
import {getContador} from '@/services/numero'
import { queryOptions, useMutation, useQueryClient } from '@tanstack/react-query'


export const getValor = queryOptions({
    queryKey: ['valor'],
    queryFn: () => getContador(),
    // staleTime: Infinity,

})

// export const incrementValor = () => {
//     const queryClient = useQueryClient();
//     return useMutation( {
//         mutationKey : ['increment'],
//         mutationFn: async () => { 
//             return incrementContador()
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries(getValor)
//         },
//     })
// }