// import React from 'react';
// import './ComingSoonMovies.css';
// import CommonSlider from '../CommonSlider/CommonSlider';
// import Button from '../Button/Button';
// import { useGetComingSoonMoviesQuery } from '@/redux/movieApi';
// import { useNavigate } from 'react-router-dom';


// const ComingSoonMovies = () => {
//     const { data, error, isLoading } = useGetComingSoonMoviesQuery();
//     const navigate = useNavigate();

//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>Error.</p>;

//     const comingSoonData = data?.results || [];

//     return (
//         <>
//             <CommonSlider
//                 title="Coming Soon"
//                 data={comingSoonData}
//                 renderCard={(movie) => (
//                     <div key={movie.id} className="coming-soon-movie-poster"
//                         // onClick={() => navigate(`/movie/${movie.id}`)}
//                         onClick={() => {
//                             const isSubscribed = localStorage.getItem("isSubscribed");

//                             if (isSubscribed === "true") {
//                                 navigate(`/movie/${movie.id}`);
//                             } else {
//                                 navigate("/subscribenotify");
//                             }
//                         }}

//                     >
//                         <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
//                             alt={movie.title}
//                             className='coming-soon-poster-img' />
//                         <div className="coming-soon-premium-icon">
//                             <i class="fa-solid fa-crown"></i>
//                         </div>
//                         <div className="coming-soon-poster-txt">
//                             <div className="coming-soon-poster-txt-title">
//                                 <h6 className='movie-type'>Coming Soon</h6>
//                                 <h1 className='movie-name'>{movie.title}</h1>
//                                 <h6 className='movie-episode'>On {new Date(movie.release_date).toLocaleDateString()}</h6>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             />
//         </>
//     );
// };

// export default ComingSoonMovies;



import React from 'react';
import './ComingSoonMovies.css';
import CommonSlider from '../CommonSlider/CommonSlider';
import Button from '../Button/Button';
import { useGetComingSoonMoviesQuery } from '@/redux/movieApi';
import { useNavigate } from 'react-router-dom';


const ComingSoonMovies = () => {
    const { data, error, isLoading } = useGetComingSoonMoviesQuery();
    const navigate = useNavigate();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error.</p>;

    const comingSoonData = data?.results || [];

    return (
        <>
            <CommonSlider
                title="Coming Soon"
                data={comingSoonData}
                renderCard={(movie) => (
                    <div
                        key={movie.id}
                        className="coming-soon-movie-poster"
                        onClick={() => {
                            const isSubscribed = localStorage.getItem('isSubscribed');
                            if (isSubscribed === 'true') {
                                navigate(`/movies/${movie.id}`);
                            } else {
                                localStorage.setItem('redirectAfterPayment', `/movies/${movie.id}`);
                                navigate('/subscribenotify');
                            }
                        }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={movie.title}
                            className="coming-soon-poster-img"/>
                        <div className="coming-soon-premium-badge">
                            <i className="fa-solid fa-crown"></i>
                        </div>
                        <div className="coming-soon-poster-txt">
                            <div className="coming-soon-poster-txt-title">
                                <h6 className="movie-type">Coming Soon</h6>
                                <h1 className="movie-name">{movie.title}</h1>
                                <h6 className="movie-episode">
                                    On {new Date(movie.release_date).toLocaleDateString()}
                                </h6>
                            </div>
                        </div>
                    </div>
                )}
            />
        </>
    );
};

export default ComingSoonMovies;
