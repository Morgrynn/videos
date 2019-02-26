import React from 'react';

class SearchBar extends React.Component {
    state = { 
        term: ''
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: make sure to call callback from parent component
        this.props.onSearchSubmit(this.state.term)
    }

    
    render() { 
        return ( 
            <div className="search-bar flex-large">
                <form onSubmit={this.onFormSubmit}>
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
         );
    }
}
 
export default SearchBar;