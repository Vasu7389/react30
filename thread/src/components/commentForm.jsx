function CommentForm({ user }) {
  return (
    <form className="comment__form">
      <div className="comment__form__wrapper">
        <img src={user.userProfileUrl} alt="curret user image" />
        <textarea name="comment" id="comment-area" className="comment__form__content" rows={1} placeholder="Write a comment..."></textarea> 
      </div>
      <button type="submit" aria-label="post comment" className="comment__post-comment-btn">
        <img src="/icons/send.svg" alt=""/>
      </button>
    </form>
  );
}

export default CommentForm;