
import { FC, useEffect, useState } from 'react';
import { postApi } from '../shared/redux-query-api'
import { PostItem } from '../widgets';

export const PostContainer: FC = () => {
  const [currentPostStart,setCurrentPostStart]=useState(0)
  const {data:posts, isLoading} = postApi.useFetchAllPostsQuery({limit:10,start:currentPostStart})
  const [isMyFetching, setIsFetchingDown]=useState(false) // состояние когда скролл достиг нижней части 
  const [isMyFetchingUp, setIsMyFetchingUp]=useState(false) // состояние когда скролл достиг верхней части 

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
/*
Если верхняя часть документа прокручена менее чем на 50 пикселей, то состояние isMyFetchingUp = true.
Если разница между общей высотой и значением прокрутки минус высота окна меньше чем 50 пикселей, то состояние isFetchingDown = true, и происходит прокрутка окна до конца документа.
*/ 
  const scrollHandler = (e:any):void => {
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
          {isLoading&&<div>Загрузка данных...</div>}
      </div>
  );
};

