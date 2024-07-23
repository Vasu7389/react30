import CommentForm from "./commentForm";
import Comment from "./comment";

import commentList from "../data/data.json";

function CommentSection() {
  const commentListItem = commentList.comments.map(comment => <Comment comment={comment} key={comment.id}/>)
  const currentUser = commentList.currentUser;
  return (
    <>
      <ul className="comment-container">
        {commentListItem}
      </ul>
      <CommentForm user={currentUser} />
    </>
  );
}

export default CommentSection;
