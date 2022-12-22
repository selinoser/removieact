import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../store/actions';
import PopulerList from './Movies/PopulerList';
import TopRatedList from './Movies/TopRatedList';
import SearchResults from './SearchResults';

const imgUrl = "https://image.tmdb.org/t/p/original/"


const Homepage = () => {
    const dispatch = useDispatch();
    const states = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(actions.moviesAction.getPopulerMovies())
        dispatch(actions.moviesAction.getGenreIds())
        dispatch(actions.moviesAction.getMovieTopRated())
    }, [dispatch]);

    const onPageChange = (e) => {
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
    const [search, setSearch] = useState('');
    const submitHandle = (e) => {
        e.preventDefault();
        if (search !== "") {
            dispatch(actions.moviesAction.getSearchMovie(search))
        } else {
            dispatch(actions.moviesAction.getSearchMovie())
        }
    }

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

    return (
        <div>
            <section className="section section--first section--bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__search-content">
                                <form className="col-12" onSubmit={submitHandle}>
                                    <input type="text" name="searchText" placeholder="Film Adını Yazınız..." onChange={e => setSearch(e.target.value)} />
                                    <button type='submit'>Ara</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {
                search !== '' ?
                    (
                        <SearchResults searchList={states.searchMovie} imgUrl={imgUrl} onPageChange={onPageChange} getMovieGenreName={getMovieGenreName}></SearchResults>
                    ) :
                    (
                        <>
                            <div className="catalog">
                                <h2 className="content__title text-center">Popüler Filmler</h2>
                                <PopulerList populerList={states.populerMovies.results} imgUrl={imgUrl} getMovieGenreName={getMovieGenreName} count={4} className={"col-6 col-sm-3 col-lg-3 col-xl-3"}></PopulerList>
                                <Link to="/populer" className="section__btn">Tümünü Gör</Link>
                            </div>
                            <div className="catalog">
                                <h2 className="content__title text-center">En Çok Beğenilen Filmler</h2>
                                <TopRatedList topRatedList={states.movieTopRated} imgUrl={imgUrl} getMovieGenreName={getMovieGenreName} count={4} className={"col-6 col-sm-3 col-lg-3 col-xl-3"}></TopRatedList>
                                <Link to="/top-rated" className="section__btn">Tümünü Gör</Link>
                            </div>
                        </>
                    )
            }
        </div >
    )
}



export default Homepage
