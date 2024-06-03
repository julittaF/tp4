'use client'
import {getContador} from '@/services/numero'
import { queryOptions } from '@tanstack/react-query'


export const useGetValor = queryOptions({
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