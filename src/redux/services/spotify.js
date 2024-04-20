import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyAPI = createApi({
  reducerPath: 'spotifyAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com/search',
    prepareHeaders: headers => {
      headers.set(
        'X-RapidAPI-Key',
        '80fbde3664mshedb2c2f8b7d6af1p11c35ajsnc55d37ff80d2'
      )
      headers.set('X-RapidAPI-Host', 'spotify23.p.rapidapi.com')
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongDetails: builder.query({ query: ({ q }) => `/?q=${q}` }),
  }),

});

export const{
    useGetSongDetailsQuery,
} = spotifyAPI;



