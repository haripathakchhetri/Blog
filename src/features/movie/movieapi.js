import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://freetestapi.com' }),

  endpoints: (builder) => ({
    getAllStudents: builder.query({
      url: '/movie',
      method: 'GET',
    })
  })
})

export const { useGetAllMovieQuery } = movieApi; 