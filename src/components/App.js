import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="flex-row">
                    <SearchBar />
                </div>
            </div>
         );
    }
}
 
export default App;
