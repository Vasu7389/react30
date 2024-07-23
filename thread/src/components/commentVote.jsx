function CommentVote({votes}){
    return (
        <div className="comment__vote-count">
            <button aria-label="upvote comment" className="comment__vote-btn">
                <img src="/icons/upvote.svg" alt="" aria-hidden="true"/>
            </button>
            <button aria-label="downvote comment" className="comment__vote-btn comment__vote-btn--downvote">
                <img src="/icons/downvote.svg" alt="" aria-hidden="true"/>
            </button>
            <p>{votes}</p>
        </div>
    )
}

export default CommentVote;