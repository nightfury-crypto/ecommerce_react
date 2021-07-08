import React, { useState } from 'react';
import '../ComponentsCss/ProductDetails.css';
import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { mens } from './SliderData';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';


const ProductDetails = () => {
    const [current, setCurrent] = useState({ img: "img/gallery-1.jpg", alt: "img1" })
    const handlePreview = (e) => {
        e.preventDefault();
        const preview = { img: e.target.src, alt: e.target.alt }
        setCurrent(preview)
    }
    return (
        <div className="productDetail">
            <div className="product_main">
                <div className="Product_left_whole">
                    <div className="Product_left">

                        <div className="big_preview">
                            <img src={current.img} alt={current.alt} />
                        </div>
                        <div className="small_preview">
                            {mens.map((men) => {
                                if (men.id === "1") {
                                    return <span><img src={men.imgShow1} alt={men.alt} onMouseEnter={handlePreview} />
                                        <img src={men.imgShow2} alt={men.alt} onMouseEnter={handlePreview} />
                                        <img src={men.imgShow3} alt={men.alt} onMouseEnter={handlePreview} />
                                        <img src={men.imgShow4} alt={men.alt} onMouseEnter={handlePreview} />
                                    </span>
                                }
                            })}
                        </div>

                    </div>
                    <div className="addCart">
                        <Button variant="contained" color="secondary"><AddShoppingCartIcon />
                            Add to Cart
                        </Button>
                        <Button variant="contained" color="primary"><FlashOnIcon />
                            Buy Now
                        </Button>
                    </div>
                </div>
                <div className="Product_right">
                    <h2>PUMA T-shirt dark red shade</h2>
                    <span className="Stars">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                        <StarBorderIcon />
                        <span >4.5 stars</span>
                    </span>
                    <span className="black"> Price <span> $10</span></span>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
