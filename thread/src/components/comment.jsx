import UserProfile from "./userProfile";
import CommentVote from "./commentVote";

function Comment({comment}){
    return (
        <li className="comment">
            <div className="comment__head"> 
                <UserProfile author={comment.author} />
                <p className="comment__content">{comment.content}</p>
                <CommentVote votes={comment.votesCount} />
            </div>
        </li>
    )
}

export default Comment;