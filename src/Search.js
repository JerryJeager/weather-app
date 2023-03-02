import { useNavigate, Form } from "react-router-dom";

const Search = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/')
    }
    return ( 
        <div className="search">
            <div className="header">
                <button onClick={goBack}><i class="fa-solid fa-arrow-left"></i></button>
                <h2>Manage cities</h2>
            </div>
            <Form>
                <input type="text" placeholder="Enter location" />
                <button type="submit"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
            </Form>
            
        </div>
    );
}
 
export default Search;
