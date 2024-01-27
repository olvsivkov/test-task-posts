import { Link } from "react-router-dom";
import type { FC } from "react";
import {IPost} from "../shared/redux-query-api";
import "materialize-css/dist/css/materialize.min.css"
import "./index.css"

interface IPostItemProps {
  post: IPost;
}

// компонент отображение поста в списке постов

export const PostItem: FC<IPostItemProps> = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className="collection-item card-panel #f5f5f5 grey lighten-4 grey-text text-darken-2">
        <span>post: {post.id}</span>
        <span className="title-style"> {post.title}</span>
        <p className="hoverable">
          description:  {post.body.length > 20 ? post.body.substring(0, 50) + "..." : post.body}
        </p>
      </div>
    </Link>
  );
};

