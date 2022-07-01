import React, {useState,useEffect} from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import FeedPost from "./FeedPost";
import {db} from "./Firebase";
import FlipMove from "react-flip-move";
import {useStateValue} from "./StateProvider.js";

function Feed(){
  const [posts,setPosts] = useState([]);
  const[{user}] = useStateValue();
  const [item,setItem] = useState([]);
  useEffect(() => {
   db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
   ))
  
db.collection('users').doc(user?.email).set({
   name:'manish',
text:"hi there",
})
.then(() => {
  console.log("succesful");;
})
.catch(error => {
  console.log(error);
})
  },[])
 //console.log(posts);
  return(
  <div className="feed">
   {/* Feed Header */}
   <div className="feed_header">
   <h2 className= "header">Home</h2>
  </div>
  {/*Feed  Box */}

<TweetBox/>
<FlipMove>
{posts.map(post=> (
<FeedPost key={Math.floor(Math.random()*1000)} displayName={post.displayName} userName={post.username} verified text={post.text} image={post.image?post.image:""} avatar  = {post.avatar}/>
))}
</FlipMove>
  </div>
  );
}
export default Feed;
