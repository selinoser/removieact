import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getGenreIds,getMovieTopRated} from '../../store/actions/moviesAction';
import moment from 'moment';
import TopRatedList from './TopRatedList';

const imgUrl = "https://image.tmdb.org/t/p/original/"

const initialState = {
    genreNames : [],
}

class Trending extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.getMovieGenreName = this.getMovieGenreName.bind(this);
      }

    componentDidMount(){
        const date = moment(new Date()).format("YYYY-MM-DD")
        this.props.getMovieTopRated()
        this.props.getGenreIds()
        this.setState({
            nowDate: date
        })
    }

    getMovieGenreName(genre_ids){
        let genreIds = []
        let genreNames = []
        let genres = ""
        this.state.genreNames.forEach((genre,index) => {
            genreIds[index] = genre.id;
            genreNames[index] = genre.name;
        });
      
        genre_ids.forEach((genre) => {
            let genreIndex = genreIds.indexOf(genre);
            let genreName = genreNames[genreIndex];
            genres += genreName + ', ';
        })
        genres = genres.slice(0, -2);
        return genres
    }

    render() {
        const movieTrending = this.props.populerMovies.movieTopRated;
        this.state.genreNames = this.props.populerMovies.genreIds;
        if(movieTrending !== undefined) {
            return (
                <div>
                    <section className="section section--first section--bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section__wrap">
                                        <h2 className="section__title">En çok beğenilen 10 Film</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br />
                    <div className="catalog">
                        <TopRatedList topRatedList={movieTrending} imgUrl={imgUrl} getMovieGenreName={this.getMovieGenreName} count={10} className={"col-6 col-sm-4 col-lg-3 col-xl-3"}></TopRatedList>
                    </div>
                </div>
            )
        }else {
            return ( <div>Yükleniyor</div>)
        }
    }
}

const mapStateToProps  = (state) => ({
    populerMovies:state.populerMovies,
})

const mapDispatchToProps = {
    getMovieTopRated,
    getGenreIds
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending)