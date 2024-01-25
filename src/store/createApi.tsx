import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export default interface IPost {
  "userId": number
  "id": number
  "title": string
  "body": string
}  

export const postApi = createApi({
  reducerPath:'post',
  baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
  endpoints: (build) => ({
      fetchAllPosts: build.query<IPost[], {limit:number,start:number}> ({
          query:( {limit = 5, start = 0 } )=>({
              url:'/posts',
              params: { _limit:limit, _start:start, }
          })
      }),
      fetchPostById: build.query<IPost,number>({
          query:(id:number=1)=>({ url:`/posts/${id}`,})
      })
  })
})