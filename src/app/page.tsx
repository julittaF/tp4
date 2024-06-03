'use client'
import React, { use } from 'react';
import {useGetValor} from '@/queries/numero'
import {getContador} from '@/services/numero'
import { HydrationBoundary, QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import exp from 'constants';
import ComponentName from '@/components/mio'

export default async function Page() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: useGetValor.queryKey,
        queryFn: getContador
      })
      return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ComponentName />
        </HydrationBoundary>
      </div>
    </main>

      )
}