import React, { useState, useEffect, Fragment } from "react";
import Header from "../../common/header/Header";
import "./Details.css";
import Typography from "@material-ui/core/Typography";
import YouTube from 'react-youtube';
import RatingStars from "../../common/ratingstars/RatingStar";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

function Details(props) {
    const [movieDetails, setMovieDetails] = useState();

    const getMovieDetails = () => {
        fetch(props.baseUrl + `movies/${props.match.params.id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setMovieDetails(data);
            });
    };


    useEffect(() => {
        getMovieDetails();
    }, []);

    const _onReady = (event) => {
        event.target.pauseVideo();
    };

    const opts = {
        width: '100%',
    };

    return (
        <div>
            <Header baseUrl={props.baseUrl}
          movieId={props.match.params.id}
            history={props.history} />
            
            <Typography
                component="div"
                className="back-to-home-btn"
                onClick={() => {
                    props.history.push("/");
                }}>
                &#60; Back to Home
            </Typography>
            {movieDetails && (
                <div className="detail-container">
                    <div className="image-poster">
                        <img src={movieDetails.poster_url} alt={movieDetails.title} />
                    </div>

                    <div className="movie-details">
                        <Typography
                            component="h2"
                            variant="headline">
                            {movieDetails.title}
                        </Typography>

                        <Typography
                            component="div" >
                            <span className="Weight" >genres:</span> {" "}
                            {movieDetails.genres.join(",")}
                        </Typography>

                        <Typography
                            component="div" >
                            <span className="Weight"> Duration:</span>{" "}
                            {movieDetails.duration}
                        </Typography>

                        <Typography
                            component="div" >
                            <span className="Weight">Release Date: </span>{" "}
                            {movieDetails.release_date}
                        </Typography>

                        <Typography
                            component="div" >
                            <span className="Weight"> Rating:</span> {" "}
                            {movieDetails.rating}
                        </Typography><br />

                        <Typography
                            component="div" >
                            <span className="Weight"> Plot:</span> {" "}
                            <a href={movieDetails.wiki_url}>(Wiki Link)</a>
                            {movieDetails.storyline}
                        </Typography><br />

                        <Typography
                            component="div"
                            className="Weight" >
                            Trailer:
                        </Typography>
                        <YouTube className="youtube-video" videoId={new URL(movieDetails.trailer_url).searchParams.get(
                            "v"
                        )} opts={opts} onReady={_onReady} />
                    </div>

                    <div className="artist-img">
                        <Typography
                            component="div"
                            className="Weight" >
                            Rate this movie:
                        </Typography>
                        <RatingStars />
                        <Typography
                            className="Weight text">Artists:</Typography>
                        <Fragment>
                            <GridList className="movie-artist" cols={2} spacing={16}>
                                {movieDetails.artists.map((artist) => (
                                    <GridListTile key={artist.profile_url}>
                                        <img src={artist.profile_url} alt={`${artist.first_name} ${artist.last_name}`} />
                                        <GridListTileBar
                                            title={`${artist.first_name} ${artist.last_name}`}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </Fragment>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Details;