import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import "./addProduct.scss";
import Footer from "../footer/footer";
import { ToastContainer, toast , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function Addproduct() {
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState(""); 
    const [featured, setFeatured] = useState(""); 
    const [rating, setRating] = useState("");
    const [company, setCompany] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();  
        const response = await fetch('https://rablo-backend-xxuq.onrender.com/api/v1/createcrud', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productID: id,
                name: email,
                price: password,
                featured: featured,
                rating: rating,
                company: company
            }),
        });
        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        navigate("/");
    }

    return (
        <div className="Login">
            <div className="login-box">
                <h2 className="heading">Add Product Form</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Product Id</label>
                    <input
                        type="text"
                        className="name"
                        id="name"
                        onChange={(e) => setId(e.target.value)}
                    />
                    <label htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        className="name"
                        id="name"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="number">Price</label>
                    <input
                        type="number"
                        className="number"
                        id="number"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor="includeTax">isFeatured</label>
                    <input
                        type="checkbox"
                        id="includeTax"
                        onChange={(e) => setFeatured(e.target.checked)}
                    />

                    <label htmlFor="number">Rating</label>
                    <input
                        type="number"
                        className="number"
                        id="number"
                        min="1"
                        max="5"
                        onChange={(e) => {
                            let rating = parseInt(e.target.value);
                            if (rating < 1) {
                                rating = 1;
                            } else if (rating > 5) {
                                rating = 5;
                            }
                            setRating(rating);
                        }}
                    />


                    <label htmlFor="name">Company</label>
                    <input
                        type="text"
                        className="name"
                        id="name"
                        onChange={(e) => setCompany(e.target.value)}
                    />

                    <input type="submit" className="submit" />
                </form>
                <p className="subheading">
                    <Link to="/">Available Products</Link>
                </p>
            </div> 
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default Addproduct;