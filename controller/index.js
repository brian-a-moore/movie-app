const axios = require('axios');
const apiKey = process.env.API_KEY;
const moment = require('moment');

module.exports = {
    getAssets: (req, res) => {
        axios.get(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
        .then(response => {
            res.send({
                base_url: response.data.images.base_url,
                poster_sizes: response.data.images.poster_sizes
            });
        });
    },
    getMovies: (req, res) => {
        let page = req.query.page;
        let today = moment().format('YYYY-MM-DD');

        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/discover/movie?&release_date.gte=${today}&page=${page}&api_key=${apiKey}`,
        })
            .then(({ data }) => {
                res.send({
                    page: data.page,
                    pages: data.total_pages,
                    results: data.results
                });
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },
    search: (req, res) => {
        let title = decodeURI(req.query.title);
        let page = req.query.page;

        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?page=${page}&query=${title}&api_key=${apiKey}`
        })
            .then(({ data }) => {
                res.send({
                    page: data.page,
                    pages: data.total_pages,
                    results: data.results
                });
            })
            .catch(err => {
                res.status(500).send(err);
            });
    }
}