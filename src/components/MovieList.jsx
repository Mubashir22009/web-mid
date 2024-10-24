import { useEffect, useState } from "react"
import "../index.css"
import { Link } from "react-router-dom";
import axios from "axios";

export default function MovieList() {

    const [movies, setMovies] = useState(
        []
    );

    useEffect(() => {
        axios
            .get("https://api.mangadex.org/manga?contentRating[]=safe")
            .then(respnse => {
                setMovies(
                    respnse.data.data.map(m => {
                        return {
                            "id": m.id,
                            "name": m.attributes.title.en,
                            "description": m.attributes.description.en,
                            "tags": m.attributes.tags.map(tag => {
                                tag.attributes.name.en
                            })
                        }
                    })
                )
            })
    }, []);

    console.log(movies)

    return (
        <>
            <h2 className="flex text-3xl">Mangas</h2>
            <ul>
                {movies.map(x => {
                    return <li key={x.id}>
                        <div className="flex">
                            <Link to={"/movie/" + x.id}>
                                <h4>{x.name}</h4>
                            </Link>
                                <p>{x.description}</p>
                                <div className="flex justify-between space-x-4">
                                {x.tags.map(tag => {
                                    return <span key={tag}>{tag}</span>
                                })}
                                </div>
                        </div>
                    </li>;
                })}
            </ul>    
        </>
    )

}