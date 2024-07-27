import UserProfile from "./userProfile";
import CommentVote from "./commentVote";

function Comment({ comment }) {
  return (
    <li className="comment">
      <div className="comment__head">
        <UserProfile author={comment.author} />
        <div className="comment__info-wrapper">
          <p className="comment__content">{comment.content}</p>
          <CommentVote
            votes={comment.votesCount}
            like={comment.like}
            dislike={comment.dislike}
          />
        </div>
      </div>
    </li>
  );
}

export default Comment;
