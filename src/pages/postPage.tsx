// PostPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { postApi } from "../shared/redux-query-api";
import type { FC } from "react";
import {Preloader} from "../widgets"
import "./index.css"

export const PostPage: FC = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const { data: posts, isLoading } = id ? postApi.useFetchPostByIdQuery(parseInt(id)) : { data: undefined, isLoading: true };

  return (
    <div className="block-in-centre-outer">
      <div className="card block-in-centre-inner">
        {isLoading ? (
          <div className="preloader">
            <Preloader/>
          </div>
        ) : (
          <div className="card-content">
            <span>post: {posts?.id}</span>
            <span className="title-style">{posts?.title}</span>
            <p className="description-post-style">{posts?.body}</p>
          </div>
        )}
        <button className="waves-effect waves-light btn-large" onClick={() => navigate(-1)}>Назад</button>
      </div>
    </div>
  );
};

