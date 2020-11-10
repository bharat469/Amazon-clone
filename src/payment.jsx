import React from 'react'
import './payment.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './checkoutProduct'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();



    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* dilivery address */}
                <div className="payment__section ">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>Near Gas Agency</p>
                            <p>garden colony kharar</p>
                            <p>Mohali punjab </p>
                            <p>pin-code 140301 </p>

                        </div>
                </div>
                {/* Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items And Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />
                        ))}
                    </div>
                </div>

               
               
            </div>
        </div>
    )
}

export default Payment
