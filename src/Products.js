import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './loader/Loader';
import { CartContext } from './App';
import { ToastContainer, toast } from 'react-toastify';

function ProductsComponent() {
    const [lowerRange, setLowerRange] = useState(0);
    const [upperRange, setUpperRange] = useState(100000);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [paginationArray, setPaginationArray] = useState([]);
    const { cartInfo, setCartInfo } = useContext(CartContext);

    useEffect(() => {
        getAllProducts(1);
    }, []);
    const getAllProducts = async (page) => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`https://dummyjson.com/products?skip=${(page - 1) * 10}&limit=10`);
            console.log(data);
            setProducts(data.products);
            setFilteredProducts(data.products);
            setPaginationArray(Array.from({length: data.total/data.limit}, (_, i) => i + 1));
            setIsLoading(false);
        } catch(error) {
            console.log(error);
            setIsLoading(false);
        }
    };
    const filterProducts = () => {
        const temp = [];
        products.forEach(product => {
            if (product.price > lowerRange && product.price < upperRange) {
                temp.push(product);
            }
        });
        setFilteredProducts(temp);
    };
    const addToCart = (product) => {
        const isProductExist = cartInfo.findIndex(cart => cart.id == product.id);
        if (isProductExist === -1) {
            setCartInfo([...cartInfo, {...product, quantity: 1}]);
            toast.success('Added product to cart', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error('Already exist, Go to cart', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
    return (
       <div className="container my-5">
        <div className='row'>
            <div className="col-sm-3">
                <div className="row">
                    <div className="col-sm">
                        <select onChange={($event) => {setLowerRange(Number($event.target.value)); filterProducts();}}>
                            <option>0</option>
                            <option>10000</option>
                            <option>20000</option>
                        </select>
                    </div>
                    <div className="col-sm">
                        <select onChange={($event) => {setUpperRange(Number($event.target.value)); filterProducts();}}>
                            <option>10000</option>
                            <option>20000</option>
                            <option>30000</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-sm-9">
                {isLoading ? (
                    <Loader />
                ) : (<React.Fragment>
                        {filteredProducts && filteredProducts.map(product => (
                            <div className="row my-3 py-3 border-bottom">
                                <div className="col-sm-3">
                                    <img src={product.thumbnail} width="150px"/>
                                </div>
                                <div className="col-sm-6">
                                    <h4><Link to={`/product-details/${product.id}/${product.title}/description?productName=${product.title}&price=${product.price}`} target="_blank">{product.id} {product.title}</Link></h4>
                                    <p><span class="badge text-bg-primary">{product.avgRating} <i class="fa-solid fa-star"></i></span><span className="mx-3">{product.rating}</span><span>{product.review}</span> </p>
                                    <ul>
                                        {product.specifications && product.specifications.map(specification => (
                                            <li>{specification}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-sm-3">
                                    <h4>{product && product.price}</h4>
                                    {/* {product.inStock ? (
                                        <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
                                    ) : (
                                        <button className="btn btn-danger">Out of Stock</button>
                                    )} */}
                                    <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        ))}
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                <a class="page-link"  aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                                </li>
                                {paginationArray.map(page => (
                                    <li class="page-item"><a class="page-link"  onClick={() => getAllProducts(page)}>{page}</a></li>
                                ))}
                                <li class="page-item">
                                <a class="page-link"  aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </React.Fragment>)}
            </div>
        </div>
        <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
       </div> 
    )
}

export default ProductsComponent;