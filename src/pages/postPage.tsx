// PostPage.tsx
import { useParams, useNavigate } from 'react-router-dom';
//import { useQuery } from '@reduxjs/toolkit/query/react';
import { postApi } from '../store/createApi';
import type { FC } from 'react';

const PostPage: FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const { data: posts, isLoading } = id ? postApi.useFetchPostByIdQuery(+id) : { data: undefined, isLoading: true };

  return (
    <div>
      {isLoading ? (
        <div>Loading data...</div>
      ) : (
        <>
          <div>№ {posts?.id}</div>
          <div className='postitem__title'>Title: {posts?.title}</div>
          <div className='postitem__body'>Body:{posts?.body}</div>
          <p>Страница есть!</p>
        </>
      )}
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export { PostPage }
