import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamAPI = createApi({
  reducerPath: 'shazamAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-api6.p.rapidapi.com/shazam',
    prepareHeaders: headers => {
      headers.set(
        'X-RapidAPI-Key',
        '80fbde3664mshedb2c2f8b7d6af1p11c35ajsnc55d37ff80d2'
      )
      headers.set('X-RapidAPI-Host', 'shazam-api6.p.rapidapi.com')
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/top_tracks_country?country_code=IN' }),

  }),

});

export const{
    useGetTopChartsQuery,
} = shazamAPI;
