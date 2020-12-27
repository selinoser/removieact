import React from 'react';
import { Link } from "react-router-dom";
import { MdStar } from 'react-icons/md';

const SearchList = ({searchList, imgUrl, getMovieGenreName, onPageChange }) => {
    if(searchList.results != null) {
        return (
            <div className="catalog">
                <div className="container">
                    <br/>
                    <h1 className="details__title text-center">Arama Sonuçları</h1>
                    <div className="row">
                        {
                            searchList.results.map(item => {
                                const poster = item.poster_path == null ? "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png" : imgUrl + item.poster_path;
                                console.log(poster)
                                return(
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-3" key={item.id}>
                                        <div className="card">
                                            <div className="card__cover">
                                            <img src={ poster } alt={item.title}/>
                                                <Link to={'/movie-detail/'+ item.id} className="card__play">  <i className="icon ion-ios-play"></i> </Link>
                                            </div>
                                            <div className="card__content">
                                                <h3 className="card__title">{ item.title}</h3>
                                                <span className="card__category">
                                                    <Link>{getMovieGenreName(item.genre_ids)}</Link>
                                                </span>
                                                <span className="card__rate"><MdStar></MdStar>{item.vote_average}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                         
                    </div>
                </div>
            </div>
        );
    }else {
        return(
            <div>Yükleniyor...</div>
        )
    }
};

export default SearchList;