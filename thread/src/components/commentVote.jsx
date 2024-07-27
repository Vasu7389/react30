import { useContext, useRef } from "react";
import { CommentInfoContext } from "../context/commentIdContext";

function CommentVote({ votes, like, dislike }) {
  const { commentId, onSetCommentList } = useContext(CommentInfoContext);
  const upVoteRef = useRef(null);
  const downVoteRef = useRef(null);
  const updateComment = (comment, dislikeValue, likeValue, voteCountValue) => {
    return {
      ...comment,
      dislike: dislikeValue,
      like: likeValue,
      votesCount: voteCountValue,
    };
  };

  const newComments = (operation, comments) => {
    return comments.map((comment) => {
      const targetComment = commentId === comment.id;

      if (targetComment && operation === "upvote" && comment.like) {
        return updateComment(comment, false, false, votes - 1);
      } else if (
        targetComment &&
        operation === "upvote" &&
        comment.dislike &&
        !comment.like
      ) {
        return updateComment(comment, false, true, votes + 2);
      } else if (targetComment && operation === "upvote" && !comment.like) {
        return updateComment(comment, false, true, votes + 1);
      } else if (targetComment && operation === "downvote" && comment.dislike) {
        return updateComment(comment, false, false, votes + 1);
      } else if (
        targetComment &&
        operation === "downvote" &&
        !comment.dislike &&
        comment.like
      ) {
        return updateComment(comment, true, false, votes - 2);
      } else if (
        targetComment &&
        operation === "downvote" &&
        !comment.dislike
      ) {
        return updateComment(comment, true, false, votes - 1);
      }
      return comment;
    });
  };

  const handleClick = (e) => {
    onSetCommentList((commentInfo) => ({
      ...commentInfo,
      comments: newComments(e.target.dataset.voteInfo, commentInfo.comments),
    }));
  };

  return (
    <div className="comment__vote-count">
      <label
        aria-label="upvote comment"
        className="comment__vote-btn"
        htmlFor={`upvote-${commentId}`}
      >
        <input
          type="radio"
          name={`vote-${commentId}`}
          id={`upvote-${commentId}`}
          className="vote-btn__checkbox"
          ref={upVoteRef}
          data-vote-info="upvote"
          checked={like}
          onChange={(e) => (like = e.target.value)}
          onClick={handleClick}
        />
        <div className="vote-btn__checkbox-icon">
          <img src="/icons/upvote.svg" alt="" aria-hidden="true" />
        </div>
      </label>
      <label
        aria-label="downvote comment"
        className="comment__vote-btn comment__vote-btn--downvote"
        htmlFor={`downvote-${commentId}`}
      >
        <input
          type="radio"
          name={`vote-${commentId}`}
          id={`downvote-${commentId}`}
          className="vote-btn__checkbox"
          ref={downVoteRef}
          data-vote-info="downvote"
          checked={dislike}
          onChange={(e) => (like = e.target.value)}
          onClick={handleClick}
        />
        <div className="vote-btn__checkbox-icon">
          <img src="/icons/downvote.svg" alt="" aria-hidden="true" />
        </div>
      </label>
      <p className="vote-count__numbers">{votes}</p>
    </div>
  );
}

export default CommentVote;
