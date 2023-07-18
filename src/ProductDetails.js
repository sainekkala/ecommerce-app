import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Outlet, NavLink } from 'react-router-dom';

function ProductDetailsComponent() {
    const [products] = useState(
        [
            {
                id: 1,
                name: "SAMSUNG Galaxy F13 (Waterfall Blue, 128 GB)",
                imgSrc: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
                price: 10699,
                specifications: [
                    "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                    "16.76 cm (6.6 inch) Full HD+ Display",
                    "50MP + 5MP + 2MP | 8MP Front Camera",
                    "6000 mAh Lithium Ion Battery",
                    "Exynos 850 Processor",
                    "1 Year Warranty Provided By the Manufacturer from Date of Purchase"
                ],
                avgRating: 4.3,
                rating: 151986,
                review: 8688,
                inStock: true,
                imgSrcs: [
                    "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/b/c/d/-original-imagp27a56f8zhz6.jpeg?q=70",
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/d/i/6/-original-imagp27anrxbehb9.jpeg?q=70',
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/a/e/-original-imagp27a4gc26369.jpeg?q=70'
                ]
            },
            {
                id: 2,
                name: "Infinix SMART 7 (Azure Blue, 64 GB)",
                imgSrc: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/u/c/u/-original-imagnanh2yvpc4zx.jpeg?q=70",
                price: 7299,
                specifications: [
                    "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                    "16.76 cm (6.6 inch) Full HD+ Display",
                    "50MP + 5MP + 2MP | 8MP Front Camera",
                    "6000 mAh Lithium Ion Battery",
                    "Exynos 850 Processor",
                    "1 Year Warranty Provided By the Manufacturer from Date of Purchase"
                ],
                avgRating: 4.3,
                rating: 151986,
                review: 8688,
                inStock: true,
                imgSrcs: [

                    "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/u/c/u/-original-imagnanh2yvpc4zx.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/b/c/d/-original-imagp27a56f8zhz6.jpeg?q=70",
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/d/i/6/-original-imagp27anrxbehb9.jpeg?q=70',
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/a/e/-original-imagp27a4gc26369.jpeg?q=70'
                ]
            },
            {
                id: 3,
                name: "Infinix HOT 30i (Diamond White, 64 GB)",
                imgSrc: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/3/4/-original-imagz3cuyhmc45pc.jpeg?q=70",
                price: 7999,
                specifications: [
                    "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                    "16.76 cm (6.6 inch) Full HD+ Display",
                    "50MP + 5MP + 2MP | 8MP Front Camera",
                    "6000 mAh Lithium Ion Battery",
                    "Exynos 850 Processor",
                    "1 Year Warranty Provided By the Manufacturer from Date of Purchase"
                ],
                avgRating: 4.3,
                rating: 151986,
                review: 8688,
                inStock: false,
                imgSrcs: [

                    "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/3/4/-original-imagz3cuyhmc45pc.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/b/c/d/-original-imagp27a56f8zhz6.jpeg?q=70",
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/d/i/6/-original-imagp27anrxbehb9.jpeg?q=70',
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/a/e/-original-imagp27a4gc26369.jpeg?q=70'
                ]
            },
            {
                id: 4,
                name: "SAMSUNG Galaxy F04 (Opal Green, 64 GB)",
                imgSrc: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/d/o/-original-imaghgbyhy6banxv.jpeg?q=70",
                price: 7299,
                specifications: [
                    "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                    "16.76 cm (6.6 inch) Full HD+ Display",
                    "50MP + 5MP + 2MP | 8MP Front Camera",
                    "6000 mAh Lithium Ion Battery",
                    "Exynos 850 Processor",
                    "1 Year Warranty Provided By the Manufacturer from Date of Purchase"
                ],
                avgRating: 4.3,
                rating: 151986,
                review: 8688,
                inStock: false,
                imgSrcs: [

                    "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/d/o/-original-imaghgbyhy6banxv.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/b/c/d/-original-imagp27a56f8zhz6.jpeg?q=70",
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/d/i/6/-original-imagp27anrxbehb9.jpeg?q=70',
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/a/e/-original-imagp27a4gc26369.jpeg?q=70'
                ]
            },
            {
                id: 5,
                name: "vivo T2 5G (Velocity Wave, 128 GB)",
                imgSrc: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
                price: 10699,
                specifications: [
                    "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                    "16.76 cm (6.6 inch) Full HD+ Display",
                    "50MP + 5MP + 2MP | 8MP Front Camera",
                    "6000 mAh Lithium Ion Battery",
                    "Exynos 850 Processor",
                    "1 Year Warranty Provided By the Manufacturer from Date of Purchase"
                ],
                avgRating: 4.3,
                rating: 151986,
                review: 8688,
                inStock: true,
                imgSrcs: [

                    "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/b/c/d/-original-imagp27a56f8zhz6.jpeg?q=70",
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/d/i/6/-original-imagp27anrxbehb9.jpeg?q=70',
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/a/e/-original-imagp27a4gc26369.jpeg?q=70'
                ]
            },
            {
                id: 6,
                name: "POCO M4 5G (Power Black, 64 GB)",
                imgSrc: "https://rukminim1.flixcart.com/image/312/312/l2jcccw0/mobile/i/1/y/-original-imagdu8gtefvchbn.jpeg?q=70",
                price: 11999,
                specifications: [
                    "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                    "16.76 cm (6.6 inch) Full HD+ Display",
                    "50MP + 5MP + 2MP | 8MP Front Camera",
                    "6000 mAh Lithium Ion Battery",
                    "Exynos 850 Processor",
                    "1 Year Warranty Provided By the Manufacturer from Date of Purchase"
                ],
                avgRating: 4.3,
                rating: 151986,
                review: 8688,
                inStock: false,
                imgSrcs: [

                    "https://rukminim1.flixcart.com/image/312/312/l2jcccw0/mobile/i/1/y/-original-imagdu8gtefvchbn.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/b/c/d/-original-imagp27a56f8zhz6.jpeg?q=70",
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/d/i/6/-original-imagp27anrxbehb9.jpeg?q=70',
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/a/e/-original-imagp27a4gc26369.jpeg?q=70'
                ]
            },
            {
                id: 7,
                name: "realme C33 2023 (Aqua Blue, 128 GB)",
                imgSrc: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70",
                price: 11999,
                specifications: [
                    "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                    "16.76 cm (6.6 inch) Full HD+ Display",
                    "50MP + 5MP + 2MP | 8MP Front Camera",
                    "6000 mAh Lithium Ion Battery",
                    "Exynos 850 Processor",
                    "1 Year Warranty Provided By the Manufacturer from Date of Purchase"
                ],
                avgRating: 4.3,
                rating: 151986,
                review: 8688,
                inStock: true,
                imgSrcs: [

                    "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/b/c/d/-original-imagp27a56f8zhz6.jpeg?q=70",
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/d/i/6/-original-imagp27anrxbehb9.jpeg?q=70',
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/a/e/-original-imagp27a4gc26369.jpeg?q=70'
                ]
            },
            {
                id: 8,
                name: "POCO X5 5G (Wildcat Blue, 128 GB)",
                imgSrc: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/f/e/l/-original-imagnqpndcmxghyq.jpeg?q=70",
                price: 15999,
                specifications: [
                    "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                    "16.76 cm (6.6 inch) Full HD+ Display",
                    "50MP + 5MP + 2MP | 8MP Front Camera",
                    "6000 mAh Lithium Ion Battery",
                    "Exynos 850 Processor",
                    "1 Year Warranty Provided By the Manufacturer from Date of Purchase"
                ],
                avgRating: 4.3,
                rating: 151986,
                review: 8688,
                inStock: false,
                imgSrcs: [

                    "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/f/e/l/-original-imagnqpndcmxghyq.jpeg?q=70",
                    "https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/b/c/d/-original-imagp27a56f8zhz6.jpeg?q=70",
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/d/i/6/-original-imagp27anrxbehb9.jpeg?q=70',
                    'https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/o/a/e/-original-imagp27a4gc26369.jpeg?q=70'
                ]
            },
        ]);
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredProduct, setFilteredProduct] = useState({});
    const [thumbnailImg, setThumbnailImg] = useState(null);

    useEffect(() => {
        const productId = params.productId;
        const _filteredProduct = products.find((product) => product.id == productId);
        setFilteredProduct(_filteredProduct);
        setThumbnailImg(_filteredProduct.imgSrcs[0])
        console.log(filteredProduct);
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-4">
                    <div className="row">
                        <div className="col-sm-4">
                            {filteredProduct.imgSrcs && filteredProduct.imgSrcs.map((src) => (
                                <div className="border text-center m-2 p-2">
                                    <img src={src} width="70px" height="90px" onClick={() => setThumbnailImg(src)} style={{ cursor: 'pointer' }} />
                                </div>
                            ))}
                        </div>
                        <div className="col-sm-8">
                            <img src={thumbnailImg} width="160px" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <h3>{filteredProduct.name}</h3>
                    <h3>{filteredProduct.price}</h3>
                    <p><span class="badge text-bg-primary">{filteredProduct.avgRating} <i class="fa-solid fa-star"></i></span><span className="mx-3">{filteredProduct.rating}</span><span>{filteredProduct.review}</span> </p>
                    <ul>
                        {filteredProduct.specifications && filteredProduct.specifications.map(specification => (
                            <li>{specification}</li>
                        ))}
                    </ul>
                    {filteredProduct.inStock ? (
                        <button className="btn btn-success">Add to Cart</button>
                    ) : (
                        <button className="btn btn-danger">Out of Stock</button>
                    )}

                    <nav class="navbar navbar-expand-lg bg-body-tertiary my-4">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <NavLink className="nav-link detail-link" activeClassName="active" to={"description"}>Description</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink className="nav-link detail-link" activeClassName="active" to={"specifications"}>Specifications</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink className="nav-link detail-link" activeClassName="active" to={"rating-reviews"}>Ratings & Reviews</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsComponent;