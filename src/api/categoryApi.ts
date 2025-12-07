
import type { Category } from "@/types/category"
import { baseApi } from './baseApi'
import type {  ProductListResponse } from "@/types/product";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => 'products/categories',
    }),
    getProductByCategory: builder.query<ProductListResponse, string>({
        query: (categoryName) => `products/category/${categoryName}`
    }),
    getProductCategoryImage: builder.query<ProductListResponse, string>({
        query: (categoryName) => `products/category/${categoryName}?limit=1`
    }),
  }),
  overrideExisting: false,
})

export const { useGetCategoriesQuery, useGetProductByCategoryQuery, useGetProductCategoryImageQuery } = categoryApi;