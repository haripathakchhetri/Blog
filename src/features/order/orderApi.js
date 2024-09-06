import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../app/constants/api_urls';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/orders`
  }),

  endpoints: (builder) => ({

    // getAllOrders: builder.query({     //This query is get method

    //   query: (q) => ({       //this query is read garda setup ko process || configuration query || q vaneko chai params

    //     url: '/',
    //     method: 'GET',
    //   }),
    //   providesTags: ['Orders']
    // }),

    getOrderById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
      providesTags: ['Orders']
    }),

    addOrder: builder.mutation({
      query: (q) => ({
        url: `/`,
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST',
      }),
      invalidatesTags: ['Orders']
    }),

    getOrderByUser: builder.query({
      query: (token) => ({ //object ma pass nagardani hunxa yesma direct token pass gardiye hunxa
        url: `/users`,
        headers: {
          Authorization: token
        },
        method: 'GET',
      }),
      providesTags: ['Orders']
    }),


  })
});


export const { useAddOrderMutation, useGetOrderByIdQuery, useGetOrderByUserQuery } = orderApi;

