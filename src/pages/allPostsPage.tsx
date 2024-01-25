
import { FC, useEffect, useState } from 'react';
import { postApi } from '../store/createApi'
import { PostItem } from './postItem';

/*const PostItem:FC<IPostItemProps> = ({post}) => {
  return (
      <div className='container__postItem'>
          <div>№ {post.id}</div>
          <div className='postitem__title'>Title: {post.title}</div>
          <div  className='postitem__body'>
            Body:  {post.body.length>20?post.body.substring(0,20)+'...':post.body}
          </div>
      </div>
  );
};*/

const PostContainer: FC = () => {
  const [currentPostStart,setCurrentPostStart]=useState(0)
  const {data:posts, isLoading} = postApi.useFetchAllPostsQuery({limit:10,start:currentPostStart})
  const [isMyFetching,setIsFetchingDown]=useState(false)
  const [isMyFetchingUp,setIsMyFetchingUp]=useState(false)

  useEffect(()=>{
      if(isMyFetching)
      {
          setCurrentPostStart(prev=>{
              return prev<90?prev+1:prev
          })
          setIsFetchingDown(false)  
      }
  },[isMyFetching])

  useEffect(()=>{
  if(isMyFetchingUp)
  {
      setCurrentPostStart(prev=>{
          return prev>0?prev-1:prev
      })
      setIsMyFetchingUp(false)  
  }
  },[isMyFetchingUp])

  useEffect(()=>{
    document.addEventListener('scroll',scrollHandler)
    return ()=>{
      document.removeEventListener('scroll',scrollHandler)
    }
  },[])

  const scrollHandler=(e:any):void=>{
      if(e.target.documentElement.scrollTop<50)
      {
          setIsMyFetchingUp(true)
      }
      if(e.target.documentElement.scrollHeight-e.target.documentElement.scrollTop-window.innerHeight<50)
      {
          setIsFetchingDown(true)
          window.scrollTo(0,(e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
      }
  }
  return (
      <div>
          <div className='post__list'>
              {posts?.map(post=><PostItem key={post.id} post={post}/>)}
          </div>
          {isLoading&&<div>Загрузка данных</div>}
      </div>
  );
};

export {PostContainer}