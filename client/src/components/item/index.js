import React, { Component } from 'react';
import moment from 'moment';
import './style.css';
import Placeholder from './placeholder.png';

class Item extends Component {
    render() {
        return(
            <div className='item'>
                <img src={this.props.data.poster_path === null ? Placeholder : `${this.props.assets.base_url}/${this.props.assets.poster_sizes[0]}/${this.props.data.poster_path}` } alt={ this.props.data.title } />
                <div className='content'>
                    <span className='title'> { this.props.data.title } </span>
                    <p className='overview'> { this.props.data.overview } </p>
                    <div className='vote'>
                        <strong> Voting Average: </strong>
                        <span> {this.props.data.vote_average } </span> 
                    </div>
                    <div className='release-date'>
                        <strong> Release Date: </strong>
                        <span> { moment(this.props.data.release_date).format('MM/DD/YYYY') } </span>    
                    </div> 
                </div>
            </div>
        )
    }
}

export default Item;