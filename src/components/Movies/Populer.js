import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPopulerMovies, getGenreIds } from '../../store/actions/moviesAction';
import ReactPaginate from 'react-paginate';
import PopulerList from './PopulerList';

const imgUrl = "https://image.tmdb.org/t/p/original/"

const initialState = {
    genreNames : []
}

class Populer extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.getMovieGenreName = this.getMovieGenreName.bind(this);
    }

    componentDidMount(){
        this.props.getPopulerMovies();
        this.props.getGenreIds();
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

    onPageChange(page){
        var pageNumber  = page.selected + 1
        this.props.getPopulerMovies(pageNumber);
        console.log(this.props.getPopulerMovies)
    }

    render() {
        const populerMovies = this.props.populerMovies.populerMovies;
        this.state.genreNames = this.props.populerMovies.genreIds;
        if(populerMovies.results !== undefined) {
            return (
                <div>
                    <section className="section section--first section--bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section__wrap">
                                        <h2 className="section__title">Popüler Filmler</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br />
                    <div className="catalog">
                        <PopulerList populerList={populerMovies} imgUrl={imgUrl} getMovieGenreName={this.getMovieGenreName} count={this.props.populerMovies.populerMovies.total_results} className={"col-6 col-sm-4 col-lg-3 col-xl-3"}></PopulerList>
                    </div>
                    <div className="container">
                        <div className="row">
                            <p className="section__text">{populerMovies.total_results} sonuç görüntüleniyor...</p>
                            <div className="col-12">
                                <ReactPaginate pageCount={populerMovies.total_pages} pageRangeDisplayed={2} previousLabel="<" nextLabel=">" 
                                    onPageChange={(page) => this.onPageChange(page)} 
                                    breakClassName={'paginator__item'}
                                    breakLinkClassName={'page-link'}
                                    containerClassName={'paginator'}
                                    pageClassName={'paginator__item'}
                                    pageLinkClassName={'page-link'}
                                    previousClassName={'paginator__item'}
                                    previousLinkClassName={'paginator__item paginator__item--prev'}
                                    nextClassName={'paginator__item'}
                                    activeClassName={'paginator__item paginator__item--active'} />
                            </div>
                        </div>
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
    getPopulerMovies,
    getGenreIds
};

export default connect(mapStateToProps, mapDispatchToProps)(Populer)