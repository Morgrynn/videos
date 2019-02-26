import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = {  }

    onSearchSubmit = (term) => {
        // console.log(term)
        youtube.get('/search', {
            params: {
                q: term
            }
        })
            
    }

    render() { 
        return ( 
            <div className="container">
                <div className="flex-row">
                    <SearchBar onSearchSubmit={this.onSearchSubmit} />
                </div>
            </div>
         );
    }
}
 
export default App;
