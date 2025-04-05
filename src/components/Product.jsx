import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove, add } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    }
    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.success("Item removed from Cart");
    }

    const [selected, useSelected] = useState(false);
    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.image} />
            </div>
            <div>
                <p>{post.price}</p>
            </div>
            {/* Hardcore data */}
            {/* <button>
                {
                    selected ? <p>Remove Item</p> : <p>Add to Cart</p>
                }
            </button> */}
            {
                cart.some((p) => p.id === post.id) ?
                    (<button onClick={removeFromCart}>
                        Remove Item
                    </button>) :
                    (<button onClick={addToCart}>
                        Add to Cart
                    </button>)
            }

        </div>
    )
}

export default Product
