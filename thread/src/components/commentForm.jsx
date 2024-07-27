import { useRef } from "react";

function CommentForm({ user, currentId, onSetCurrentId, onSetCommentList }) {
  const commentInput = useRef(null);

  const handleCommentInput = () => {
    if (!commentInput.current.validity.valueMissing) {
      commentInput.current.style = "border:2px solid transparent";
    }
    commentInput.current.style = `height:${commentInput.current.scrollHeight}px;`;
  };

  const handleSetCommentList = (event) => {
    event.preventDefault();

    if (commentInput.current.validity.valueMissing) {
      commentInput.current.style = "border:2px solid red;";
      commentInput.current.focus();
      return;
    } else {
      commentInput.current.style = "border:2px solid transparent;";
    }

    const newComment = {
      id: currentId,
      author: {
        userName: user.userName,
        userProfileUrl: user.userProfileUrl,
      },
      content: commentInput.current.value,
      votesCount: 0,
      like: false,
      dislike: false,
    };

    onSetCommentList((commentInfo) => ({
      ...commentInfo,
      comments: [...commentInfo.comments, newComment],
    }));
    onSetCurrentId((idCount) => ++idCount);

    commentInput.current.value = "";
    commentInput.current.focus();
  };

  return (
    <form noValidate className="comment__form" onSubmit={handleSetCommentList}>
      <div className="comment__form__wrapper">
        <img src={user.userProfileUrl} alt="curret user image" />
        <textarea
          name="comment"
          id="comment-area"
          className="comment__form__content"
          placeholder="Write a comment..."
          required
          ref={commentInput}
          onChange={handleCommentInput}
        ></textarea>
      </div>
      <button
        type="submit"
        aria-label="post comment"
        className="comment__post-comment-btn"
      >
        <img src="/icons/send.svg" alt="" />
      </button>
    </form>
  );
}

export default CommentForm;
