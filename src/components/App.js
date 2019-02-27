import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { 
        videos: [],

    }

    onSearchSubmit = async (term) => {
        // console.log(term)
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        // console.log(response) 
        this.setState({
            videos: response.data.items
        }) 
    }

    render() { 
        return ( 
            <div className="container">
                <div className="flex-row">
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />
                    <VideoList videos={this.state.videos} />
                    
                </div>
            </div>
         );
    }
}
 
export default App;
