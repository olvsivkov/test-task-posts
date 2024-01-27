// PostPage.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { postApi } from '../shared/redux-query-api';
import type { FC } from 'react';


export const PostPage: FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const { data: posts, isLoading } = id ? postApi.useFetchPostByIdQuery(parseInt(id)) : { data: undefined, isLoading: true };

  return (
    <div>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <>
          <div>№ {posts?.id}</div>
          <div className='postitem__title'>Title: {posts?.title}</div>
          <div className='postitem__body'>Body:{posts?.body}</div>
        </>
      )}
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

