import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shazamAPI = createApi({
  reducerPath: 'shazamAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-api6.p.rapidapi.com/shazam',
    prepareHeaders: headers => {
      headers.set(
        'X-RapidAPI-Key',
        'ac30d3be15msh942ae1ac8ed7d15p1ef52fjsn6f13bf2bd364'
      )
      headers.set('X-RapidAPI-Host', 'shazam-api6.p.rapidapi.com')
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/top_tracks_country?country_code=US' }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/top_tracks_country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search_track/?query=${searchTerm}` }),
    getSearchArtist: builder.query({ query: (searchArtist) => `/search_artist/?query=${searchArtist}` }),
  }),

});

export const{
    useGetTopChartsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetSearchArtistQuery,
} = shazamAPI;
