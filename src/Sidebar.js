import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home";
import Twitter from "@material-ui/icons/Twitter";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import {auth} from "./Firebase";

function Sidebar() {
  const history = useHistory();
  const[{user}] = useStateValue();
  const authentication = () => {
    if(!user){
      history.push("/login")
    }
    else{
      auth.signOut()
      .then(() => {
alert("SignOut successful!!");
      })
      .catch(error => alert(error.message))
    }
  }
  const change = (e) => {
  
    history.push("/");
  }
  return(
   <div className="sidebar">
     <div class ="home" >
<Twitter className="twitter-icon" onClick={change} />
     </div>

     <SidebarOption  Icon = {HomeIcon} text="Home"  />
     <SidebarOption Icon ={SearchIcon} text="Explore" />
     <SidebarOption Icon={NotificationsNoneIcon} text = "Notifications" />
     <SidebarOption Icon={MailOutlineIcon} text ="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text= "Lists" />
      <SidebarOption Icon={PermIdentityIcon} active={false} text= "Profile"/>
      <SidebarOption Icon={MoreHorizIcon} text = "More" />
    
    <Button onClick={authentication} fullWidth className="tweet-btn" variant="outlined" >{!user ? "Login":"SignOut"}</Button>
   </div> 
  );
}
export default Sidebar;
