import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../store/actions';
import PopulerList from './PopulerList';

const imgUrl = "https://image.tmdb.org/t/p/original/"

const Populer = () => {
    const states = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.moviesAction.getPopulerMovies())
        dispatch(actions.moviesAction.getGenreIds())
    }, [dispatch])

    const getMovieGenreName = (genre_ids) => {
        let genreIds = []
        let genreNames = []
        let genres = ""

        states.genreIds.forEach((genre, index) => {
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

    const onPageChange = (page) => {
        var pageNumber = page.selected + 1
        dispatch(actions.moviesAction.getPopulerMovies(pageNumber))
    }

    if (states.populerMovies.results !== undefined) {
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
                    <PopulerList populerList={states.populerMovies.results} imgUrl={imgUrl} getMovieGenreName={getMovieGenreName} count={states.populerMovies.total_results} className={"col-6 col-sm-4 col-lg-3 col-xl-3"}></PopulerList>
                </div>
                <div className="container">
                    <div className="row">
                        <p className="section__text">{states.populerMovies.total_results} sonuç görüntüleniyor...</p>
                        <div className="col-12">
                            <ReactPaginate pageCount={states.populerMovies.total_pages} pageRangeDisplayed={2} previousLabel="<" nextLabel=">"
                                onPageChange={(page) => onPageChange(page)}
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
    } else {
        return (<div>Yükleniyor</div>)
    }
}

export default Populer;