import React,{forwardRef} from "react";
import "./FeedPost.css";
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const FeedPost = forwardRef(
  ({text,displayName,userName,avatar,image},ref) => {
  
    return(
  <div className="feed_post" ref={ref}>
   <div className="profile_avatar">
     <Avatar src={avatar} /> 
   </div>
   <div className="post_body">
     <div className="post_header">
      <h3>{displayName}{" " }
      <span>
        <VerifiedUserIcon className="badge"/> 
        <span className="post_header_username">@{userName}</span>
        </span>
      </h3>
     </div>
     <div className="post_header_description">
     <p>{text}</p>
     </div>
     <div className="post_image">
     {image && <img src={image} alt=" "/>}
     <div className="post_footer">
     <ChatBubbleOutlineIcon fontSize="small"/>
     <RepeatIcon fontSize="small" />
<FavoriteBorderIcon fontSize="small" />
     <PublishIcon fontSize="small" />

     </div>
     </div>
     </div>

  </div>
  );
});
export default FeedPost;
