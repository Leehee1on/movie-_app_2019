import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary,poster}){
    return <h1>{title}</h1> 
};

// propTypes 라고 쓰길 권장 자주하는 실수
Movie.propTypes = {
 id: PropTypes.number.isRequired,
 year: PropTypes.number.isRequired,
 title: PropTypes.string.isRequired,
 summary: PropTypes.string.isRequired,
 poster: PropTypes.string.isRequired
};

export default Movie;
