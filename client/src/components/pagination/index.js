import React,  { Component } from 'react';
import { MdChevronLeft, MdChevronRight, MdFirstPage, MdLastPage } from 'react-icons/md';
import './style.css';

class Pagination extends Component {   
    render() {
        if(!this.props.page || !this.props.numberOfPages) return null;
        return(
            <div className='pagination'>
                
                <div className='page-container'>
                    <button className='page-button' onClick={() => {this.props.setPage(1)}}> <MdFirstPage /> </button>
                    <button className='page-button' onClick={() => {this.props.setPage(this.props.page - 1)}}> <MdChevronLeft /> </button>
                    {this.props.pages.map(d => {
                        return <button className={`page-button ${d.number === this.props.page ? 'active' : null}`} key={d.id} onClick={() => { this.props.setPage(d.number)}}> { d.number } </button>
                    })}
                    <button className='page-button' onClick={() => {this.props.setPage(this.props.page + 1)}}> <MdChevronRight /> </button>
                    <button className='page-button' onClick={() => {this.props.setPage(this.props.numberOfPages)}}> <MdLastPage /> </button>
                </div>
            </div>
        );
    }
}

export default Pagination;