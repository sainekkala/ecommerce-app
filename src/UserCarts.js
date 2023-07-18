import React, { useCallback, useState, useEffect } from 'react';

export default function UseCallbackCartsComponent() {
    const [counter, setCounter] = useState(0);
    const selectCartInfo = (cartInfo) => {
        console.log(cartInfo);
        console.log('-----------------')
    };
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className='col-sm'>
                        <h4>Counter: {counter}</h4>
                        <button className='btn btn-success' onClick={() => setCounter(counter + 1)}>Update</button>
                    </div>
                </div>
            </div>

            <UserCartsComponent selectCartInfo={selectCartInfo}/>
        </React.Fragment>
    )
}
const UserCartsComponent = (props) => {
    const carts = [
        {
          "id": 1,
          "products": [
            {
              "id": 59,
              "title": "Spring and summershoes",
              "price": 20,
              "quantity": 3,
              "total": 60,
              "discountPercentage": 8.71,
              "discountedPrice": 55
            },
            {
              "id": 88,
              "title": "TC Reusable Silicone Magic Washing Gloves",
              "price": 29,
              "quantity": 2,
              "total": 58,
              "discountPercentage": 3.19,
              "discountedPrice": 56
            },
            {
              "id": 18,
              "title": "Oil Free Moisturizer 100ml",
              "price": 40,
              "quantity": 2,
              "total": 80,
              "discountPercentage": 13.1,
              "discountedPrice": 70
            },
            {
              "id": 95,
              "title": "Wholesale cargo lashing Belt",
              "price": 930,
              "quantity": 1,
              "total": 930,
              "discountPercentage": 17.67,
              "discountedPrice": 766
            },
            {
              "id": 39,
              "title": "Women Sweaters Wool",
              "price": 600,
              "quantity": 2,
              "total": 1200,
              "discountPercentage": 17.2,
              "discountedPrice": 994
            }
          ],
          "total": 2328,
          "discountedTotal": 1941,
          "userId": 97,
          "totalProducts": 5,
          "totalQuantity": 10
        },
        {
          "id": 2,
          "products": [
            {
              "id": 96,
              "title": "lighting ceiling kitchen",
              "price": 30,
              "quantity": 2,
              "total": 60,
              "discountPercentage": 14.89,
              "discountedPrice": 51
            },
            {
              "id": 91,
              "title": "Black Motorbike",
              "price": 569,
              "quantity": 3,
              "total": 1707,
              "discountPercentage": 13.63,
              "discountedPrice": 1474
            },
            {
              "id": 9,
              "title": "Infinix INBOOK",
              "price": 1099,
              "quantity": 1,
              "total": 1099,
              "discountPercentage": 11.83,
              "discountedPrice": 969
            },
            {
              "id": 16,
              "title": "Hyaluronic Acid Serum",
              "price": 19,
              "quantity": 1,
              "total": 19,
              "discountPercentage": 13.31,
              "discountedPrice": 16
            },
            {
              "id": 54,
              "title": "Pubg Printed Graphic T-Shirt",
              "price": 46,
              "quantity": 3,
              "total": 138,
              "discountPercentage": 16.44,
              "discountedPrice": 115
            }
          ],
          "total": 3023,
          "discountedTotal": 2625,
          "userId": 30,
          "totalProducts": 5,
          "totalQuantity": 10
        },
        {
          "id": 3,
          "products": [
            {
              "id": 37,
              "title": "ank Tops for Womens/Girls",
              "price": 50,
              "quantity": 2,
              "total": 100,
              "discountPercentage": 12.05,
              "discountedPrice": 88
            },
            {
              "id": 80,
              "title": "Chain Pin Tassel Earrings",
              "price": 45,
              "quantity": 3,
              "total": 135,
              "discountPercentage": 17.75,
              "discountedPrice": 111
            },
            {
              "id": 68,
              "title": "Stylish Luxury Digital Watch",
              "price": 57,
              "quantity": 3,
              "total": 171,
              "discountPercentage": 9.03,
              "discountedPrice": 156
            },
            {
              "id": 81,
              "title": "Round Silver Frame Sun Glasses",
              "price": 19,
              "quantity": 1,
              "total": 19,
              "discountPercentage": 10.1,
              "discountedPrice": 17
            },
            {
              "id": 90,
              "title": "Cycle Bike Glow",
              "price": 35,
              "quantity": 1,
              "total": 35,
              "discountPercentage": 11.08,
              "discountedPrice": 31
            }
          ],
          "total": 460,
          "discountedTotal": 403,
          "userId": 63,
          "totalProducts": 5,
          "totalQuantity": 10
        },
        {
          "id": 4,
          "products": [
            {
              "id": 36,
              "title": "Sleeve Shirt Womens",
              "price": 90,
              "quantity": 1,
              "total": 90,
              "discountPercentage": 10.89,
              "discountedPrice": 80
            },
            {
              "id": 54,
              "title": "Pubg Printed Graphic T-Shirt",
              "price": 46,
              "quantity": 1,
              "total": 46,
              "discountPercentage": 16.44,
              "discountedPrice": 38
            },
            {
              "id": 11,
              "title": "perfume Oil",
              "price": 13,
              "quantity": 3,
              "total": 39,
              "discountPercentage": 8.4,
              "discountedPrice": 36
            },
            {
              "id": 47,
              "title": "Sneaker shoes",
              "price": 120,
              "quantity": 2,
              "total": 240,
              "discountPercentage": 10.37,
              "discountedPrice": 215
            },
            {
              "id": 64,
              "title": "Leather Strap Skeleton Watch",
              "price": 46,
              "quantity": 3,
              "total": 138,
              "discountPercentage": 10.2,
              "discountedPrice": 124
            }
          ],
          "total": 553,
          "discountedTotal": 493,
          "userId": 83,
          "totalProducts": 5,
          "totalQuantity": 10
        },
        {
          "id": 5,
          "products": [
            {
              "id": 23,
              "title": "Orange Essence Food Flavou",
              "price": 14,
              "quantity": 3,
              "total": 42,
              "discountPercentage": 8.04,
              "discountedPrice": 39
            },
            {
              "id": 91,
              "title": "Black Motorbike",
              "price": 569,
              "quantity": 1,
              "total": 569,
              "discountPercentage": 13.63,
              "discountedPrice": 491
            },
            {
              "id": 45,
              "title": "Malai Maxi Dress",
              "price": 50,
              "quantity": 2,
              "total": 100,
              "discountPercentage": 5.07,
              "discountedPrice": 95
            },
            {
              "id": 84,
              "title": "Square Sunglasses",
              "price": 28,
              "quantity": 1,
              "total": 28,
              "discountPercentage": 13.89,
              "discountedPrice": 24
            },
            {
              "id": 70,
              "title": "Stainless Steel Women",
              "price": 35,
              "quantity": 3,
              "total": 105,
              "discountPercentage": 8.98,
              "discountedPrice": 96
            }
          ],
          "total": 844,
          "discountedTotal": 745,
          "userId": 58,
          "totalProducts": 5,
          "totalQuantity": 10
        }
    ];

    useEffect(() => {
        console.log('Child Component rerendered');
    })

    return (
        <div className='container'>
            <div className='row'>
                {carts.map(cart => (
                    <div className='col-sm-12 my-2 py-2 border-bottom'>
                        <h4>Id: {cart.id}</h4>
                        <h4>Total Amount: {cart.total}</h4>
                        <h4>Discounted Total: {cart.discountedTotal}</h4>
                        <h4>User Id: {cart.userId}</h4>
                        <h4>Total Products: {cart.totalProducts}</h4>
                        <h4>Total Quantity: {cart.totalQuantity}</h4>
                        <button className='btn btn-primary' onClick={() => props.selectCartInfo(cart)}>Get Cart Info</button>
                    </div>
                ))}
            </div>
        </div>
    )
}