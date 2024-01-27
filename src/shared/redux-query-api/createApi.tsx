import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IPost {
  "userId": number
  "id": number
  "title": string
  "body": string
}  

// API для запроса информации о постах из jsonplaceholder

export const postApi = createApi({
  reducerPath:'post',
  baseQuery: fetchBaseQuery({ baseUrl:'https://jsonplaceholder.typicode.com' }),
  endpoints: ( build ) => ({
      fetchAllPosts: build.query< IPost[], { limit:number, start:number }> ({ // запрос всех постов
          query:( {limit, start = 0 } )=>({
              url:'/posts',
              params: { _limit:limit, _start:start, }
          })
      }),
      fetchPostById: build.query< IPost,number >({ // запрос поста по id 
          query:( id:number=1 )=>({ url:`/posts/${ id }`,})
      })
  })
})