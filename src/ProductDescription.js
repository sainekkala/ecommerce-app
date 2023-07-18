import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function ProductDescription() {
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
                ],
                descriptions: [
                    {
                        title: 'Fingerprint Scanner',
                        description: 'The rear of this phone has a stylish fingerprint sensor that makes it possible to unlock your phone in the most efficient manner and keep it highly safe.',
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/038fc2090ba24b0183fef8f0898c09c1_183d05e40d6_image.jpeg?q=90'
                    },
                    {
                        title: 'Premium Leather-feel Design',
                        description: "With the Redmi A1+'s leather texture design, which provides you with a terrific grip, a modern appearance, and a smudge-free touch, you can experience a sense of luxury that just feels right in your hands.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/1a5ebb1c5a344b4bb6f25d71219d45e8_183d05d8635_image.jpeg?q=90'
                    },
                    {
                        title: 'Large Display',
                        description: "This phone has a large HD+ display that supports a touch sampling rate of 120 Hz, a display brightness of 400 nits, and both light and dark modes.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/0235cca9c07243a5958d1b7239583966_183d05d9ca2_image.jpeg?q=90'
                    }
                ],
                detailedSpecifications: {
                    general: {
                        inTheBox: 'Handset, Adapter, USB Cable, Sim Eject Tool, Warranty Card, User Guide',
                        modelNo: 'MZB0CI8IN',
                        modelName: 'A1+',
                        color: 'Light Green'
                    },
                    displayFeatures: {
                        displaySize: '16.56 cm (6.52 inch)',
                        resolution: '1600 x 720 Pixels',
                        otherDisplayFeatures: '120 Hz Touch Sampling Rate, Brightness: 400nits'
                    }
                },
                ratingReviews: [
                    {
                        rating: 5,
                        title: 'Brillant',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    },
                    {
                        rating: 4,
                        title: 'Good',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    }
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
                ],
                descriptions: [
                    {
                        title: 'Fingerprint Scanner',
                        description: 'The rear of this phone has a stylish fingerprint sensor that makes it possible to unlock your phone in the most efficient manner and keep it highly safe.',
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/038fc2090ba24b0183fef8f0898c09c1_183d05e40d6_image.jpeg?q=90'
                    },
                    {
                        title: 'Premium Leather-feel Design',
                        description: "With the Redmi A1+'s leather texture design, which provides you with a terrific grip, a modern appearance, and a smudge-free touch, you can experience a sense of luxury that just feels right in your hands.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/1a5ebb1c5a344b4bb6f25d71219d45e8_183d05d8635_image.jpeg?q=90'
                    },
                    {
                        title: 'Large Display',
                        description: "This phone has a large HD+ display that supports a touch sampling rate of 120 Hz, a display brightness of 400 nits, and both light and dark modes.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/0235cca9c07243a5958d1b7239583966_183d05d9ca2_image.jpeg?q=90'
                    }
                ],
                detailedSpecifications: {
                    general: {
                        inTheBox: 'Handset, Adapter, USB Cable, Sim Eject Tool, Warranty Card, User Guide',
                        modelNo: 'MZB0CI8IN',
                        modelName: 'A1+',
                        color: 'Light Green'
                    },
                    displayFeatures: {
                        displaySize: '16.56 cm (6.52 inch)',
                        resolution: '1600 x 720 Pixels',
                        otherDisplayFeatures: '120 Hz Touch Sampling Rate, Brightness: 400nits'
                    }
                },
                ratingReviews: [
                    {
                        rating: 5,
                        title: 'Brillant',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    },
                    {
                        rating: 4,
                        title: 'Good',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    }
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
                ],
                descriptions: [
                    {
                        title: 'Fingerprint Scanner',
                        description: 'The rear of this phone has a stylish fingerprint sensor that makes it possible to unlock your phone in the most efficient manner and keep it highly safe.',
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/038fc2090ba24b0183fef8f0898c09c1_183d05e40d6_image.jpeg?q=90'
                    },
                    {
                        title: 'Premium Leather-feel Design',
                        description: "With the Redmi A1+'s leather texture design, which provides you with a terrific grip, a modern appearance, and a smudge-free touch, you can experience a sense of luxury that just feels right in your hands.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/1a5ebb1c5a344b4bb6f25d71219d45e8_183d05d8635_image.jpeg?q=90'
                    },
                    {
                        title: 'Large Display',
                        description: "This phone has a large HD+ display that supports a touch sampling rate of 120 Hz, a display brightness of 400 nits, and both light and dark modes.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/0235cca9c07243a5958d1b7239583966_183d05d9ca2_image.jpeg?q=90'
                    }
                ],
                detailedSpecifications: {
                    general: {
                        inTheBox: 'Handset, Adapter, USB Cable, Sim Eject Tool, Warranty Card, User Guide',
                        modelNo: 'MZB0CI8IN',
                        modelName: 'A1+',
                        color: 'Light Green'
                    },
                    displayFeatures: {
                        displaySize: '16.56 cm (6.52 inch)',
                        resolution: '1600 x 720 Pixels',
                        otherDisplayFeatures: '120 Hz Touch Sampling Rate, Brightness: 400nits'
                    }
                },
                ratingReviews: [
                    {
                        rating: 5,
                        title: 'Brillant',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    },
                    {
                        rating: 4,
                        title: 'Good',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    }
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
                ],
                descriptions: [
                    {
                        title: 'Fingerprint Scanner',
                        description: 'The rear of this phone has a stylish fingerprint sensor that makes it possible to unlock your phone in the most efficient manner and keep it highly safe.',
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/038fc2090ba24b0183fef8f0898c09c1_183d05e40d6_image.jpeg?q=90'
                    },
                    {
                        title: 'Premium Leather-feel Design',
                        description: "With the Redmi A1+'s leather texture design, which provides you with a terrific grip, a modern appearance, and a smudge-free touch, you can experience a sense of luxury that just feels right in your hands.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/1a5ebb1c5a344b4bb6f25d71219d45e8_183d05d8635_image.jpeg?q=90'
                    },
                    {
                        title: 'Large Display',
                        description: "This phone has a large HD+ display that supports a touch sampling rate of 120 Hz, a display brightness of 400 nits, and both light and dark modes.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/0235cca9c07243a5958d1b7239583966_183d05d9ca2_image.jpeg?q=90'
                    }
                ],
                detailedSpecifications: {
                    general: {
                        inTheBox: 'Handset, Adapter, USB Cable, Sim Eject Tool, Warranty Card, User Guide',
                        modelNo: 'MZB0CI8IN',
                        modelName: 'A1+',
                        color: 'Light Green'
                    },
                    displayFeatures: {
                        displaySize: '16.56 cm (6.52 inch)',
                        resolution: '1600 x 720 Pixels',
                        otherDisplayFeatures: '120 Hz Touch Sampling Rate, Brightness: 400nits'
                    }
                },
                ratingReviews: [
                    {
                        rating: 5,
                        title: 'Brillant',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    },
                    {
                        rating: 4,
                        title: 'Good',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    }
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
                ],
                descriptions: [
                    {
                        title: 'Fingerprint Scanner',
                        description: 'The rear of this phone has a stylish fingerprint sensor that makes it possible to unlock your phone in the most efficient manner and keep it highly safe.',
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/038fc2090ba24b0183fef8f0898c09c1_183d05e40d6_image.jpeg?q=90'
                    },
                    {
                        title: 'Premium Leather-feel Design',
                        description: "With the Redmi A1+'s leather texture design, which provides you with a terrific grip, a modern appearance, and a smudge-free touch, you can experience a sense of luxury that just feels right in your hands.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/1a5ebb1c5a344b4bb6f25d71219d45e8_183d05d8635_image.jpeg?q=90'
                    },
                    {
                        title: 'Large Display',
                        description: "This phone has a large HD+ display that supports a touch sampling rate of 120 Hz, a display brightness of 400 nits, and both light and dark modes.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/0235cca9c07243a5958d1b7239583966_183d05d9ca2_image.jpeg?q=90'
                    }
                ],
                detailedSpecifications: {
                    general: {
                        inTheBox: 'Handset, Adapter, USB Cable, Sim Eject Tool, Warranty Card, User Guide',
                        modelNo: 'MZB0CI8IN',
                        modelName: 'A1+',
                        color: 'Light Green'
                    },
                    displayFeatures: {
                        displaySize: '16.56 cm (6.52 inch)',
                        resolution: '1600 x 720 Pixels',
                        otherDisplayFeatures: '120 Hz Touch Sampling Rate, Brightness: 400nits'
                    }
                },
                ratingReviews: [
                    {
                        rating: 5,
                        title: 'Brillant',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    },
                    {
                        rating: 4,
                        title: 'Good',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    }
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
                ],
                descriptions: [
                    {
                        title: 'Fingerprint Scanner',
                        description: 'The rear of this phone has a stylish fingerprint sensor that makes it possible to unlock your phone in the most efficient manner and keep it highly safe.',
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/038fc2090ba24b0183fef8f0898c09c1_183d05e40d6_image.jpeg?q=90'
                    },
                    {
                        title: 'Premium Leather-feel Design',
                        description: "With the Redmi A1+'s leather texture design, which provides you with a terrific grip, a modern appearance, and a smudge-free touch, you can experience a sense of luxury that just feels right in your hands.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/1a5ebb1c5a344b4bb6f25d71219d45e8_183d05d8635_image.jpeg?q=90'
                    },
                    {
                        title: 'Large Display',
                        description: "This phone has a large HD+ display that supports a touch sampling rate of 120 Hz, a display brightness of 400 nits, and both light and dark modes.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/0235cca9c07243a5958d1b7239583966_183d05d9ca2_image.jpeg?q=90'
                    }
                ],
                detailedSpecifications: {
                    general: {
                        inTheBox: 'Handset, Adapter, USB Cable, Sim Eject Tool, Warranty Card, User Guide',
                        modelNo: 'MZB0CI8IN',
                        modelName: 'A1+',
                        color: 'Light Green'
                    },
                    displayFeatures: {
                        displaySize: '16.56 cm (6.52 inch)',
                        resolution: '1600 x 720 Pixels',
                        otherDisplayFeatures: '120 Hz Touch Sampling Rate, Brightness: 400nits'
                    }
                },
                ratingReviews: [
                    {
                        rating: 5,
                        title: 'Brillant',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    },
                    {
                        rating: 4,
                        title: 'Good',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    }
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
                ],
                descriptions: [
                    {
                        title: 'Fingerprint Scanner',
                        description: 'The rear of this phone has a stylish fingerprint sensor that makes it possible to unlock your phone in the most efficient manner and keep it highly safe.',
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/038fc2090ba24b0183fef8f0898c09c1_183d05e40d6_image.jpeg?q=90'
                    },
                    {
                        title: 'Premium Leather-feel Design',
                        description: "With the Redmi A1+'s leather texture design, which provides you with a terrific grip, a modern appearance, and a smudge-free touch, you can experience a sense of luxury that just feels right in your hands.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/1a5ebb1c5a344b4bb6f25d71219d45e8_183d05d8635_image.jpeg?q=90'
                    },
                    {
                        title: 'Large Display',
                        description: "This phone has a large HD+ display that supports a touch sampling rate of 120 Hz, a display brightness of 400 nits, and both light and dark modes.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/0235cca9c07243a5958d1b7239583966_183d05d9ca2_image.jpeg?q=90'
                    }
                ],
                detailedSpecifications: {
                    general: {
                        inTheBox: 'Handset, Adapter, USB Cable, Sim Eject Tool, Warranty Card, User Guide',
                        modelNo: 'MZB0CI8IN',
                        modelName: 'A1+',
                        color: 'Light Green'
                    },
                    displayFeatures: {
                        displaySize: '16.56 cm (6.52 inch)',
                        resolution: '1600 x 720 Pixels',
                        otherDisplayFeatures: '120 Hz Touch Sampling Rate, Brightness: 400nits'
                    }
                },
                ratingReviews: [
                    {
                        rating: 5,
                        title: 'Brillant',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    },
                    {
                        rating: 4,
                        title: 'Good',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    }
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
                ],
                descriptions: [
                    {
                        title: 'Fingerprint Scanner',
                        description: 'The rear of this phone has a stylish fingerprint sensor that makes it possible to unlock your phone in the most efficient manner and keep it highly safe.',
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/038fc2090ba24b0183fef8f0898c09c1_183d05e40d6_image.jpeg?q=90'
                    },
                    {
                        title: 'Premium Leather-feel Design',
                        description: "With the Redmi A1+'s leather texture design, which provides you with a terrific grip, a modern appearance, and a smudge-free touch, you can experience a sense of luxury that just feels right in your hands.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/1a5ebb1c5a344b4bb6f25d71219d45e8_183d05d8635_image.jpeg?q=90'
                    },
                    {
                        title: 'Large Display',
                        description: "This phone has a large HD+ display that supports a touch sampling rate of 120 Hz, a display brightness of 400 nits, and both light and dark modes.",
                        imgSrc: 'https://rukminim1.flixcart.com/image/200/200/cms-rpd-img/0235cca9c07243a5958d1b7239583966_183d05d9ca2_image.jpeg?q=90'
                    }
                ],
                detailedSpecifications: {
                    general: {
                        inTheBox: 'Handset, Adapter, USB Cable, Sim Eject Tool, Warranty Card, User Guide',
                        modelNo: 'MZB0CI8IN',
                        modelName: 'A1+',
                        color: 'Light Green'
                    },
                    displayFeatures: {
                        displaySize: '16.56 cm (6.52 inch)',
                        resolution: '1600 x 720 Pixels',
                        otherDisplayFeatures: '120 Hz Touch Sampling Rate, Brightness: 400nits'
                    }
                },
                ratingReviews: [
                    {
                        rating: 5,
                        title: 'Brillant',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    },
                    {
                        rating: 4,
                        title: 'Good',
                        imgSrcs: [
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_e52d6f816bd741e4b6e77339a25b4d1d.jpg?q=90',
                            'https://rukminim1.flixcart.com/blobio/124/124/imr/blobio-imr_f1d8a2edaea74fb09de4f7205cc1d8e6.jpg?q=90'
                        ]
                    }
                ]
            },
        ]);
    const [filteredProduct, setFilteredProduct] = useState({});
    const params = useParams();
    useEffect(() => {
        const productId = params.productId;
        const _filteredProduct = products.find((product) => product.id === parseInt(productId));
        setFilteredProduct(_filteredProduct);
    }, []);
    return (
        <div className='container-fluid'>
            <h3>Product Description</h3>
            {filteredProduct.descriptions && filteredProduct.descriptions.map((description, index) => (
                <div className="row my-3">
                    {((index % 2) === 0) ? (
                        <>
                            <div className="col-sm-4">
                                <img src={description.imgSrc} />
                            </div>
                            <div className="col-sm-8">
                                <h4>{description.title}</h4>
                                <p>{description.description}</p>
                            </div>
                        </>
                    ): (
                        <>
                            <div className="col-sm-8">
                                <h4>{description.title}</h4>
                                <p>{description.description}</p>
                            </div>
                            <div className="col-sm-4">
                                <img src={description.imgSrc} />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProductDescription;