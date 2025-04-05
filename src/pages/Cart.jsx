import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])
  return (
    <div>
      {
        cart.length > 0 ?
          // True
          (
            <div>
              <div>
                {/* Cart item display krna hai */}
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div>
                <div>
                  <div>Your Cart</div>
                  <div>Summary</div>
                  <p>
                    <span>Total Items: {cart.length}</span>
                  </p>
                </div>
              </div>

              <div>
                <p>Total Amount: {totalAmount}</p>
              </div>
            </div>
          ) :
          // False
          (
            <div>
              <h1>Cart Empty</h1>
              <Link to={"/"}>
                <button>
                  Shop Now
                </button>
              </Link>
            </div>
          )
      }

    </div>
  )
}

export default Cart
