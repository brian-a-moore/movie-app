import React,  { Component } from 'react';
import { MdLocalMovies } from 'react-icons/md';
import './style.css';

class Header extends Component {
    render() {
        return(
            <header>
                <MdLocalMovies />
                <span className='title'> The Movie App </span>
                <span className='author'> By: Brian A. Moore </span>
            </header>
        );
    }
}

export default Header;