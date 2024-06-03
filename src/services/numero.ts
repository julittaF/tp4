'use server'
import prismaClient from '@/lib/prisma'


export async function getContador() {
  return prismaClient.contador.findFirst() 
}

// export async function incrementContador() {
//   const contador = await prisma.contador.findFirst()
//   if (!contador) throw new Error('Contador not found')

//   return prisma.contador.update({
//     where: { id: contador.id },
//     data: { valor: contador.valor + 1 },
//   })
// }