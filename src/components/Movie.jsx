import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Movie() {
    const { id } = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get("https://api.mangadex.org/manga/" + id + "?includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist")
            .then(response => response.data)
            .then(response => {
                setData(
                    {
                        "id": response.data.id,
                        "name": response.data.attributes.title.en,
                        "description": response.data.attributes.description.en,
                        "originallang": response.data.attributes.originalLanguage,
                        "year": response.data.attributes.year,
                        "tags": response.data.attributes.tags.map(t => t.attributes.name.en),
                        "author": response.data.relationships.find(r => r.type == "author").attributes.name,
                        "artist": response.data.relationships.find(r => r.type == "artist").attributes.name
                    }
                )
            })
        // const tid = setTimeout(() => {
            
        // }, 10);

        // return () => {
        //     clearTimeout(tid);
        // }
        
    }, [id])

    console.log(data)

    return (
        data && (<>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <table>
            <tr>
                <td>year:</td>
                <td>{data.year}</td>
            </tr>
            <tr>
                <td>Original lang:</td>
                <td>{data.originallang}</td>
            </tr>
            <tr>
                <td>Author:</td>
                <td>{data.author}</td>
            </tr>
            <tr>
                <td>Artist:</td>
                <td>{data.artist}</td>
            </tr>
            <tr>
                <td>Tags:</td>
                <td>{data.tags.join(", ")}</td>
            </tr>
        </table>
        </>)
    )

}