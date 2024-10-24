import { Link } from "react-router-dom";
import "../index.css"

export default function Header() {

    return (
        <>
            <nav className="flex justify-between space-x-4">
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites</Link>
                <p>search</p>
            </nav>
        
        </>
    );

}