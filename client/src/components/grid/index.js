import React,  { Component } from 'react';
import Item from '../../components/item';
import './style.css';

class Grid extends Component {
    render() {
        if(!this.props.set) return null;
        return(
            <div className='grid'>
                <h1> {this.props.header} </h1>
                {this.props.set.map((d) => (
                    <Item key={d.id} {...this.props} data={d} />
                ))}
            </div>
        );
    }
}

export default Grid;