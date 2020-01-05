import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // getMovies = async () => { // async 방식으로 해당 url에서 정보를 가져오기까지 await 하도록 설정함
  //   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  //   console.log(movies.data.data.movies);
  // }

  // 위의 방식대로 보면 실제로 json 파일을 보면 복잡하게 들어가야 하는데 설정부터 아예 맞춰주면 심플하게 접근 가능할 거 같다
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
