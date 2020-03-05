import React,  { Component } from 'react';
import { MdSearch, MdClear } from 'react-icons/md';
import './style.css';
let input;

class SearchBar extends Component {
    input = React.createRef();
    state = {
        query: null
    }
    onClear = () => {
        this.input.current.value = null;
        this.props.clear();
    }
    eventListen = e => {
        let key = e.which || e.keyCode;
        if (key === 13) {
          this.props.setSearch(this.state.query);
        } 
    }
    handleChange = e => {
        this.setState({
            query: e.target.value
        });
    }
    render() {
        return(
            <div className='search-bar' onKeyPress={this.eventListen}>
                <div className='search-container'>
                    <label> Search for a Movie... </label>
                    <input ref={this.input} type='search' placeholder='The Wizard of Oz' onChange={e => this.handleChange(e)} />
                    <button onClick={() => this.onClear()}>
                        <MdClear />
                    </button>
                    <button className='primary' onClick={() => this.props.setSearch(this.state.query)}>
                        <MdSearch />
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;