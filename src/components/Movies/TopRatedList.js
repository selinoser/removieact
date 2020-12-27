import React from 'react';
import { Link } from "react-router-dom";
import { MdStar } from 'react-icons/md';

const TopRatedList = ({topRatedList, imgUrl, getMovieGenreName, count, className}) => {
    if(topRatedList != null) {
        return (
            <div className="container">
                <div className="row">
                    {
                        topRatedList.results.slice(0, count).map(item => {
                            const poster = item.poster_path == null ? "https://popcornusa.s3.amazonaws.com/placeholder-movieimage.png" : imgUrl + item.poster_path;
                            return(
                                <div className={className} key={item.id}>
                                    <div className="card">
                                        <div className="card__cover">
                                        <img src={ poster } alt={item.title} />
                                            <Link to={'/movie-detail/'+ item.id} className="card__play">  <i className="icon ion-ios-play"></i> </Link>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><Link>{ item.title}</Link></h3>
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
        );
    }else {
        return(
            <div>Yükleniyor...</div>
        )
    }
};

export default TopRatedList;