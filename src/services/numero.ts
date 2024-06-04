'use server'
import prisma from '@/lib/prisma'


export async function getContador() {
  return prisma.contador.findFirst()  //busca el primer valor de la tabla contador
}

export async function incrementContador() {
  const contador = await prisma.contador.findFirst()
  if (!contador) throw new Error('Contador not found') //si no encuentra el contador, lanza un error

  return prisma.contador.update({ //actualiza el valor del contador
    where: { id: contador.id },
    data: { valor: contador.valor + 1 }, //incrementa el valor del contador +1
  })
}