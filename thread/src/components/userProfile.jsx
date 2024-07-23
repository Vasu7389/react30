import DeleteButton from "./deleteButton";

function UserProfile({author}){
    return (
        <div className="comment__info">
            <div className="comment__info__wrapper">
                <img src={author.userProfileUrl} alt="user profile" className="comment__info__user-profile"/>
                <p className="comment__info__name">{author.userName}</p>
            </div>
            <DeleteButton />
        </div>        
    )
}

export default UserProfile;