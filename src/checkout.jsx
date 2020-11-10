import React from 'react'
import './checkout.css'
import CheckoutProduct from './checkoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './subtotal'
function Checkout() {
    const [{ basket,user}, dispatch] = useStateValue();
    return (
        <div className="checkout">

            <div className="checkout__left">
                <img className="checkout__Ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>

                    {

                        basket.map(item=>(
                          <CheckoutProduct 
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           price={item.price}
                           rating={item.rating}/>
                        ))}

                    {/* checkoutproduct */}
                    {/* basket items */}
                    {/* basket items */}
                    {/* basket items */}
                    {/* basket items  */}
                </div>

            </div>
            <div className="checkout__right">
                {/* <h2>The sub total</h2> */}
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
