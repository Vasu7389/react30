import { CommentInfoContext } from "../context/commentInfoContext";
import { useContext } from "react";

function DeleteButton() {
  const { commentId, onSetCommentList } = useContext(CommentInfoContext);
  const handleDeleteMessage = () => {
    onSetCommentList((commentInfo) => ({
      ...commentInfo,
      comments: [
        ...commentInfo.comments.filter((comment) => comment.id !== commentId),
      ],
    }));
  };

  return (
    <button
      className="comment__delete-comment-btn"
      aria-label="delete comment"
      onClick={handleDeleteMessage}
    >
      <img src="/icons/delete.svg" alt="" aria-hidden="true" />
      delete
    </button>
  );
}

export default DeleteButton;
