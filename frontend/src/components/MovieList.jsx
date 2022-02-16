import { useEffect, useState } from 'react';

const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(async () => {
        const url = "http://localhost:5005/movies";
        const res = await fetch(url);
        setMovies(await res.json());
    }, [])

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th className="text-center">Tipo</th>
                        <th className="text-center">Episódios</th>
                        <th className="text-center">Episódio atual</th>
                        <th className="text-center">Visto por último</th>
                    </tr>
                </thead>

                <tbody>
                    {movies.map(movie => {
                        let type = movie.type === 0 ? 'Série' : 'Filme';
                        let formatDate = (movie.last_view).split('T', 1)

                        return (
                            <tr key={movie.id}>
                                <td>{movie.name}</td>
                                <td className="text-center">{type}</td>
                                <td className="text-center">{movie.total_ep}</td>
                                <td className="text-center">{movie.atual_ep}</td>
                                <td className="text-center">{formatDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>

    )
}

export default MovieList;
