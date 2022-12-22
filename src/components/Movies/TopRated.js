import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Actions from '../../store/actions';
import TopRatedList from './TopRatedList';

const imgUrl = "https://image.tmdb.org/t/p/original/"

const Trending = () => {
    const dispatch = useDispatch();
    const states = useSelector(state => state.movies);
    useEffect(() => {
        dispatch(Actions.moviesAction.getMovieTopRated())
        dispatch(Actions.moviesAction.getGenreIds())
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
    console.log(states.movieTopRated)
    if (states.movieTopRated !== null) {
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
                    <TopRatedList topRatedList={states.movieTopRated} imgUrl={imgUrl} getMovieGenreName={getMovieGenreName} count={10} className={"col-6 col-sm-4 col-lg-3 col-xl-3"}></TopRatedList>
                </div>
            </div>
        )
    } else {
        return (<div>Yükleniyor</div>)
    }
}



export default Trending;