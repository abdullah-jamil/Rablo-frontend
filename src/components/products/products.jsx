import { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./products.scss";
function Products(){
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://rablo-backend-xxuq.onrender.com/api/v1/getcruds')
        .then(response => response.json())
        .then(data => setData(data.data))
        .catch(error => console.error('Error fetching data:', error));

        console.log(data);
    }, []);

    return (
        <div>
            <h1>Available Products</h1>
            {data.map(product => (
                    <li key={product.id}>
                        <div>
                            <h2>{product.name}</h2>
                            <p>Rating: {product.rating}</p>
                            <p>{product.company}</p>
                            <p>Price: {product.price}</p>
                        </div>
                    </li>
            ))}
            <br/>
            <ul>
                
            </ul>

            <p className="subheading">
                    <Link to="/addProduct">Want to Add a Product?</Link>
                </p>
         
         
        </div>
    );
}

export default Products;