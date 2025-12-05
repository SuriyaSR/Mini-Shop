
import type { Category } from "@/types/category"
import { baseApi } from './baseApi'

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => 'products/categories',
    }),
    getProductByCategory: builder.query<Category, string>({
        query: (categoryName) => `products/category/${categoryName}`
    })
  }),
  overrideExisting: false,
})

export const { useGetCategoriesQuery, useGetProductByCategoryQuery } = categoryApi;