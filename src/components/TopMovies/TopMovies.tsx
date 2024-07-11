import { useGetMoviesQuery } from "@/redux/api/api";
import { MovieCard } from "../MovieCard/MovieCard";
import { TMovie } from "../../types";

const TopMovies = () => {
  const { data, isLoading, isError } = useGetMoviesQuery({});
  console.log(data);
  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>Error loading movies. Please try again later.</p>;
  }

  const movies: TMovie[] | undefined = data?.data;

  return (
    <div className="my-5">
      <h1 className="text-4xl font-bold text-yellow-400">What to watch</h1>
      <h2 className="text-2xl font-bold my-2 border-l-4 border-l-yellow-400 px-1">
        Top Rated Movies
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {movies?.map((movie) => (
          <MovieCard key={movie?._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default TopMovies;
