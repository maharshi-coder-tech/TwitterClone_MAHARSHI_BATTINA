import React,{useState} from 'react';
import {Button,Avatar} from "@material-ui/core";
import "./TweetBox.css";
import {db} from "./Firebase";
import ImageIcon from "@material-ui/icons/Image";
import {useStateValue} from "./StateProvider";

function TweetBox() {
   const[{user}] = useStateValue();
   const[{profile}] = useStateValue();

   const[message,setMessage] = useState("");
  const[imageFile,setImageFile] = useState("");
   const[file,setFile] = useState("");

  const submitTweet = (e) => {

   e.preventDefault();
  db.collection('posts').add({
    displayName:"manish yadav",
     verified:true,
username:user?user.email:"Guest",
avatar:"",  
text:message,
image:file,

  });
  setMessage("");
  setFile("");

  } 

 const fileHandler = (e) => {
try{
  const reader = new FileReader();
reader.onload = () => {
  if(reader.readyState === 2){
setFile(reader.result);
  }
}
reader.readAsDataURL(e.target.files[0]);
 }catch(error){
    {/*alert(error.message);*/}
 }
}

  return(
     <div className="tweet-box">
        <form>
           <div className="tweet-box-username"><span>Hello,</span>{user?user.email:"Guest"}</div>
           <div className="tweet_input">
             <Avatar>{user?.email[0].toUpperCase()}</Avatar>
             <input onChange={e => setMessage(e.target.value)} value={message}type="text" placeholder="What's happening" />
           
           </div>
           <div className="tweet-box_image">
 <input accept="image" type="file" id="image-input" name="file" onChange={fileHandler} />
 <label className="image-label" for="image-input">
    <ImageIcon className="image-label-icon" />
 </label>
 
              </div>
           <Button onClick ={submitTweet} className="tweet-box_btn" variant="outlined">Tweet</Button>
        </form>
        
     </div>
  
  );
}
export default TweetBox;
