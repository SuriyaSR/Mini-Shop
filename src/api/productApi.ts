import type { ProductListResponse, Product } from "@/types/product"
import { baseApi } from './baseApi'

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductListResponse, void>({
      query: () => 'products',
    }),
    searchProducts: builder.query<ProductListResponse, string>({
      query: (searchText) => `products/search?q=${searchText}`,
    }),
    getProductById: builder.query<Product, number | string>({
        query: (id) => `products/${id}`
    })
  }),
  overrideExisting: false,
})

export const { useGetProductsQuery, useGetProductByIdQuery, useSearchProductsQuery} = productApi