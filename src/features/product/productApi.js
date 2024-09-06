import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../app/constants/api_urls';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/products`
  }),

  endpoints: (builder) => ({

    getAllProducts: builder.query({     //This query is get method

      query: (q) => ({       //this query is read garda setup ko process || configuration query || q vaneko chai params

        url: '/',
        method: 'GET',
      }),
      providesTags: ['Products']
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
      providesTags: ['Products']
    }),

    addProduct: builder.mutation({
      query: (q) => ({
        url: `/`,
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST',
      }),
      invalidatesTags: ['Products']
    }),

    updateProduct: builder.mutation({
      query: (q) => ({
        url: `/${q.id}`,
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'PATCH',
      }),
      invalidatesTags: ['Products']
    }),

    removeProductById: builder.mutation({
      query: (q) => ({
        url: `/${q.id}`,
        headers: {
          Authorization: q.token
        },
        method: 'DELETE',
      }),
      invalidatesTags: ['Products']
    }),

    addReview: builder.mutation({
      query: (q) => ({
        url: `/reviews/${q.id}`,
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST',
      }),
      invalidatesTags: ['Products']
    })

  })
});


export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddProductMutation, useRemoveProductByIdMutation, useUpdateProductMutation, useAddReviewMutation } = productApi;

