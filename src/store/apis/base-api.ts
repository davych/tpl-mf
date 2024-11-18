import { createApi } from '@reduxjs/toolkit/query/react'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import { AxiosError, AxiosRequestConfig } from 'axios'
import axiosInstance from './http'

const axiosQuery = () => {
  interface QueryFnResponse {
    data?: any
    error?: {
      status: number | undefined
      data: any
    }
  }

  const queryFn: BaseQueryFn<AxiosRequestConfig, unknown, unknown> = async (
    axiosConfig: any,
  ): Promise<QueryFnResponse> => {
    try {
      const result = await axiosInstance({
        ...axiosConfig,
        data: axiosConfig?.body,
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

  return queryFn
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosQuery(),
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
})
