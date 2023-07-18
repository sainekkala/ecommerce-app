import { CartContext } from "./App";
import React, { useContext } from 'react';

function CartComponent() {
    const { cartInfo, setCartInfo } = useContext(CartContext);
    console.log(cartInfo);

    const changeQuantity = (index, type) => {
        if (type === 'increment') {
            const modifiedData = cartInfo.map((cart, i) => {
                if (i == index) {
                    return {...cart, quantity: cart.quantity + 1};
                }
                return cart;
            });
            setCartInfo(modifiedData);
        } else {
            const modifiedData = cartInfo.map((cart, i) => {
                if (i == index) {
                    return {...cart, quantity: cart.quantity - 1};
                }
                return cart;
            });
            setCartInfo(modifiedData)
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    {cartInfo && cartInfo.length > 0 ? (
                        <React.Fragment>
                            {cartInfo.map((cart, index) => (
                                <div className="row my-3 py-3 border-bottom">
                                    <div className="col-sm-3">
                                        <img src={cart.thumbnail} width="150px"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>{cart.id} {cart.title}</h4>
                                        <p><span class="badge text-bg-primary">{cart.avgRating} <i class="fa-solid fa-star"></i></span><span className="mx-3">{cart.rating}</span><span>{cart.review}</span> </p>
                                        <ul>
                                            {cart.specifications && cart.specifications.map(specification => (
                                                <li>{specification}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-sm-3">
                                        <h4>{cart && cart.price}</h4>
                                        <div>
                                            <button className="btn btn-danger me-2" onClick={() => changeQuantity(index, 'decrement')}>-</button>
                                            <span>{cart.quantity}</span>
                                            <button className="ms-2 btn btn-success" onClick={() => changeQuantity(index, 'increment')}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ) : (
                        <div className="row">
                            <div className="col-sm text-center my-5">
                                <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" width="300px"/>
                                <h3>Missing Cart items?</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CartComponent;