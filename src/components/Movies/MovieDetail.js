import 'react-lazy-load-image-component/src/effects/blur.css';

import moment from 'moment';
import React, { useEffect } from 'react';
import { MdStar } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import actions from '../../store/actions';

const MovieDetail = () => {

    const { movieById } = useSelector((state) => state.movieById);
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        dispatch(actions.moviesDetailAction.getMovieById(params.id))
    }, [dispatch])

    const movieDetail = movieById;
    if (movieDetail !== null) {
        const imgBackgroundUrl = "https://image.tmdb.org/t/p/original/" + movieDetail.backdrop_path;
        const imgUrl = "https://image.tmdb.org/t/p/original/";
        const posters = movieDetail.poster_path == null ? "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png" : imgUrl + movieDetail.poster_path;
        return (
            <section className="details">
                <div className="details__bg" style={{ backgroundImage: `url(${imgBackgroundUrl})`, backgroundSize: "cover", backgroundPosition: "center 20%", backgroundRepeat: "no-repeat no-repeat" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="details__title">{movieDetail.title}</h1>
                        </div>
                        <div className="col-12">
                            <div className="card card--details card--series">
                                <div className="row">
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                        <div className="card__cover">
                                            <LazyLoadImage
                                                effect='blur'
                                                alt={movieDetail.title}
                                                src={posters}>
                                            </LazyLoadImage>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
                                        <div className="card__content">
                                            <div className="card__wrap">
                                                <span className="card__rate"><MdStar></MdStar> {movieDetail.vote_average}</span>
                                            </div>
                                            <ul className="card__meta">
                                                <li><span>Türler:</span> {movieDetail.genres.map(item => { return (<Link>{item.name}</Link>) })}</li>
                                                <li><span>Yayın Tarihi:</span> {moment(movieDetail.release_date).format('DD-MM-YYYY')}</li>
                                                <li><span>Süre:</span> {movieDetail.runtime} dk</li>
                                                <li><span>Ülkeler:</span> {movieDetail.production_countries.map(item => { return (<Link>{item.name}</Link>) })} </li>
                                            </ul>
                                            <div className="card__description card__description--details">
                                                {movieDetail.overview}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <div>Yükleniyor...</div>
        )
    }
}



export default MovieDetail;