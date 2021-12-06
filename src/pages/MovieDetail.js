import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  console.log(history);
  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="secondaryImg" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};
const Details = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 5vh;
  position: relative;
  text-align: center;
  h2 {
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300) {
    h2 {
    }
  }
`;

const Awards = styled.div`
  min-height: 70vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 0rem;
  }
`;

const ImageDisplay = styled.div`
  img {
    width: 100%;
    object-fit: contain;
    padding: 3rem 0rem 3rem 0rem;
  }
`;
//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
