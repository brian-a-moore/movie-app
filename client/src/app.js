import React, { Component } from 'react';
import Header from './components/header';
import SearchBar from './components/searchbar';
import Home from './views/home';
import Results from './views/results';
import axios from 'axios';
import './app.css';

class App extends Component {
    state = {
        assets: null,
        query: null,
    }
    componentDidMount() {
        axios.get('api/assets')
            .then(({ data }) => {
                this.setState({ assets: data });
            });
    }
    showView = () => {
        if(!this.state.query) {
            return <Home {...this.props} assets={this.state.assets} />
        } else {
            return <Results {...this.props} assets={this.state.assets} query={this.state.query} setSearch={this.setSearch} />
        }
    }
    clear = () => {
        this.setState({ query: null, results: null });
    }
    setSearch = query => {
        this.setState({ query });
    }
    render() {
        if(!this.state.assets) return <div className='container'> Loading... </div>;
        return(
            <div className='container'>

                <Header />
                <SearchBar handleChange={this.handleChange} setSearch={this.setSearch} clear={this.clear} />
                { this.showView() }

            </div>
        );
    }
}

export default App;