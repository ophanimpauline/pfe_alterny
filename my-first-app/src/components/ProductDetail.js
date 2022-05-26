import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {productDetail} from "../features/singleproductSlice"
import {addToCart} from "../features/Cart/cartSlice";
import {addToWishlist} from "../features/Wishlist/wishlistSlice";
import {useParams} from "react-router-dom";
//import ProductReview from ""

export default function ProductDetail() {
    const dispatch = useDispatch();
    let {id} = useParams();

    useEffect(() => {
        dispatch(productDetail(id));
    }, [id, dispatch]);

    const {items, images} = useSelector(
        (state) => state.singleproduct
    );

    const handleAddToCart = (items) => {
        dispatch(addToCart(items));
    };

    const handleAddToWishlist = (items) => {
        dispatch(addToWishlist(items));
    };

    return (
        <div>
            {items ? (
                <div className="container-spd">
                    <div className="product-detail-spd">
                        {
                            images && images.length > 0 ? <div className="big-img-spd">
                                    <img className="big-img" src={images[0].image} alt="image1"/>
                                </div> :
                                <div></div>
                        }
                        <div className="box-spd">
                            <div className="row-spd">
                                <h2>{items.title} </h2>
                                <span>{items.unit_price}dt</span>
                            </div>
                            <div className="colors-spd">
                                here the colors
                                {/*{product.colors.map(color => (
           <button style = {{background: color }}></button>
         ))} */}
                            </div>
                            <p className="spd-p">{items.description}</p>
                            {
                                images && images.length > 0 ?
                                    <div className="thumb-spd">
                                        <img src={images[0].image} alt="image0"/>
                                        <img src={images[1].image} alt="image1"/>
                                        <img src={images[2].image} alt="image2"/>
                                        <img src={images[3].image} alt="image3"/>
                                    </div> :
                                    <div></div>
                            }
                            <button className="cart-spd" onClick={() => handleAddToCart(items)}> Ajouter au panier
                            </button>
                            <button className="wishlist-spd" onClick={() => handleAddToWishlist(items)}> Ajouter au
                                wishlist
                            </button>
                        </div>
                    </div>
                </div>
            ) : <div></div>}
        </div>
    );
}