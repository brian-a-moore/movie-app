import React, { Component } from 'react';
import Grid from '../../components/grid';
import Pagination from '../../components/pagination';
import axios from 'axios';

class Home extends Component {
    state = {
        currentPage: 1,
        numberOfPages: null,
        pages: [],
        results: [],
        loaded: false
    }
    componentDidMount() {
        this.search();
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.numberOfPages !== this.state.numberOfPages) {
            this.generateRange();
       }
       if(prevState.currentPage !== this.state.currentPage) {
           this.generateRange();
           this.search();
       }
    }
    generateRange = () => {
        let pages = [];
        let page = this.state.currentPage;
        let numberOfPages = this.state.numberOfPages;
        let max = numberOfPages > 9 ? 9 : numberOfPages;

        if(page <= 9 || numberOfPages < 10) {
            for(let i = 1; i <= max; i++) {
                pages.push({ number: i, id: Math.random() });
            }
        } else if (page > numberOfPages - 9) {
            for(let i = numberOfPages; i > numberOfPages - 9; i--) {
                pages.push({ number: i, id: Math.random() });
            }
            pages.reverse();
        } else {
            for(let i = page - 4; i <= page + 4; i++) {
                pages.push({ number: i, id: Math.random() });
            }
        }

        this.setState({ pages });
    }
    setPage = page => {
        if(page >= 1 && page <= this.state.numberOfPages) {
            this.setState({ currentPage: page });
        }
    }
    search = () => {
        axios({
            method: 'GET',
            url: '/api/search',
            params: {
                page: this.state.currentPage,
                title: this.props.query
            }
        })
            .then(({ data }) => {
                this.setState({
                    numberOfPages: data.pages,
                    results: data.results
                });
            }); 
    }
    render() {
        return(
            <div className='view results'>
                <Grid set={this.state.results} {...this.props} header='Search Results' />
                <Pagination page={this.state.currentPage} numberOfPages={this.state.numberOfPages} pages={this.state.pages} setPage={this.setPage} />
            </div>
        );
    }
}

export default Home;