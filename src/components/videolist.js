import React from "react";
import VideolistItem from './videolist-item.js'
const Videolist = (props)=>  {


    const VideoItems = props.videos.map((video)=>{
        return (

            <VideolistItem
                onVideoselect={props.onVideoselect}
                key={video.etag} 
                video={video} />)
    })


    return(

        <ul className="col-md-4 list-group">
        {VideoItems}
        </ul>
    )
}
export default Videolist