import { Link } from "react-router-dom";

const Search = () => {
    return ( 
        <div className="search">
            <div className="header">
                <Link to='/'><i class="fa-solid fa-arrow-left"></i></Link>
                <h2>Manage cities</h2>
            </div>
        </div>
    );
}
 
export default Search;
