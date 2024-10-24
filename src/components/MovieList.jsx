import { useEffect, useState } from "react"
import "../index.css"
import { Link } from "react-router-dom";

export default function MovieList() {

    const [movies, setMovies] = useState(
        {
            "trending": [],
        }
    );

    useEffect(() => {
        //TODO: api fetch instead
        setMovies(
            {
                "trending": [
                    {
                        "id": 1,
                        "name": "Movie 1",
                        "description": "Cool Movie 1",
                        "cover": null
                    },
                    {
                        "id": 2,
                        "name": "Movie 2",
                        "description": "Cool Movie 2",
                        "cover": null
                    },
                    {
                        "id": 3,
                        "name": "Movie 3",
                        "description": "Cool Movie 3",
                        "cover": null
                    },
                    {
                        "id": 4,
                        "name": "Movie 4",
                        "description": "Cool Movie 4",
                        "cover": null
                    },
                    {
                        "id": 5,
                        "name": "Movie 5",
                        "description": "Cool Movie 5",
                        "cover": null
                    }

                ]
            }
        )
    }, []);

    return (
        <>
            <h2 className="flex text-3xl">Trending</h2>
            <ul>
                {movies.trending.map(x => {
                    return <li key={x.id}>
                        <div className="flex">
                            <Link to={"/movie/" + x.id}>
                                <h4>{x.name}</h4>
                                <p>{x.description}</p>
                            </Link>
                        </div>
                    </li>;
                })}
            </ul>    
        </>
    )

}