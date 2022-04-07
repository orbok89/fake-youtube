import React, { Component } from 'react';
import _ from 'lodash'
import ReactDOM from 'react-dom';
import Search_bar from './components/search';
import Videolist from './components/videolist';
import YTSearch from 'youtube-api-search';
import VideoDet from  './components/video.js'
const api_key='AIzaSyBnNKmv_BGz3_WynH3ta2XT7VkFpGn31JM';



class App extends Component{
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
             
        };
        this.videoSearch('prova')
    }
    videoSearch(term){
        YTSearch({key:api_key, term:term}, (data)=>{
            this.setState({videos : data, selectedVideo: data[0]})
        });
    }
    render(){
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300)
        return (
            <div>
                <Search_bar onSearch={videoSearch}/>
                <VideoDet video={this.state.selectedVideo} />
                <Videolist
                    onVideoselect= {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>)
    }
    
}

ReactDOM.render(<App />,document.querySelector('.container') ); 