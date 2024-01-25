// PostItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import IPost from '../store/createApi';

interface IPostItemProps {
  post: IPost;
}

const PostItem: FC<IPostItemProps> = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className='container__postItem'>
        <div>№ {post.id}</div>
        <div className='postitem__title'>Title: {post.title}</div>
        <div className='postitem__body'>
          Body: {post.body.length > 20 ? post.body.substring(0, 20) + '...' : post.body}
        </div>
      </div>
    </Link>
  );
};

export {PostItem};
