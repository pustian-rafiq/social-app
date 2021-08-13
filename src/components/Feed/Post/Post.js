import './post.css'
import {MoreVert} from '@material-ui/icons'
function Post(){
    return(
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/1.jpeg" alt=""/>
                        <span className="postUsername">Rafiqul Islam</span>
                        <span className="postDate">10 minutes ago</span>
                    </div>
                    <div className="postTopRight">
                       <MoreVert/>
                    </div>
              
                </div>
                <div className="postCenter">
                    <span className="postText">It's my first post</span>
                    <img className="postImg" src="/assets/person/1.jpeg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" alt=""/>
                        <img className="likeIcon" src="/assets/heart.png" alt=""/>
                        <span className="postLikeCounter">20 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">10 Comments</span>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Post;