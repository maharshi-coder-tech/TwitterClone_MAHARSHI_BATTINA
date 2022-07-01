import React from "react" ;
import SearchIcon from "@material-ui/icons/Search";
import "./Widgets.css";

import {TwitterShareButton,TwitterTweetEmbed,TwitterTimelineEmbed,} from "react-twitter-embed";

function Widgets (){
  return(
  <div className="widgets">
    <div className="widgets_input">
      <SearchIcon className="input-search-icon"/>
      <input type="text" placeholder ="Search Twitter" />
    </div>
<div className="widget">
  <h2>What's happening?</h2>
<TwitterTweetEmbed tweetId="858551177860055040" />
<TwitterTimelineEmbed sourceType ="profile"
screenName="cleverQazi"
options={{ height : 400 }} />
<TwitterShareButton 
url ={"https://facebook.com/cleverprogrammer"}
options={{text:"#React js is awesome!", via: "cleverqazi" }}/>
</div>

  </div>
  );
}
export default Widgets;