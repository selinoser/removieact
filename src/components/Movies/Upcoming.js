import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Actions from '../../store/actions';

const imgUrl = "https://image.tmdb.org/t/p/original/";

const Upcoming = () => {
    const states = useSelector(state => state.movies)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Actions.moviesAction.getUpComingMovie())
        dispatch(Actions.moviesAction.getGenreIds())
    }, [dispatch]);

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
    if (states.upcomingMovies.results !== undefined) {
        return (
            <div>
                <section className="section section--first section--bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section__wrap">
                                    <h2 className="section__title">Vizyona Girecek Filmler</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <div className="catalog">
                    <div className="container">
                        <div className="row">
                            {
                                states.upcomingMovies.results.map(item => {
                                    const poster = item.poster_path == null ? "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png" : imgUrl + item.poster_path;
                                    return (
                                        <div className="col-12" key={item.id}>
                                            <div className="card card--list">
                                                <div className="row">
                                                    <div className="col-12 col-sm-4 col-md-2">
                                                        <div className="card__cover">
                                                            <img src={poster} alt={item.title} />

                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-sm-8 col-md-10">
                                                        <div className="card__content">
                                                            <h3 className="card__category text__white">
                                                                Vizyon Tarihi: {item.release_date == null ? "" : moment(item.release_date).format('DD-MM-YYYY')}
                                                            </h3>
                                                            <h3 className="card__title">{item.title}</h3>
                                                            <span className="card__category">
                                                                <Link>{getMovieGenreName(item.genre_ids)}</Link>
                                                            </span>

                                                            <div className="card__description">
                                                                <p>{item.overview}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<div>Yükleniyor</div>)
    }
}



export default Upcoming;