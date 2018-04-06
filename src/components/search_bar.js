import React, { Component } from 'react';
class SearchBar extends Component{
    
    constructor(props){
        super(props);
        this.state = {term:''}
    }
    render(){
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onSearchChanges(event.target.value)}
                />
            </div>
        );
    }
    onSearchChanges(term){
        this.setState({term});
        this.props.onSearchChange(term);
    }
}
    
export default SearchBar;