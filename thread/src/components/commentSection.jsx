import { useState, useEffect } from "react";

import { CommentInfoContext } from "../context/commentIdContext";

import CommentSectionHead from "./commentSectionHead";
import CommentForm from "./commentForm";
import Comment from "./comment";

import comments from "../data/data.json";

function CommentSection() {
  const saveComments = JSON.parse(localStorage.getItem("commentList"));
  const saveId = localStorage.getItem("commentCurrentId");

  const [commentList, setCommentList] = useState(saveComments || comments);
  const [id, setId] = useState(saveId || 3);

  const commentListItem = commentList.comments.map((comment) => (
    <CommentInfoContext.Provider
      value={{ commentId: comment.id, onSetCommentList: setCommentList }}
      key={comment.id}
    >
      <Comment comment={comment} />
    </CommentInfoContext.Provider>
  ));
  const currentUser = commentList.currentUser;

  useEffect(() => {
    localStorage.setItem("commentList", JSON.stringify(commentList));
    localStorage.setItem("commentCurrentId", id);
  }, [commentList, id]);

  return (
    <>
      <CommentSectionHead />
      <ul className="comment-container">{commentListItem}</ul>
      <CommentForm
        user={currentUser}
        currentId={id}
        onSetCurrentId={setId}
        onSetCommentList={setCommentList}
      />
    </>
  );
}

export default CommentSection;
