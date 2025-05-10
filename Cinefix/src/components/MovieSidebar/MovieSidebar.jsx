import './movieSidebar.css'
import MovieCard from "../MovieCard/MovieCard";

const MovieSidebar = ({ recommendations }) => {
  return (
    <>
      <div className="movie-sidebar">
        <div className="movie-sidebar-cnt">
          <div className="movie-sidebar-cnt-head">
            <h2 className='section-heading'>Recommendation</h2>
          </div>
          <div className="movie-sidebar-cnt-cards-list recommendation-cards-list">
            {recommendations.map((rec) => (
              <MovieCard
                key={rec.id}
                poster={rec.backdrop_path || rec.poster_path} // backdrop_path = horizontal, poster_path = vertical
                title={rec.title}
                rating={rec.vote_average}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieSidebar