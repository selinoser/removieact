import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearchMovie, getGenreIds, getPopulerMovies, getMovieTopRated} from '../store/actions/moviesAction';
import SearchResults from './SearchResults';
import PopulerList from './Movies/PopulerList';
import { Link } from 'react-router-dom';
import TopRatedList from './Movies/TopRatedList';

const imgUrl = "https://image.tmdb.org/t/p/original/"

const initialState = {
    genreNames : [],
    searchText : null
}

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.getMovieGenreName = this.getMovieGenreName.bind(this);
    }

    componentDidMount(){
        this.props.getPopulerMovies();
        this.props.getGenreIds();
        this.props.getMovieTopRated();
    }
      
    onChange = (e) => {
        let key = e.target.name;
        var value = '';
        value = e.target.value;

        this.setState(previousState => {
            return {
                ...previousState,
                [key]: value
            };
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const searchTextName = this.state.searchText;
        this.props.getSearchMovie(searchTextName)
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
        if(this.props.populerMovies != null) {
            this.state.genreNames = this.props.populerMovies.genreIds
        }
        return (
            <div>
                <section className="section section--first section--bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header__search-content">
                                <form className="col-12" onSubmit = {(e) => this.onSubmit(e)}>
                                    <input type="text" name="searchText" onChange={this.onChange} placeholder="Film Adını Yazınız..." />
                                    <button>Ara</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {
                    this.props.populerMovies.searchMovie.results != null ? (
                        <SearchResults searchList={this.props.populerMovies.searchMovie} imgUrl={imgUrl} getMovieGenreName={this.getMovieGenreName} onPageChange={this.onPageChange}></SearchResults>
                    ) : (
                        <div>
                            <div className="catalog">
                                <h2 className="content__title text-center">Popüler Filmler</h2>
                                <PopulerList populerList={this.props.populerMovies.populerMovies} imgUrl={imgUrl} getMovieGenreName={this.getMovieGenreName} count={4} className={"col-6 col-sm-3 col-lg-3 col-xl-3"}></PopulerList>
                                <Link to="/populer" className="section__btn">Tümünü Gör</Link>
                            </div>
                            <div className="catalog">
                                <h2 className="content__title text-center">En Çok Beğenilen Filmler</h2>
                                <TopRatedList topRatedList={this.props.populerMovies.movieTopRated} imgUrl={imgUrl} getMovieGenreName={this.getMovieGenreName} count={4} className={"col-6 col-sm-3 col-lg-3 col-xl-3"}></TopRatedList>
                                <Link to="/top-rated" className="section__btn">Tümünü Gör</Link>
                            </div>
                        </div>
                    )
                }
                
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({
    populerMovies:state.populerMovies,
})

const mapDispatchToProps = {
    getSearchMovie,
    getGenreIds,
    getPopulerMovies,
    getMovieTopRated
};


export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
