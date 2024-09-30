import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query'
import { GenericResponse } from '../model/common'

const useGetQuery = <TQueryFnData, TError, TQueryKey extends QueryKey, T extends QueryKey, TData = GenericResponse<T>>({
  queryKey,
  queryFn,
  staleTime = 0,
  refetchOnWindowFocus = false,
  retry = 0,
  ...options
}: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>): UseQueryResult<TData, TError> => {
  return useQuery({
    queryKey,
    queryFn,
    staleTime,
    refetchOnWindowFocus,
    retry,
    ...options,
  })
}

export default useGetQuery
